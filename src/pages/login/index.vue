<template>
  <div>
    <header-page title="Login">
      <form-login></form-login>
    </header-page>
  </div>
</template>

<script>
import FormLogin from "./components/FormLogin";
import HeaderPage from "../../components/HeaderPage";

export default {
  name: "page-login",
  components: { FormLogin, HeaderPage },
};
</script>

<style></style>
