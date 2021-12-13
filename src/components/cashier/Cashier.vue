<template>
  <div class="w-full">
    <div class="">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class=" cursor-pointer
              text-xs
              font-bold
              uppercase
              px-5
              py-3
              shadow-lg
              rounded
              block
              leading-normal
            "
            v-on:click="toggleTabs(1)"
            v-bind:class="{
              'text-blue-600 bg-white': openTab !== 1,
              'text-white bg-blue-600': openTab === 1,
            }"
          >
            <i class="fas fa-space-shuttle text-base mr-1"></i> Buy Coin
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class=" cursor-pointer
              text-xs
              font-bold
              uppercase
              px-5
              py-3
              shadow-lg
              rounded
              block
              leading-normal
            "
            v-on:click="toggleTabs(3)"
            v-bind:class="{
              'text-blue-600 bg-white': openTab !== 3,
              'text-white bg-blue-600': openTab === 3,
            }"
          >
            <i class="fas fa-cog text-base mr-1"></i> Buy Coin Package
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class=" cursor-pointer
              text-xs
              font-bold
              uppercase
              px-5
              py-3
              shadow-lg
              rounded
              block
              leading-normal
            "
            v-on:click="toggleTabs(2)"
            v-bind:class="{
              'text-blue-600 bg-white': openTab !== 2,
              'text-white bg-blue-600': openTab === 2,
            }"
          >
            <i class="fas fa-cog text-base mr-1"></i> Sell Coin
          </a>
        </li>
        
      </ul>
      <div
        class="
          flex flex-col
          min-w-0
          break-words
          bg-white
          mb-6
          shadow-lg
          rounded
        "
      >
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <BuyCoin/>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <SellCoin />
            </div>
            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }" v-if="openTab3 == true ">
              
                <BuyPackageCoin />
 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuyPackageCoin from "@/components/cashier/buy/BuyPackageCoin.vue";
import SellCoin from "@/components/cashier/sell/SellCoin.vue";
import BuyCoin from "@/components/cashier/buy/BuyCoin.vue";

export default {
  components: {
    BuyPackageCoin,
    SellCoin,
    BuyCoin,
    
  },
  data() {
    return {
      openTab: 1,
      content: "",
      openTab3: false,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
      if(this.openTab == 3){
          this.openTab3 = true;
      }
    },
  },
  mounted() {},
};
</script>