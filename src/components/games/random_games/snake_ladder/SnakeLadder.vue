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
              class="2xl:w-full xl:h-96 2xl:w-full xl:h-96 lg:w-full lg:h-96 md:w-full md:h-96  w-full h-full object-cover	"
              src="https://wallpapercave.com/wp/wp9142013.jpg" 
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-4">
            <h1 class="capitalize text-4xl font-extrabold">Snake Ladder</h1>
            <p class="text-lg text-gray-500">
             Snake Ladder is a system created to play with another player to determine your win or loss. Here the first number 1 player will move on to the game and the other player will have to wait for the number 1 number to arrive. The player who reaches number 100 first wins the match and the other player loses. Here you can practice this game with tc (traning coin). To play with gc (gold coin) you have to buy gc coin.
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