<template>
  <div>
    <!-- enater game -->
    <div class="flex items-center p-10 w-full h-full bg-white">
      <div class="border-b pt-16 2xl:grid 2xl:grid-cols-2 xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-8">
        <div class="flex flex-col justify-start p-4">
          <div
            class="
              flex flex-col
              w-full 
              justify-items-start
              rounded-lg
              overflow-hidden
            "
          >
            <img
              class="2xl:w-full xl:h-72 2xl:w-full xl:h-72 lg:w-full lg:h-72 md:w-full md:h-72  w-full h-full object-cover	"
              src="https://image.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg"
              
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-4 ml-3">
            <h1
              class="
                capitalize
                2xl:text-4xl
                xl:text-4xl
                lg:text-4xl
                md:text-4xl
                text-xl
                font-extrabold
              "
            >
              Ict Knowledge
            </h1>
            <p class="text-gray-500">
              ict knowledge is the knowledge of obage information communication technology that allows you to answer the questions correctly and win the competition. Here you can only use gc (Gold coin).
            </p>
            <div class="flex items-center gap-4 my-6 cursor-pointer">
              <router-link
                style="transition: all 0.45s ease 0s"
                to="/ictgame"
                class="
                  px-5
                  py-3
                  border-2 border-blue-600
                  hover:text-white hover:bg-blue-600
                  text-blue-600
                  rounded-lg
                  2xl:w-2/4 xl:w-2/4 lg:w-2/4 md:w-2/4 w-4/4
                  text-center
                "
              >
                Game Enter
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>