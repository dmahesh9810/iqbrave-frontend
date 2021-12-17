<template>
  <div>
    <!-- enater game -->
    <div class="flex items-center p-10 w-full h-full bg-white">
      <div class="border-b  
      2xl:pt-16 2xl:grid 2xl:grid-cols-2 2xl:gap-8
       xl:pt-16 xl:grid xl:grid-cols-2 xl:gap-8
       lg:pt-16 lg:grid lg:grid-cols-2 lg:gap-8">
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
              src="https://cdn.pixabay.com/photo/2016/11/29/03/27/track-and-field-1867053_960_720.jpg"
              alt="nike shoes"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-4">
            <h1 class="capitalize text-4xl font-extrabold">Rise & Fall</h1>
            <p class="text-lg text-gray-500">
              rise & fall is when you select a number from 1 to 10 and guest whether the system number corresponding to that number is up or down. If you do the right guest you will win the game and if it fails you will lose the match.Here you can practice this game with tc (traning coin). To play with gc (gold coin) you have to buy gc coin.
            </p>
            <div class="flex items-center gap-4 my-6 cursor-pointer">
              
              <router-link
              to="/risefall"
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