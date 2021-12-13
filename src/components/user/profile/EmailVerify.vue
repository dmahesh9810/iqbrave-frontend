<template>
  <div class="min-h-screen bg-white flex justify-center items-center">
    <div v-if="verifyEmail === true" >
      <h1 class="text-green-500">Email verified</h1>
    </div>
    <div v-else>Please wait...</div>
  </div>
</template>

<script>
import authHeader from "@/services/auth-header.js";
import axios from "axios";
export default {
  data() {
    return {
      verifyUrl: this.$route.query.email_verify_url,
      verifyEmail: false,

      StartTime: "0",
      StartTimeCounter: 0,
    };
  },
  mounted() {
    axios.get(this.verifyUrl, { headers: authHeader() }).then(
      (response) => {
        if (response.data.status == 200) {
          this.successMassage = response.data.massage;
          this.verifyEmail = true;
          this.asd = console.log(response);
          this.StartTime = setInterval(() => {
            this.StartTimeCounter++;
            if(this.StartTimeCounter >= 3){
                this.$router.push({ name: 'profile' })
            clearInterval(this.StartTime);
            }
          }, 1000);
        } else {
          this.errorMassage = "Invalid data";
          this.asd = console.log(response);
        }
      },
      (e) => {
        this.errorMassage = "Invalid data";
        this.asd = console.log(e);
      }
    );
  },
};
</script>

<style lang="scss" scoped>
</style>