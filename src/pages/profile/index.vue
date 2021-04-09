<template>
  <div>
    <div>Profile</div>
    {{ JSON.stringify(user) }}
  </div>
</template>

<script>
import http from "../../utils/http";
export default {
  name: "profile",
  data() {
    return { user: {} };
  },
  mounted() {
    http.get("auth/user").then((result) => {
      if (result.status === 200) {
        this.user = result.data;
      }
    });
  },
};
</script>

<style></style>
