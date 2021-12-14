<template>
  <div>
    {{ paymentSuccess }}
  </div>
</template>

<script>
import authHeader from "@/services/auth-header.js";
import axios from "axios";

export default {
  name: "Returnurl",

  data() {
    return {
      paymentSuccess: this.$route.query.order_id,
    };
  },
  mounted(){
    if(this.paymentSuccess){
      
    axios
          .post(
            "https://backend-re5zx.ondigitalocean.app/api/checkout/payherenotify",
            {
              status: 2,
              order_id: this.paymentSuccess,
            },
            { headers: authHeader() }
          )
          .then(
            (response) => {
              console.log(response)
            },
            (error) => {
              (this.payHereBtn = true),
                (this.skrillBtn = true),
                (this.content =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString());
              console.log(error);
            }
          );

    }
  }
};
</script>

<style lang="scss" scoped>
</style>