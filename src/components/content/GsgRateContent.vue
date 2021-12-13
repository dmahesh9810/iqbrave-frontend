<template>
  <div>
   
    <div id="wrapper" class="max-w-xl px-4 py-4 mx-auto">
        
      <div class="">
          
        <div
          id="jh-stats-negative"
          class="
            flex flex-col
            justify-center
            px-4
            py-4
            mt-4
            bg-white
            border border-gray-300
            rounded
            sm:mt-0
          "
        >

          <div>
            <div> 
              <p class="flex items-center justify-end text-red-500 text-md">
                <!-- <span class="font-bold">6%</span>
                <svg
                  class="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    class="heroicon-ui"
                    d="M20 9a1 1 0 012 0v8a1 1 0 01-1 1h-8a1 1 0 010-2h5.59L13 10.41l-3.3 3.3a1 1 0 01-1.4 0l-6-6a1 1 0 011.4-1.42L9 11.6l3.3-3.3a1 1 0 011.4 0l6.3 6.3V9z"
                  />
                </svg> -->
              </p>
            </div>
            <p class="text-3xl font-semibold text-center text-gray-800">USD ${{gsgRate}}</p>
            <p class="text-lg text-center text-gray-500">GSG RATE</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/user.service";
export default {
  data() {
    return {
      gsgRate: '',
    };
  },
  methods: {
  },
  mounted() {
UserService.getGSG().then(
      (response) => {
        console.log(response);
        this.gsgRate = response.data.gsgRate;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>

<style lang="scss" scoped>
</style>