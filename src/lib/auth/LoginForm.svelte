<script>
  import Field from "../components/field/Field.svelte";
  import Flex from "../components/flex/Flex.svelte";
  import { uuid } from "../utils";

  let controls = {
    email: {
      type: "input",
      dataType: "email",
      placeholder: "Your email",
      label: "Email",
      id: uuid(),
      value: "",
      valid: false,
      validationRules: {
        required: true,
        email: true,
      },
      errors: {
        messages: [],
      },
    },
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
  };
</script>

<form action="" class="m:auto col-8 border padding border-rounded-lg">
  <Flex direction="column" class="text:center">
    <h3>Welcome Back</h3>
    <h5>Enter your email and password to continue</h5>
  </Flex>
  <Flex direction="column" gap="sm">
    {#each Object.keys(controls) as controlKey}
      <Field>
        <span slot="label" class="capitalize">{controlKey}</span>
        <input
          type="text"
          slot="input"
          class="input input-outline"
          placeholder={controls[controlKey].placeholder}
          bind:value={controls[controlKey].value}
        />
      </Field>
      {#if controlKey === "password"}
        <Flex justify="flexEnd">
          <a href="/signup" class="text-primary font-size-sm">
            New here? Signup
          </a>
        </Flex>
      {/if}
    {/each}

    <button class="button button-fill button-block">Login</button>
    <Flex justify="flexEnd">
      <a href="/forgot-password" class="text-primary font-size-sm"
        >Forgot password?</a
      >
    </Flex>
  </Flex>
</form>
