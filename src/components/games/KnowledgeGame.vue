<template>
  <div>
    <div class="p-5 flex items-center justify-center bg-white">
      <router-link style="transition: all 0.45s ease 0s" to="/userquiz" class="w-full p-3 border-2 border-blue-600
                hover:bg-blue-600 text-blue-600 hover:text-white rounded-full py-3 px-6 text-center">Add Question</router-link>
    </div>
    <Ict />
    <Maths />
    <Science />
  </div>
</template>
<script>
import Maths from "./knowledge_game/maths/Maths.vue";
import Ict from "./knowledge_game/ict/Ict.vue";
import Science from "./knowledge_game/science/Science.vue";
export default {
  components: {
    Ict,
    Maths,
    Science,
  },
};
</script>
<style lang="">
</style>