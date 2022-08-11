<template>
  <div class="mt-16">
    <!-- bot click -->
    <div class="ml-48" v-if="player1_random === 100">
      <div
        class=" absolute 
          h-12
          text-green-500
          rounded-lg
          px-3
          py-2
          text-white
          text-3xl	
        "
      >
        
    <div>
      <h1>Win</h1>
    </div>
      </div>
    </div>
    <div class="ml-48" v-if="player2_random === 100">
      <div
        class=" absolute 
          h-12
          text-red-500
          rounded-lg
          px-3
          py-2
          text-white
          text-3xl	
        "
      >
        
    <div>
      <h1>Loss</h1>
    </div>
      </div>
    </div>
    <div class="text-right mb-2" v-if="playerClick == 0 && playerClick !== ''">
      <button
        class="
          btn btn-primary btn-block
          md:w-14 md:h-14
          lg:w-14
          xl:w-14 xl:h-14
          2xl:w-14 2xl:h-14
          lg:h-14
          w-9
          h-9
          bg-red-600
          hover:bg-purple-900
          text-white
          rounded-lg
          px-3
          py-2
          text-white
          cursor-pointer
          hover:bg-purple-600 hover:text-white
        "
      >
        {{ player2_random_genarate }}
      </button>
    </div>
    <div class="text-right mb-2" v-else>
      <div class="mr-20 md:mr-24 lg:mr-24 xl:mr-24 2xl:mr-24"></div>

      <button
        class="
          btn btn-primary btn-block
          md:w-14 md:h-14
          lg:w-14
          xl:w-14 xl:h-14
          2xl:w-14 2xl:h-14
          lg:h-14
          w-9
          h-9
          bg-red-300
          hover:bg-purple-900
          text-white
          rounded-lg
          px-3
          py-2
          text-white
          cursor-pointer
          hover:bg-purple-600 hover:text-white
        "
      >
        {{ player2_random_genarate }}
      </button>
    </div>

    <!-- bot click end -->
    <!-- middle content -->
    <div class="bg-white-900">
      <!-- game level 81 to 90  -->
      <div class="flex justify-center items-center">
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            text-white
            rounded-lg
            px-3
            py-2
            text-white
            border-2 border-purple-900
            bg-green-300
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 100"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 100"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl -ml-2">100</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2 border-purple-900
            bg-blue-300
          "
        >
          <img
            class="object-fill h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 absolute"
            v-bind:src="require('@/assets/snakeladder/snakeleft.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 99"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 99"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">99</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2 border-purple-900
            bg-yellow-300
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 98"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 98"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">98</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2 border-purple-900
            bg-red-300
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 97"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 97"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">97</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <img
            class="object-fill h-48 md:h-60 lg:h-60 xl:h-60 2xl:h-60 absolute"
            v-bind:src="require('@/assets/snakeladder/snake3.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 96"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 96"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">96</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 95"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 95"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">95</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <img
            class="object-fill h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 absolute"
            v-bind:src="require('@/assets/snakeladder/snakeleft.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 94"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 94"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">94</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <img
            class="object-fill h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 absolute"
            v-bind:src="require('@/assets/snakeladder/ladder4.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 93"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 93"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">93</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-blue-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 92"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 92"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>

          <h1 class="absolute text-black text-xl">92</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-green-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 91"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 91"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">91</h1>
        </div>
      </div>
      <!-- game level 81 to 90 end -->
      <!-- game level 81 to 90  -->
      <div class="flex justify-center items-center y-2">
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            text-white
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-blue-300
            border-purple-900
          "
        >
          <img
            class="object-fill h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 absolute"
            v-bind:src="require('@/assets/snakeladder/ladder1.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 81"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 81"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">81</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-blue-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 82"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 82"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">82</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 83"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 83"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">83</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2 border-purple-900
            bg-red-300
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 84"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 84"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">84</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 85"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 85"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">85</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <img
            class="object-fill h-52 md:h-64 lg:h-64 xl:h-64 2xl:h-64 absolute"
            v-bind:src="require('@/assets/snakeladder/ladder6.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 86"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 86"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">86</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 87"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 87"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">87</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 88"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 88"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">88</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-blue-300
            border-purple-900
          "
        >
          <img
            class="object-fill h-24 md:h-28 lg:h-28 xl:h-28 2xl:h-28 absolute"
            v-bind:src="require('@/assets/snakeladder/ladder2.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 89"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 89"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">89</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-blue-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 90"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 90"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">90</h1>
        </div>
      </div>
      <!-- game level 81 to 90 end -->
      <!-- game level 71 to 80  -->
      <div class="flex justify-center items-center y-2">
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            text-white
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 80"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 80"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">80</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 79"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 79"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">79</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 78"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 78"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">78</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <img
            class="object-fill h-28 md:h-36 lg:h-36 xl:h-36 2xl:h-36 absolute"
            v-bind:src="require('@/assets/snakeladder/ladder1.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 77"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 77"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">77</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 76"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 76"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">76</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 75"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 75"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">75</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 74"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 74"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">74</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 73"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 73"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">73</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 72"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 72"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">72</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 71"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 71"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">71</h1>
        </div>
      </div>
      <!-- game level 71 to 80 end -->
      <!-- game level 61 to 70  -->
      <div class="flex justify-center items-center y-2">
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            text-white
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 61"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 61"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">61</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <img
            class="object-fill h-24 md:h-32 lg:h-32 xl:h-32 2xl:h-32 absolute"
            v-bind:src="require('@/assets/snakeladder/snakeright3.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 62"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 62"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">62</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 63"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 63"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">63</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <img
            class="object-fill h-32 md:h-36 lg:h-36 xl:h-36 2xl:h-36 absolute"
            v-bind:src="require('@/assets/snakeladder/snake1.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 64"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 64"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">64</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 65"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 65"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">65</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 66"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 66"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">66</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 67"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 67"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">67</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 68"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 68"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">68</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <img
            class="object-fill h-24 md:h-28 lg:h-28 xl:h-28 2xl:h-28 absolute"
            v-bind:src="require('@/assets/snakeladder/snakeright.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 69"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 69"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">69</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 70"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 70"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">70</h1>
        </div>
      </div>
      <!-- game level 61 to 70 end -->
      <!-- game level 51 to 60  -->
      
      <div class="flex justify-center items-center y-2">
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            text-white
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <img
            class="object-fill h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 absolute"
            v-bind:src="require('@/assets/snakeladder/ladder3.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 60"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 60"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">60</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 59"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 59"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">59</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 58"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 58"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">58</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 57"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 57"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">57</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 56"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 56"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">56</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 55"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 55"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">55</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 54"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 54"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">54</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 53"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 53"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">53</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 52"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 52"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">52</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 51"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 51"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">51</h1>
        </div>
      </div>
      <!-- game level 51 to 60 end -->
      <!-- game level 41 to 50  -->
      <div class="flex justify-center items-center y-2">
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            text-white
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 41"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 41"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">41</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <img
            class="object-fill h-24 md:h-28 lg:h-28 xl:h-28 2xl:h-28 absolute"
            v-bind:src="require('@/assets/snakeladder/snake2.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 42"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 42"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">42</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <img
            class="object-fill h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 absolute"
            v-bind:src="require('@/assets/snakeladder/ladder4.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 43"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 43"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">43</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 44"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 44"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">44</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 45"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 45"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">45</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 46"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 46"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">46</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 47"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 47"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">47</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 48"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 48"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">48</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 49"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 49"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">49</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 50"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 50"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">50</h1>
        </div>
      </div>
      <!-- game level 41 to 50 end -->
      <!-- game level 31 to 40  -->
      <div class="flex justify-center items-center y-2">
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            text-white
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 40"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 40"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">40</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 39"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 39"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">39</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 38"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 38"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">38</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 37"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 37"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">37</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 36"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 36"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">36</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <img
            class="object-fill h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 absolute"
            v-bind:src="require('@/assets/snakeladder/ladder3.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 35"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 35"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">35</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <img
            class="object-fill h-24 md:h-32 lg:h-32 xl:h-32 2xl:h-32 absolute"
            v-bind:src="require('@/assets/snakeladder/snakeright3.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 34"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 34"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">34</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 33"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 33"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">33</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 32"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 32"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">32</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 31"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 31"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">31</h1>
        </div>
      </div>
      <!-- game level 31 to 40 end -->
      <!-- game level 21 to 30  -->
      <div class="flex justify-center items-center y-2">
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            text-white
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 21"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 21"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">21</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <img
            class="object-fill h-24 md:h-28 lg:h-28 xl:h-28 2xl:h-28 absolute"
            v-bind:src="require('@/assets/snakeladder/ladder2.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 22"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 22"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">22</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 23"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 23"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">23</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <img
            class="object-fill h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 absolute"
            v-bind:src="require('@/assets/snakeladder/snakeright.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 24"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 24"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">24</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 25"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 25"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">25</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 26"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 26"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">26</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 27"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 27"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">27</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 28"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 28"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">28</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <img
            class="object-fill h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 absolute"
            v-bind:src="require('@/assets/snakeladder/snakeleft.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 29"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 29"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">29</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 30"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 30"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">30</h1>
        </div>
      </div>
      <!-- game level 21 to 30 end -->
      <!-- game level 11 to 20  -->
      <div class="flex justify-center items-center y-2">
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            text-white
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-blue-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 20"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 20"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">20</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-blue-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 19"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 19"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">19</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 18"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 18"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">18</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 17"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 17"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">17</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 16"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 16"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">16</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 15"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 15"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">15</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <img
            class="object-fill h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 absolute"
            v-bind:src="require('@/assets/snakeladder/ladder1.png')"
            alt=""
          />
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 14"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 14"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">14</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 13"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 13"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">13</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-blue-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 12"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 12"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">12</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-blue-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 11"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 11"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">11</h1>
        </div>
      </div>
      <!-- game level 11 to 20 end -->
      <!-- game level 1 to 10 -->
      <div class="flex justify-center items-center y-2">
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            text-white
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-green-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 1"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 1"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>

          <h1 class="absolute text-black text-xl">1</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-blue-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 2"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 2"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">2</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 3"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 3"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">3</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 4"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 4"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">4</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 5"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 5"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">5</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-white
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 6"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 6"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">6</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-red-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 7"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 7"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">7</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-yellow-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 8"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 8"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">8</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-blue-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 9"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 9"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">9</h1>
        </div>
        <div
          class="
            md:w-11 md:h-11
            lg:w-11
            xl:w-11 xl:h-11
            2xl:w-11 2xl:h-11
            lg:h-11
            w-9
            h-9
            rounded-lg
            px-3
            py-2
            text-white
            border-2
            bg-green-300
            border-purple-900
          "
        >
          <div>
            <!-- Player -->
            <span
              v-if="player1_random == 10"
              class="
                border-4 border-green-500
                w-4
                h-4
                bg-green-900
                ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Player -->
            <!-- Bot -->
            <span
              v-if="player2_random == 10"
              class="
                border-4 border-red-500
                w-4
                h-4
                bg-red-900
                mt-3
                -ml-2
                rounded-lg
                absolute
              "
            ></span>
            <!-- Bot -->
          </div>
          <h1 class="absolute text-black text-xl">10</h1>
        </div>
      </div>
      <div class="ml-12 md:ml-16 lg:ml-16 xl:ml-16 2xl:ml-16">
        <h1 class="text-center absolute text-white mt-3">
          {{ currentUser.firstname }}
        </h1>
      </div>
      <!-- game level 1 to 10 end -->
      <!-- player click -->
      <div @click="clickPlayer()" class="y-2" v-if="playerClick == 1 && playerBtn === false">
        <button
          class="
            mt-2
            btn btn-primary btn-block
            md:w-14 md:h-14
            lg:w-14
            xl:w-14 xl:h-14
            2xl:w-14 2xl:h-14
            lg:h-14
            w-9
            h-9
            bg-green-600
            text-white
            rounded-lg
            text-white
            cursor-pointer
            hover:text-white
            absolute
          "
        >
          {{ player1_random_genarate }}
        </button>
      </div>
      <div class="y-2" v-else>
        <button
          class="
            mt-2
            btn btn-primary btn-block
            md:w-14 md:h-14
            lg:w-14
            xl:w-14 xl:h-14
            2xl:w-14 2xl:h-14
            lg:h-14
            w-9
            h-9
            bg-green-300
            text-white
            rounded-lg
            text-white
            cursor-pointer
            absolute
          "
        >
          {{ player1_random_genarate }}
        </button>
      </div>
    </div>
    <!-- middle content -->

    <!-- player click end -->

    <!-- home -->

    <div class="text-center mt-2 mb-32" v-if="waitingRoom == false">
      <span
        class="
          btn btn-primary btn-block
          md:w-14 md:h-14
          lg:w-14
          xl:w-14 xl:h-14
          2xl:w-14 2xl:h-14
          lg:h-14
          w-9
          h-9
          bg-green-300
          text-white
          rounded-lg
          text-white
          cursor-default
          text-center
          absolute
          -ml-16
        "
      >
        <span
          v-if="player1_random == 0"
          class="
            lg:mt-5 lg:-ml-2
            md:mt-5 md:-ml-2
            xl:mt-5 xl:-ml-2
            2xl:mt-5 2xl:-ml-2
            mt-3
            -ml-2
            border-4 border-green-500
            w-4
            h-4
            bg-green-900
            text-center
            rounded-lg
            absolute
          "
        ></span>
      </span>
      <span
        class="
          btn btn-primary btn-block
          md:w-14 md:h-14
          lg:w-14
          xl:w-14 xl:h-14
          2xl:w-14 2xl:h-14
          lg:h-14
          w-9
          h-9
          bg-red-300
          text-white
          rounded-lg
          text-white
          cursor-default
          text-center
          absolute
          ml-4
        "
      >
        <span
          v-if="player2_random == 0"
          class="
            lg:mt-5 lg:-ml-2
            md:mt-5 md:-ml-2
            xl:mt-5 xl:-ml-2
            2xl:mt-5 2xl:-ml-2
            mt-3
            -ml-2
            border-4 border-red-500
            w-4
            h-4
            bg-red-900
            text-center
            rounded-lg
            absolute
          "
        ></span>
      </span>
    </div>
    

    <div v-else class="text-center text-white mt-2 mb-32">
      {{ StartWaitingTimeCounter }}<br />
    </div>

    <!-- home end -->
  </div>
