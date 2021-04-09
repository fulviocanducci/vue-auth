<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          :state="validateState('email')"
          id="input-1"
          v-model="$v.form.email.$model"
          type="email"
          placeholder="Enter e-mail"
          focus
          aria-describedby="input-1"
        ></b-form-input>
        <b-form-invalid-feedback id="input-1">{{
          !this.$v.form.email.required ? "Required" : ""
        }}</b-form-invalid-feedback>
        <b-form-invalid-feedback id="input-1">{{
          !this.$v.form.email.email ? "E-mail" : ""
        }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          type="password"
          id="input-2"
          :state="validateState('password')"
          v-model="$v.form.password.$model"
          placeholder="Enter password"
          aria-describedby="input-2"
        ></b-form-input>
        <b-form-invalid-feedback id="input-1">{{
          !this.$v.form.password.required ? "Required" : ""
        }}</b-form-invalid-feedback>
        <b-form-invalid-feedback id="input-1">{{
          !this.$v.form.password.minLength ? "Min length 3" : ""
        }}</b-form-invalid-feedback>
      </b-form-group>
      <b-button type="submit" variant="primary" block>Enter</b-button>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import http from "../../../../utils/http";
import token from "../../../../utils/token";

export default {
  mixins: [validationMixin],
  name: "form-login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit(event) {
      event.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      const { email, password } = this.$v.form.$model;
      http.post("auth/login", { email, password }).then(
        (result) => {
          console.log(result.status);
          if (result.status === 200) {
            token.add(result.data.access_token);
            this.$store.commit("add", result.data.access_token);
            this.$router.push("/");
          } else {
            this.$store.commit("del");
            alert("Error");
          }
        },
        () => alert("E-mail and password inválid.")
      );
    },
    onReset(event) {
      event.preventDefault();
      this.form.email = "";
      this.form.password = "";
    },
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(3),
      },
    },
  },
};
</script>
