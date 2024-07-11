<script>
  import Field from "../components/field/Field.svelte";
  import Flex from "../components/flex/Flex.svelte";
  import { uuid } from "../utils";

  let controls = {
    // email: {
    //   type: "input",
    //   dataType: "email",
    //   placeholder: "Your email",
    //   label: "Email",
    //   id: uuid(),
    //   value: "",
    //   valid: false,
    //   validationRules: {
    //     required: true,
    //     email: true,
    //   },
    //   errors: {
    //     messages: [],
    //   },
    // },
    password: {
      type: "input",
      dataType: "password",
      placeholder: "password",
      label: "Password",
      id: uuid(),
      value: "",
      valid: false,
      validationRules: {
        required: true,
        minLength: 6,
      },
      errors: {
        messages: [],
      },
    },
    passwordAgain: {
      type: "input",
      dataType: "password",
      placeholder: "confirm password",
      label: "Confirm Password",
      id: uuid(),
      value: "",
      valid: false,
      validationRules: {
        required: true,
        minLength: 6,
      },
      errors: {
        messages: [],
      },
    },
  };
</script>

<form action="" class="m:auto col-8 border padding border-rounded-lg">
  <Flex direction="column" class="text:center">
    <h3>Reset Password</h3>
    <h5>Enter your new password to continue</h5>
  </Flex>
  <Flex direction="column" gap="sm">
    {#each Object.keys(controls) as controlKey}
      <Field>
        <span slot="label" class="capitalize">{controls[controlKey].label}</span
        >
        <input
          type="text"
          slot="input"
          class="input input-outline"
          placeholder={controls[controlKey].placeholder}
          bind:value={controls[controlKey].value}
        />
      </Field>
    {/each}

    <button class="button button-fill button-block">Reset Password</button>
  </Flex>
</form>
