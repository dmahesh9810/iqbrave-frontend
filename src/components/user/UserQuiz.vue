<template>
  <div class="w-full ">
    <div class="">
      <ul class="p-2 flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
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
            <i class="fas fa-space-shuttle text-base mr-1"></i> Add Quiz
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
            <i class="fas fa-cog text-base mr-1"></i> View all Quiz
          </a>
        </li>
        
      </ul>
      <div
        class="
          flex flex-col
          min-w-0
          break-words
          bg-white
          shadow-lg
          rounded
          
        "
      >
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
                <div v-if="openTab == 1 && openTab !== 2">

              <AddQuiz/>
                </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
                <div v-if="openTab == 2 && openTab !== 1">

              <AllQuiz />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddQuiz from "@/components/user/addquiz/AddQuiz.vue";
import AllQuiz from "@/components/user/allquiz/AllQuiz.vue";

export default {
  components: {
    AllQuiz,
    AddQuiz,
    
  },
  data() {
    return {
      openTab: 1,
      content: "",
      openTab2: false,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
      if(this.openTab == 2){
          this.openTab2 = true;
      }
    },
  },
  mounted() {},
};
</script>