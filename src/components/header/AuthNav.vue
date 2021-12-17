<template>
  <div>
    <!-- component -->
    <header class="">
      <nav class="bg-blue-900 h-10 dark:bg-gray-300">
        <div class="container mx-auto">
          <div
            class="
              flex
              items-center
              justify-center
            "
          >
            <router-link
              to="/"
              class="
                text-gray-100
                border-b-2 border-transparent 
                mx-1.5
                sm:mx-6
                cursor-default
              "
            >
             TC {{tc}}
            </router-link>
            <router-link
              to="/"
              class="
                text-gray-100
                border-b-2 border-transparent 
                mx-1.5
                sm:mx-6
                cursor-default
              "
            >
             GC {{gc}}
            </router-link>
          
            <router-link
              to="/"
              class="
                text-gray-100
                border-b-2 border-transparent 
                mx-1.5
                sm:mx-6
                cursor-default
              "
            >
             GCG {{gsg}}
            </router-link>
            <router-link
              to="/"
              class="
                text-gray-100
                border-b-2 border-transparent 
                mx-1.5
                sm:mx-6
                cursor-default
              "
            >
              ${{usd}}
            </router-link>
          </div>
        </div>
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
      tc: "",
      gc: "",
      gsg: "",
      usd: "",
    };
  },
  mounted(){
axios
        .post(
          "https://backend-re5zx.ondigitalocean.app/api/checkoutbalance",
          {
            stake: this.Stake,
          },
          { headers: authHeader() }
        )
        .then(
          (response) => {
            if (response.data.status == 200) {
              this.tc = response.data.balance.tc;
              this.gc = response.data.balance.gc;
              this.gsg = response.data.balance.gsg;
              this.usd = response.data.balance.usd;
              console.log(response)
              
            } 
          }, 
        );
  }
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