</template>
<script>
import authHeader from "@/services/auth-header.js";
import axios from "axios";

export default {
  props: {
    player_random: {
      required: true,
    },
    bot_random: {
      required: true,
    },
    gameId: {
      required: true,
    },
    Stake: {
      required: true,
    },
    game_type: {
      required: true,
    },
    active: {
      required: true,
    },
    resume: {
      required: true,
    },
    bot: {
      required: true,
    },
    player: {
      required: true,
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {
      waitingRoom: true,
      player1_random: "0",
      oldPlayer: "0",
      playerClick: "",
      player1_random_genarate: "",
      player2_random: "0",
      oldBot: "0",
      player2_random_genarate: "",

      StartWaitingTime: 0,
      StartWaitingTimeCounter: "",

      StartTime: 0,
      StartTimeCounter: "",

      BotWaitingTime: 0,
      BotWaitingTimeCounter: "",

      BotRunTime: 0,
      BotRunTimeCounter: "",

      BotClickTime: 0,
      BotClickTimeCounter: "",

      PlayerRunTime: 0,
      PlayerRunTimeCounter: "",

      upDownTime: 0,
      upDownTimeCounter: "",

      playerBtn: false,
    };
  },
  methods: {
    clickPlayer() {
      this.playerBtn = true;
      this.player1_random_genarate = "";

      axios
        .post(
          "http://127.0.0.1:8000/api/snakeladderplayerclicksystem",
          {
            gameId: this.gameId,
          },
          { headers: authHeader() }
        )
        .then(
          (response) => {
            if (response.data.status == 200) {
              console.log(response);
              // player
              this.player1_random_genarate = response.data.player_random;
              if (this.player1_random == "0") {
                if (this.player1_random_genarate == "1") {
                  this.playerClick = response.data.active;
                  this.player1_random = "1";
                  this.player2_random = response.data.bot;
                } else {
                  this.playerClick = response.data.active;
                }
              } else {
                // player go
                // asd
                if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  2
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 2) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 23;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);

                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  8
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 8) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 14;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  26
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 26) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 35;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  32
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 32) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 86;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 1000);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  38
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 38) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 44;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  41
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 41) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 60;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  56
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 56) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 77;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  69
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 69) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 90;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  79
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 79) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 81;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  88
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 88) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 92;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                }
                // snake
                else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  25
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 25) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 4;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  29
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 29) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 10;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  33
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 33) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 27;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  42
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 42) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 22;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  63
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 63) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 59;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  64
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 64) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 37;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  70
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 70) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 49;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  94
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 94) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 73;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  96
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 96) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 47;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                } else if (
                  response.data.oldPlayer + this.player1_random_genarate ===
                  99
                ) {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= 99) {
                      this.upDownTime = setInterval(() => {
                        this.upDownTimeCounter++;

                        this.player1_random = 78;
                        this.player2_random = response.data.bot;
                        this.playerClick = response.data.active;
                        clearInterval(this.upDownTime);
                      }, 500);
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                }
                // snake
                else {
                  this.PlayerRunTime = setInterval(() => {
                    this.PlayerRunTimeCounter++;
                    this.player1_random++;
                    if (this.player1_random >= response.data.player) {
                      this.player1_random = response.data.player;
                      this.player2_random = response.data.bot;
                      this.playerClick = response.data.active;
                      this.PlayerRunTimeCounter = "";
                      clearInterval(this.PlayerRunTime);
                    }
                  }, 500);
                }
                // asd

                // player go
              }
              // player
            } else {
              console.log("error");
            }
          },
          (error) => {
            console.log(error);
          }
        );
      // asd
      this.BotWaitingTime = setInterval(() => {
        this.BotWaitingTimeCounter++;
        if (this.playerClick == "0") {
          this.BotClickTime = setInterval(() => {
            this.BotClickTimeCounter++;
            if (this.BotClickTimeCounter >= "1") {
              this.player2_random_genarate = "";
              // bot
              axios
                .post(
                  "http://127.0.0.1:8000/api/snakeladderresumebot",
                  {
                    gameId: this.gameId,
                  },
                  { headers: authHeader() }
                )
                .then(
                  (response) => {
                    if (response.data.status == 200) {
                      this.player2_random_genarate = response.data.bot_random;
                      if (this.player2_random == "0") {
                        if (this.player2_random_genarate == "1") {
                          this.player2_random = "1";
                          this.playerClick = response.data.active;
                          this.playerBtn = false;
                        } else {
                          this.playerClick = response.data.active;
                          this.playerBtn = false;
                        }
                      } else {
                        if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          2
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 2) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 23;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          8
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 8) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 14;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          26
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 26) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 35;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          32
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 32) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 86;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          38
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 38) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 44;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          41
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 41) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 60;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          56
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 56) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 77;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          69
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 69) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 90;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          79
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 79) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 81;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          88
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 88) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 92;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        }
                        // snake
                        else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          25
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 25) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 4;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          29
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 29) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 10;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          33
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 33) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 27;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          42
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 42) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 22;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          63
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 63) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 59;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          64
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 64) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 37;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          70
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 70) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 49;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          94
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 94) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 73;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          96
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 96) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 47;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else if (
                          response.data.oldBot +
                            this.player2_random_genarate ===
                          99
                        ) {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= 99) {
                              this.upDownTime = setInterval(() => {
                                this.upDownTimeCounter++;

                                this.player2_random = 78;
                                this.player1_random = response.data.player;
                                this.playerClick = response.data.active;
                                this.playerBtn = false;
                                clearInterval(this.upDownTime);
                              }, 500);
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        } else {
                          this.BotRunTime = setInterval(() => {
                            this.BotRunTimeCounter++;
                            this.player2_random++;
                            if (this.player2_random >= response.data.bot) {
                              this.player2_random = response.data.bot;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              this.BotRunTimeCounter = "";
                              clearInterval(this.BotRunTime);
                            }
                          }, 500);
                        }
                        // snake
                        // bot go

                        // bot go
                      }
                    } else {
                      this.massage = response.data.massage;
                      console.log("error");
                    }
                  },
                  (error) => {
                    console.log(error);
                  }
                );
              this.BotClickTimeCounter = "";
              clearInterval(this.BotClickTime);
              // bot
            }
          }, 600);
          this.BotWaitingTimeCounter = "";
          clearInterval(this.BotWaitingTime);
        }
      }, 1000);
      // asd
    },
  },
  mounted() {
    if (this.resume == 1) {
      this.waitingRoom = false;
      this.playerClick = this.active;
      this.player1_random = this.player;
      this.player2_random = this.bot;
      this.player1_random_genarate = this.player_random;
      this.player2_random_genarate = this.bot_random;
      //   time
      this.StartTime = setInterval(() => {
        this.StartTimeCounter++;
        if (this.StartTimeCounter > 3) {
          if (this.playerClick == 0) {
            axios
              .post(
                "http://127.0.0.1:8000/api/snakeladderresumebot",
                {
                  gameId: this.gameId,
                },
                { headers: authHeader() }
              )
              .then(
                (response) => {
                  if (response.data.status == 200) {
                    this.player2_random_genarate = response.data.bot_random;
                    if (this.player2_random == "0") {
                      if (this.player2_random_genarate == "1") {
                        this.player2_random = "1";
                        this.playerClick = response.data.active;
                        this.playerBtn = false;
                      } else {
                        this.playerClick = response.data.active;
                        this.playerBtn = false;
                      }
                    } else {
                      if (
                        response.data.oldBot + this.player2_random_genarate ===
                        2
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 2) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 23;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        8
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 8) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 14;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        26
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 26) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 35;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        32
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 32) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 86;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        38
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 38) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 44;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        41
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 41) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 60;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        56
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 56) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 77;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        69
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 69) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 90;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        79
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 79) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 81;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        88
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 88) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 92;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      }
                      // snake
                      else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        25
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 25) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 4;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        29
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 29) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 10;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        33
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 33) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 27;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        42
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 42) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 22;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        63
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 63) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 59;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        64
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 64) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 37;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        70
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 70) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 49;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        94
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 94) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 73;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        96
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 96) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 47;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else if (
                        response.data.oldBot + this.player2_random_genarate ===
                        99
                      ) {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= 99) {
                            this.upDownTime = setInterval(() => {
                              this.upDownTimeCounter++;

                              this.player2_random = 78;
                              this.player1_random = response.data.player;
                              this.playerClick = response.data.active;
                              this.playerBtn = false;
                              clearInterval(this.upDownTime);
                            }, 500);
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      } else {
                        this.BotRunTime = setInterval(() => {
                          this.BotRunTimeCounter++;
                          this.player2_random++;
                          if (this.player2_random >= response.data.bot) {
                            this.player2_random = response.data.bot;
                            this.player1_random = response.data.player;
                            this.playerClick = response.data.active;
                            this.playerBtn = false;
                            this.BotRunTimeCounter = "";
                            clearInterval(this.BotRunTime);
                          }
                        }, 500);
                      }
                      // snake
                      // bot go

                      // bot go
                    }
                  } else {
                    this.massage = response.data.massage;
                    console.log("error");
                  }
                },
                (error) => {
                  (this.waitingRoom = false), console.log(error);
                }
              );
          }

          this.StartTimeCounter = "";
          clearInterval(this.StartTime);
        }
      }, 800);

      //   time
    } else {
      this.StartWaitingTime = setInterval(() => {
        this.StartWaitingTimeCounter++;
        if (this.StartWaitingTimeCounter > 3) {
          this.waitingRoom = false;
          this.StartWaitingTimeCounter = "";
          this.playerClick = 1;
          clearInterval(this.StartWaitingTime);
        }
      }, 1500);
    }
  },
};

</script>
<style>
</style>


