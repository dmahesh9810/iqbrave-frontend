<template>
  <div class="">
    <div class="">
      <button
        @click="gsg()"
        class="
          btn btn-primary btn-block
          mt-5
          w-full
          bg-purple-600
          text-white
          rounded-lg
          px-3
          py-2
          text-white
          cursor-pointer
        "
      >
        GSG Coin
      </button>
      <div v-if="gsgView == true">
        <!-- gsg -->
        <div class="p-16">
          <table class="w-full">
            <thead class="">
              <tr class="bg-blue-500">
                <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Balance</div>
                        </th>
                <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Price</div>
                        </th>
                <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Action</div>
                        </th>
              </tr>
            </thead>
            <tbody class="text-sm" v-for="gsgCoin in gsgCoin" :key="gsgCoin">
              <tr class="bg-blue-200">
                <td class="">
                  <h1 class="text-2xl text-yellow-600">{{ gsgCoin.value }}</h1>
                </td>
                <td class="">
                  <h1 class="text-2xl text-green-600">
                    <span>$</span>{{ gsgCoin.price }}
                  </h1>
                </td>
                <td class="">
                  <router-link
                    to="home"
                    class="
                      btn btn-primary btn-block
                      bg-purple-600
                      hover:bg-purple-900
                      text-white
                      font-bold
                      p-2
                      rounded
                      container
                      max-w-sm
                      mx-auto
                      flex-1 flex flex-col
                      items-center
                      px-2
                      mt-2
                      mb-2
                    "
                    >Buy</router-link
                  >
                </td>
              </tr>
              <div class="h-2"></div>
            </tbody>
          </table>
        </div>
        <!-- gsg -->
      </div>
    </div>
    <div class="">
      <button
        @click="gc()"
        class="
          btn btn-primary btn-block
          mt-5
          w-full
          bg-purple-600
          text-white
          rounded-lg
          px-3
          py-2
          text-white
          cursor-pointer
        "
      >
        GC Coin
      </button>
      <div v-if="gcView == true">
        <!-- component -->
        <div class="p-16">
          <table class="w-full">
            <thead class="">
              <tr class="bg-blue-500">
                <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Balance</div>
                        </th>
                <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Price</div>
                        </th>
                <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Action</div>
                        </th>
              </tr>
            </thead>
            <tbody class="text-sm" v-for="gcCoin in gcCoin" :key="gcCoin">
              <tr class="bg-blue-200">
                <td class="">
                  <h1 class="text-2xl text-yellow-600">{{ gcCoin.value }}</h1>
                </td>
                <td class="">
                  <h1 class="text-2xl text-green-600">
                    <span>$</span>{{ gcCoin.price }}
                  </h1>
                </td>
                <td class="">
                  
                  <router-link
                    :to="{
                      name: 'PaymentMethod',
                      params: {
                        merchantId: '1217561',
                        coinId: gcCoin.id,
                        packageName: 'gc',
                        currency: 'usd',
                        amount: gcCoin.price,
                        value: gcCoin.value,
                        dataShareOk: 'true',
                      },
                    }"
                    class="
                      btn btn-primary btn-block
                      bg-purple-600
                      hover:bg-purple-900
                      text-white
                      font-bold
                      p-2
                      rounded
                      container
                      max-w-sm
                      mx-auto
                      flex-1 flex flex-col
                      items-center
                      px-2
                      mt-2
                      mb-2
                    "
                  >
                    Buy
                  </router-link>
                </td>
              </tr>
              <div class="h-2"></div>
            </tbody>
          </table>
        </div>
        <!-- dd -->
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "@/services/user.service";

export default {
  data() {
    return {
      gcCoin: "",
      gsgCoin: "",
      gsgView: false,
      gcView: false,
    };
  },
  methods: {
    gsg() {
      if (this.gsgView == false) {
        this.gsgView = true;
      } else {
        this.gsgView = false;
      }
    },
    gc() {
      if (this.gcView == false) {
        this.gcView = true;
      } else {
        this.gcView = false;
      }
    },
  },
  mounted() {
    UserService.getSellGcCoin().then(
      (response) => {
        console.log(response);
        this.gcCoin = response.data.gccoin;
        this.gsgCoin = response.data.gcgcoin;
      },
      (error) => {
        this.gcCoin =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
<style>
</style>