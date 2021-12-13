<template>
  <div>
  <div>
     <Carousel/>
     <RateContent />
     <RandomContent/>
     <GsgTrade/>
     <Knowledge/>
     <Feedback/>

  </div>
  </div>
</template>

<script>
import Carousel from "@/components/header/Carousel.vue"
import RandomContent from "@/components/content/RandomContent.vue"
import RateContent from "@/components/content/GsgRateContent.vue"
import GsgTrade from "@/components/content/GsgTradeContent.vue"
import Knowledge from "@/components/content/KnowledgeContent.vue"
import Feedback from "@/components/content/FeedbackContent.vue"


export default {
  
 components: {
    Carousel,
    RandomContent,
    RateContent,
    GsgTrade,
    Knowledge,
    Feedback,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  name: "Home",
  data() {
    return {
      content: "",
    };
  }, 
};
</script>