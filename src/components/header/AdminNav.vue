<template>
   <div>
     <nav class="bg-white border-b border-gray-200 z-30 w-full">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
         <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
               <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                  <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                  </svg>
                  <svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
               </button>
               <a href="/" class="text-xl font-bold flex items-center lg:ml-2.5">
               <img v-bind:src="require('@/assets/logo/iqbrave.png')" class="h-16 mr-2" alt="Windster Logo">
               <span class="self-center whitespace-nowrap">IQBRAVE</span>
               </a>
               <form action="#" method="GET" class="hidden lg:block lg:pl-32">
                  <label for="topbar-search" class="sr-only">Search</label>
                  <div class="mt-1 relative lg:w-64">
                    
                  </div>
               </form>
            </div>
            <div class="flex items-center">
               <div class="hidden lg:flex items-center">
                  
              <div
                v-if="showModeratorBoard"
                class="
                  border-b-2 border-transparent
                  hover:text-gray-300
                  hover:border-blue-500
                  mx-1.5
                  sm:mx-6
                  block px-2 py-1 text-black font-semibold  
                "
              >
                <router-link to="/mod" class="">Moderator</router-link>
              </div>
     <router-link v-if="showAdminBoard"
                to="/admin"
                class="
                  border-b-2 border-transparent
                  hover:text-gray-500
                  mx-1.5
                  sm:mx-6
                  block px-2 py-1 text-black font-semibold rounded  
                "
              >
                Admin
              </router-link> 
                  <div class="-mb-1">
                    <a @click.prevent="logOut" href="">
                      <font-awesome-icon icon="sign-out-alt" /> LogOut
                    </a> </div>
               </div>
            </div>
         </div>
      </div>
   </nav> 
   </div>
</template>
<script>
import authHeader from "@/services/auth-header.js";
import axios from "axios";

export default {
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
     User() {
         this.mainContent = false;
         this.userContent = true;
     },
     DashBoard() {
         this.mainContent = true;
         this.userContent = false;
     },
    logOut() {
            this.$store.dispatch("auth/logout");
            this.$router.push("/home");
      axios
        .post("http://127.0.0.1:8000/api/userlogout/",{ balance: this.balance - this.enterValue,},{ headers: authHeader() })
        .then((response) => {
          if (response.data.status == 200) {
            this.$store.dispatch("auth/logout");
            this.$router.push("/home");
          }
        });
    },
    drop() {
      this.open = true;
    },
    undrop() {
      this.open = false;
    },
  },
}
</script>
<style>
   
</style>