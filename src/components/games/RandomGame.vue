<template>
   <div> 
		<Match />
		<RiseFall />
		<SnakeLadder />
   </div>
</template>
<script>
import Match from "./random_games/match_number/MatchNumber.vue";
import SnakeLadder from "./random_games/snake_ladder/SnakeLadder.vue";
import RiseFall from "./random_games/rise_fall/RiseFall.vue";
export default {
   components: {
    Match,
    SnakeLadder,
    RiseFall,
  },
}
</script>
<style lang="">
   
</style>