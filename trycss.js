export const buttons = {
  variants: {
    default: {
      classes: "btn",
      text: "Default Button",
    },
    fill: {
      classes: "btn-fill",
      text: "Fill Button",
    },
    dashed: {
      classes: "btn-dashed",
      text: "Dashed Button",
    },
    text: {
      classes: "btn-text",
      text: "Text Button",
    },
    link: {
      classes: "btn-link",
      text: "Link Button",
    },
  },
  sizes: {
    sm: {
      classes: "btn-sm",
      text: "Small Button",
    },
    default: {
      classes: "btn",
      text: "Default Size Button",
    },
    lg: {
      classes: "btn-lg",
      text: "Large Button",
    },
  },
  colors: {
    success: {
      classes: "btn-success",
      text: "Success Button",
    },
    danger: {
      classes: "btn-danger",
      text: "Danger Button",
    },
    warning: {
      classes: "btn-warning",
      text: "Warning Button",
    },
    info: {
      classes: "btn-info",
      text: "Info Button",
    },
  },
};

export function generateButtonCombinations(buttons) {
  const buttonList = [];

  for (const variantKey in buttons.variants) {
    const variant = buttons.variants[variantKey];

    for (const sizeKey in buttons.sizes) {
      const size = buttons.sizes[sizeKey];

      // Default size buttons should not get an additional class
      const sizeClasses = sizeKey === "default" ? "" : size.classes;

      for (const colorKey in buttons.colors) {
        const color = buttons.colors[colorKey];

        buttonList.push({
          text: `${variant.text} ${
            size.text === "Default Size Button" ? "" : size.text
          } ${color.text}`,
          classes: `${variant.classes} ${sizeClasses} ${color.classes}`.trim(),
        });
      }

      // Add variant without any color
      buttonList.push({
        text: `${variant.text} ${
          size.text === "Default Size Button" ? "" : size.text
        }`,
        classes: `${variant.classes} ${sizeClasses}`.trim(),
      });
    }
  }

  return buttonList;
}

export const buttonList = generateButtonCombinations(buttons);
console.log(buttonList);
