<template>
  <div>
    <!-- enater game -->
    <div class="flex items-center p-10 w-full h-full bg-white">
      <div class="border-b pt-16 grid grid-cols-2 gap-8">
        <div class="flex flex-col justify-start">
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
              src="https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309_960_720.jpg"
              alt="nike shoes"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-4">
            <h1 class="capitalize 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-xl font-extrabold">
              Science Knowledge
            </h1>
            <p class="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus voluptatum nisi maxime obcaecati impedit? Ratione
              error eum qui quidem? Veniam accusamus ea repudiandae itaque,
              explicabo quidem perspiciatis. Culpa, asperiores deserunt.
            </p>
            <div class="flex items-center gap-4 my-6 cursor-pointer">
              <router-link
                style="transition: all 0.45s ease 0s"
                to="/sciencegame"
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