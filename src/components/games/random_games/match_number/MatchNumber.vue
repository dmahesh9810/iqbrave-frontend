<template>
  <div>
    <!-- enater game -->
    <div class="flex items-center p-10 w-full h-full bg-white">
      <div class="border-b
       2xl:pt-16 2xl:grid 2xl:grid-cols-2 2xl:gap-8
       xl:pt-16 xl:grid xl:grid-cols-2 xl:gap-8
       lg:pt-16 lg:grid lg:grid-cols-2 lg:gap-8
       ">
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
              class="w-full h-full object-cover"
              src="https://images.pexels.com/photos/37534/cube-six-gambling-play-37534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="nike shoes"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-4">
            <h1 class="capitalize text-4xl font-extrabold">Match Number</h1>
            <p class=" text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus voluptatum nisi maxime obcaecati impedit? Ratione
              error eum qui quidem? Veniam accusamus ea repudiandae itaque,
              explicabo quidem perspiciatis. Culpa, asperiores deserunt.
            </p>
            <div class="flex items-center gap-4 my-6 cursor-pointer">
              
              <router-link
              to="/match"
              class="
                bg-blue-600
                  px-5
                  py-3
                  text-white
                  rounded-lg
                  2xl:w-2/4
                  lg:w-2/4
                  md:w-2/4
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