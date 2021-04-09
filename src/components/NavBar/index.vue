<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Administrator</b-navbar-brand>
      <b-navbar-toggle
        target="nav-collapse"
        is-nav
        v-if="show"
      ></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav v-if="show">
        <b-navbar-nav>
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/login" class="nav-link">Login</router-link>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="show">
          <b-nav-item-dropdown right>
            <template #button-content>
              <em> User </em>
            </template>
            <b-dropdown-item href="#" v-on:click="profile"
              >Profile</b-dropdown-item
            >
            <b-dropdown-item href="#" v-on:click="signOut"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import token from "../../utils/token";
export default {
  name: "nav-bar",
  methods: {
    signOut: function() {
      token.remove();
      this.$store.commit("del");
      this.$router.push("/login");
    },
    profile: function() {
      if (this.$router.currentRoute.name !== "profile") {
        this.$router.push("/profile");
      }
    },
  },
  computed: {
    show: function() {
      return this.$store.getters.isToken;
    },
  },
};
</script>
