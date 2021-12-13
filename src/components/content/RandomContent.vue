<template>
  <div>
    <div class="container mx-auto">
      <section class="parallax-random-content">
        <div class="parallax-inner">
          <h1
            class="cursor-default text-white ml-10 text-6xl bg-opacity-0 mb-10"
          >
            Random Game
          </h1>
          <h1
            class="cursor-default text-white ml-10 text-md bg-opacity-0 mb-10"
          >
            In order to receive the best answers to your questions please follow
            these simple guidelines. Be descriptive about your question or
            problem and be sure to include any errors. Single line topics will
            rarely receive answers and do not just post a screenshot. Provide
            examples of the code in question and use syntax highlighting. In
            order to receive the best answers to your questions please follow
            these simple guidelines. Be descriptive about your question or
            problem and be sure to include any errors. Single line topics will
            rarely receive answers and do not just post a screenshot. Provide
            examples of the code in question and use syntax highlighting. In
            order to receive the best answers to your questions please follow
            these simple guidelines. Be descriptive about your question or
            problem and be sure to include any errors. Single line topics will
            rarely receive answers and do not just post a screenshot. Provide
            examples of the code in question and use syntax highlighting.
          </h1>
          <div class="mb-20 flex-col flex ml-auto items-center">
            <router-link
              @click="scrool()"
              style="transition: all 0.45s ease 0s"
              to="/randomgame"
              class="
                2xl:w-96 2xl:h-20
                xl:w-96 xl:h-20
                lg:w-96 lg:h-20
                md:w-96 md:h-20
                text-center
                flex
                items-center
                justify-center
                btn btn-primary btn-block
                border-4 border-blue-600
                hover:bg-blue-600
                rounded-lg
                px-3
                py-2
                text-white
                cursor-pointer
                hover:text-white
              "
            >
              View Game
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrool() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
.parallax-random-content {
  background: url("https://cdn.pixabay.com/photo/2018/04/16/15/52/chess-3325010_960_720.jpg")
    repeat fixed 100%;

  background-size: cover;
}
</style>
      