<template>
  <div>
    <!-- component -->
     <header class="bg-blue-900  sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <img class="h-14 ml-10" v-bind:src="require('@/assets/logo/logo.png')" alt="Workcation">
        
      </div>
      <p class="   
                  mx-1.5
                  sm:mx-6
                   text-white font-semibold rounded">IQBRAVE <span class="text-red-600">.COM</span></p>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
      
      <router-link @click="isOpen = !isOpen"
                to="/home"
                class="
                  border-b-2 border-transparent
                  hover:text-gray-300
                  hover:border-blue-500
                  mx-1.5
                  sm:mx-6
                  block px-2 py-1 text-white font-semibold rounded
                "
              >
              
                Home
              </router-link>
     
     <router-link @click="isOpen = !isOpen" v-if="currentUser"
                to="/cashier"
                class="
                  border-b-2 border-transparent
                  hover:text-gray-300
                  hover:border-blue-500
                  mx-1.5
                  sm:mx-6
                  block px-2 py-1 text-white font-semibold rounded 
                "
              >
                Cashier
              </router-link>
     <router-link @click="isOpen = !isOpen" v-if="currentUser"
                to="/cashier"
                class="
                  border-b-2 border-transparent
                  hover:text-gray-300
                  hover:border-blue-500
                  mx-1.5
                  sm:mx-6
                  block px-2 py-1 text-white font-semibold rounded  
                "
              >
                Statement
              </router-link>
              <div @click="isOpen = !isOpen"
                v-if="showModeratorBoard"
                class="
                  border-b-2 border-transparent
                  hover:text-gray-300
                  hover:border-blue-500
                  mx-1.5
                  sm:mx-6
                  block px-2 py-1 text-white font-semibold  
                "
              >
                <router-link to="/mod" class="">Moderator</router-link>
              </div>
     <router-link v-if="showAdminBoard" @click="isOpen = !isOpen"
                to="/admin"
                class="
                  border-b-2 border-transparent
                  hover:text-gray-300
                  hover:border-blue-500
                  mx-1.5
                  sm:mx-6
                  block px-2 py-1 text-white font-semibold rounded  
                "
              >
                Admin
              </router-link> 
                <router-link v-if="!currentUser" @click="isOpen = !isOpen"
                  to="/register"
                  class="
                    border-b-2 border-transparent
                  hover:text-gray-300
                  hover:border-blue-500
                  mx-1.5
                  sm:mx-6
                  block px-2 py-1 text-white font-semibold rounded  
                  "
                  >Signup</router-link
                >
                <router-link v-if="!currentUser" @click="isOpen = !isOpen"
                  to="/login"
                  class="
                   border-b-2 border-transparent
                  hover:text-gray-300
                  hover:border-blue-500
                  mx-1.5
                  sm:mx-6
                  block px-2 py-1 text-white font-semibold rounded  
                  "
                  >Signin</router-link
                > 
      <!-- dropdown -->
      
              <div v-if="currentUser" class="mx-1.5 sm:mx-16">
                <div class="group inline-block text-blue-900">
                  <button
                    class="
                      right-7
                      outline-none
                      focus:outline-none
                      px-3
                      py-1 
                      rounded-sm
                      flex
                      items-center
                      min-w-32
                      text-white
                    "
                  >
                    <span class="pr-1 font-semibold flex-1">{{
                      currentUser.firstname
                    }}</span>
                    <span>
                      <svg
                        class="
                          fill-current
                          h-4
                          w-4
                          transform
                          group-hover:-rotate-180
                          transition
                          duration-150
                          ease-in-out
                        " 
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul
                    class="
                      bg-white
                      border
                      rounded-sm
                      transform
                      scale-0
                      group-hover:scale-100
                      absolute
                      transition
                      duration-150
                      ease-in-out
                      origin-top
                      min-w-32
                    "
                  >
                    <li class="rounded-sm px-3 py-1 hover:bg-gray-100 text-right p-2 mt-2">
                      <router-link @click="isOpen = !isOpen"
                        to="profile"
                        class="rounded-sm px-3 py-1 hover:bg-gray-100"
                        >Profile</router-link
                      >
                    </li>
                    <li class="rounded-sm px-3 py-1 hover:bg-gray-100 text-right p-2 mb-2">
                      <font-awesome-icon icon="sign-out-alt" />
                      <a class="rounded-sm px-3 py-1 hover:bg-gray-100" @click.prevent="logOut" href="">
                       Logout
                    </a>
                    </li>

                    
                  </ul>
                </div>
              </div>
              <!-- dropdown -->
    </nav>
  </header>
    
  </div>
</template>

<script>
import authHeader from "@/services/auth-header.js";
import axios from "axios";

export default {
  data() {
    return {
      open: false,
      isOpen: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_ADMIN");
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_MODERATOR");
      }

      return false;
    },
  },
  methods: {
    logOut() {
            this.$store.dispatch("auth/logout");
            this.$router.push("/home");
            if(this.isOpen){
              this.isOpen =  false;
            }
      axios
        .post("https://backend-re5zx.ondigitalocean.app/api/userlogout/",{ balance: this.balance - this.enterValue,},{ headers: authHeader() })
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
};
</script>
<style>
/* since nested groupes are not supported we have to use 
     regular css for the nested dropdowns 
  */
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
</style>