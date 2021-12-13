<template>
  <div id="app" class="bg-blue-900">
    <AdminNav v-if="showAdminBoard || showModeratorBoard"/> 
    <MainNav v-if="!showAdminBoard && !showModeratorBoard"/> 
    <AuthNav v-if="currentUser && !showAdminBoard && !showModeratorBoard"/> 
   
    <div >
      <router-view />
    </div>
    <Footer v-if="!showAdminBoard && !showModeratorBoard" /> 

  </div>
</template>

<script>
import AdminNav from "./components/header/AdminNav.vue"
import MainNav from "./components/header/MainNav.vue"
import AuthNav from "./components/header/AuthNav.vue"
import Footer from "./components/footer/Footer.vue"
export default {
  components: {
    AdminNav,
    MainNav,
    Footer,
    AuthNav,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap');
* { 
font-family: 'Work Sans', sans-serif;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
   -khtml-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none; 
}
</style>