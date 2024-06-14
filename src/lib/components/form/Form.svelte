<script>
  import { appStore } from "../../AppStore";
  export let currentComponent;
</script>

<form action="" class={$appStore.properties[currentComponent].classes}>
  <div class="form-control-group">
    <div class="form-label">
      <label for="">Field A, A super long label text</label>
    </div>
    <div class="form-control">
      <input type="text" class="input" />
      <div class="form-control-message form-control-error">
        error message, A prime is a natural number greater than 1 that has no
        positive divisors other than 1 and itself.
      </div>
    </div>
  </div>
  <div class="form-control-group">
    <div class="form-label">
      <label for="">Field A, A super long label text</label>
    </div>
    <div class="form-control">
      <input type="text" class="input" />
      <div class="form-control-message">
        error message, A prime is a natural number greater than 1 that has no
        positive divisors other than 1 and itself.
      </div>
    </div>
  </div>
  <div class="form-control-group">
    <div class="form-label">
      <label for="">Field A, A super long label text</label>
    </div>
    <div class="form-control">
      <input type="text" class="input" />
      <div class="form-control-message">
        error message, A prime is a natural number greater than 1 that has no
        positive divisors other than 1 and itself.
      </div>
    </div>
  </div>
  <div class="form-actions">
    <button class="btn btn-text">Cancel</button>
    <button class="btn btn-fill">Submit</button>
  </div>
</form>
