<template>
  <div>
    <!-- enater game -->
    <div class="flex items-center p-10 w-full h-full bg-white">
      <div class="border-b  grid grid-cols-2 gap-8">
        <div class="flex flex-col justify-start">
          <div
            class="
              flex flex-col
              w-full
              object-cover
              h-4/6
              justify-items-start
              border
              rounded-lg
              overflow-hidden
            "
            style="min-heigth: 320px"
          >
            <img
              class="2xl:w-full xl:h-96 2xl:w-full xl:h-96 lg:w-full lg:h-96 md:w-full md:h-96  w-full h-full object-cover	"
              src="https://wallpapercave.com/wp/wp9142013.jpg"
              alt="nike shoes"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-4">
            <h1 class="capitalize text-4xl font-extrabold">Snake Ladder</h1>
            <p class="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus voluptatum nisi maxime obcaecati impedit? Ratione
              error eum qui quidem? Veniam accusamus ea repudiandae itaque,
              explicabo quidem perspiciatis. Culpa, asperiores deserunt.
            </p>
            <div class="flex items-center gap-4 my-6 cursor-pointer">
              
              <router-link
              to="/snakeladder"
              class="
                bg-blue-600
                  px-5
                  py-3
                  text-white
                  rounded-lg
                  w-2/4
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
export default {
 
      
};
</script>
<style lang="">
</style>