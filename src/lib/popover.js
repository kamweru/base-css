import {
  computePosition,
  arrow,
  offset,
  shift,
  autoPlacement,
  flip,
  autoUpdate,
  size,
} from "@floating-ui/dom";
const positionPlacement = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom",
};

export function getOppositePlacement(placement) {
  return placement.replace(
    /left|right|bottom|top/g,
    (matched) => positionPlacement[matched]
  );
}
export function popover(node, options) {
  const anchorEl = options?.anchorEl ?? node.parentElement;
  if (!anchorEl) {
    return;
  }
  const updatePopover = autoUpdate(anchorEl, node, () => {
    const alignment =
      options?.autoPlacement && options?.placement
        ? options?.placement.split("-")[1]
        : undefined;
    const allowedPlacements =
      options?.autoPlacement && options?.placement
        ? [options?.placement, getOppositePlacement(options?.placement)]
        : undefined;
    const positionOptions = {
      placement: options?.placement || "bottom",
      middleware: [
        offset(options?.offset),
        options?.autoPlacement
          ? autoPlacement({ alignment, allowedPlacements })
          : flip(),
        options?.resize &&
          size({
            padding: options?.padding,
            apply({ availableWidth, availableHeight, elements }) {
              Object.assign(elements.floating.style, {
                ...((options?.resize === true ||
                  options?.resize === "width") && {
                  maxWidth: `${availableWidth}px`,
                }),
                ...((options?.resize === true ||
                  options?.resize === "height") && {
                  maxHeight: `${availableHeight}px`,
                }),
              });
            },
          }),
        shift({ padding: options?.padding }),
      ],
    };
    computePosition(anchorEl, node, positionOptions).then(({ x, y }) => {
      Object.assign(node.style, {
        left: `${x}px`,
        top: `${y}px`,
        ...(options?.matchWidth && { width: `${anchorEl.offsetWidth}px` }),
      });
    });
  });
  // Used to track if the mouse changed targets between `mousedown` and `mouseup` (ex. drag from within input to body).  Better control than `click`
  let clickTarget = null;
  function onMouseDown(e) {
    clickTarget = e.target;
  }
  document.addEventListener("mousedown", onMouseDown);

  function onMouseUp(e) {
    if (
      e.target instanceof HTMLElement &&
      clickTarget === e.target &&
      !anchorEl?.contains(e.target) &&
      !node.contains(e.target)
    ) {
      options?.cb
        ? options.cb()
        : node.dispatchEvent(new CustomEvent("clickOutside"));
    }
  }
  document.addEventListener("mouseup", onMouseUp);
  return {
    destroy() {
      updatePopover();
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    },
  };
}
