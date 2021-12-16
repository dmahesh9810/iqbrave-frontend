<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="wrapper bg-purple-700 antialiased text-gray-900">
      <div>
        <div class="relative">
          <div class="bg-white p-6 rounded-sm shadow-lg w-80 h-32 text-center">
            <div class="items-baseline">
              <div class="text-gray-600 uppercase font-semibold"></div>
            </div>

            <h4
              class="
                mt-1
                text-xl
                font-semibold
                uppercase
                leading-tight
                truncate
              "
            >
              Sell Your Coin
            </h4>
            <h4 v-if="errorMassage"
              class="
              text-red-500
                mt-1
                text-sm
                font-semibold
                uppercase
                leading-tight
                truncate
              "
            >
              {{errorMassage}}
            </h4>
            <h4 v-if="successMassage"
              class="
              text-green-500
                mt-1
                text-sm
                font-semibold
                uppercase
                leading-tight
                truncate
              "
            >
              {{successMassage}}
            </h4>

          </div>
          <!-- center -->

          <div class="mt-20 mb-20 h-24 text-center">
            <div>
              
              <input
                placeholder="Sell Value"
                v-model="sellValue"
                class="
                  border-2 border-gray-200
                  rounded
                  py-2
                  px-4
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-purple-500
                "
                type="text"
              />
              <br />
              <input
                placeholder="Sell Price"
                v-model="sellPrice"
                class="
                  border-2 border-gray-200
                  rounded
                  py-2
                  px-4
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-purple-500
                  mt-2
                "
                type="text"
              />
              <br />
              <div class="mt-3">
                <input
                  checked
                  type="radio"
                  id="two"
                  value="gc"
                  v-model="coinType"
                  name="coin"
                  class="mr-1"
                /><span class="text-white">GC</span>
                <input
                  type="radio"
                  id="one"
                  value="gsg"
                  v-model="coinType"
                  name="coin"
                  class="mr-1 ml-4"
                /><span class="text-white">GSG</span>
              </div>
            </div>
          </div>
          <!-- center -->

          <div class="bg-white p-6 rounded-sm shadow-lg text-center h-32">
            <div class="items-baseline">
              <div class="text-gray-600 uppercase font-semibold">
                <button @click="Sell()"
                  class="
                    mr-2
                    btn btn-primary btn-block
                    mt-5
                    w-full
                    bg-purple-600
                    hover:bg-purple-900
                    text-white
                    rounded-lg
                    px-3
                    py-2
                    text-white
                    cursor-pointer
                    hover:bg-purple-600 hover:text-white
                  "
                >
                  Sell Coin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import authHeader from "@/services/auth-header.js";
import axios from "axios";

export default {
  data() {
    return {
      sellPrice: "",
      sellValue: "",
      coinType: "gc",
      successMassage: "",
      errorMassage: "",
    };
  },
  methods: {
      Sell(){
          this.errorMassage = "";
          this.successMassage = "";
          axios
        .post(
          "http://localhost:8000/api/sellcoin",
          {
            sellPrice: this.sellPrice,
            sellValue: this.sellValue,
            coinType: this.coinType,
          },
          { headers: authHeader() }
        )
        .then((response) => {
          if (response.data.status == 200) {
              this.successMassage = response.data.massage;
          } else {
           this.errorMassage =  response.data.massage;
          }
        },((error) => {
          console.log(error);
          this.errorMassage = "Somthing else";
        }));
      }
  },
};
</script>
<style>
</style>