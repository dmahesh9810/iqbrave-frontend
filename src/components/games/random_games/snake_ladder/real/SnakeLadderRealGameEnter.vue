<template >
  <div>
    <!-- Snake Ladder Real -->
    <div
      v-if="waitingRoom == false && systemPlay == false"
      class="min-h-screen bg-gray-100 flex justify-center items-center"
    >
      <div
        class="
          container
          w-80
          mx-auto
          bg-white
          rounded-xl
          shadow-lg
          overflow-hidden
          hover:shadow-2xl
          transform
          hover:scale-105
          duration-500
        "
      >
        <div class="text-center relative py-10" v-if="PlayBtn == true">
          <h1
            class="
              mb-1
              text-1xl
              font-sans font-semibold
              text-red-500
              cursor-default
            "
          >
            {{ massage }}
          </h1>
          <h1
            class="
              mb-1
              text-2xl
              font-sans font-semibold
              text-gray-700
              hover:text-gray-900
              cursor-default
            "
          >
            Enter Stake
          </h1>
          <div>
            <div v-if="gameType !== 'usd'">
              <input
                v-model="Stake"
                class="
                  border-2 border-gray-200
                  rounded
                  py-2
                  px-4
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-purple-500
                "
                type="text"
              /><br />
            </div>
            <div v-else>
              <select v-model="Stake">
                <option value="1">1<span>$</span></option>
                <option value="2">2<span>$</span></option>
                <option value="5">5<span>$</span></option>
                <option value="10">10<span>$</span></option>
                <option value="25">25<span>$</span></option>
                <option value="100">100<span>$</span></option>
                <option value="250">250<span>$</span></option>
                <option value="500">500<span>$</span></option>
              </select>
            </div>
          </div>
          <div class="mt-3">
            <input
              checked
              type="radio"
              id="one"
              value="gc"
              v-model="gameType"
              name="coin"
              class="mr-1"
            /><span>GC</span>
            <input
              type="radio"
              id="two"
              value="usd"
              v-model="gameType"
              name="coin"
              class="ml-4 mr-1"
            /><span>USD</span>
            <input
              type="radio"
              id="two"
              value="tc"
              v-model="gameType"
              name="coin"
              class="ml-4 mr-1"
            /><span>Demo</span><br />
          </div>
          <button @click="Play(gameType)">
            <span
              class="
                transform
                -translate-x-10 -translate-y-24
                z-50
                text-purple-500
                bg-white
                rounded-full
                hover:text-purple-400
                transition-all
                duration-200
                cursor-pointer
              "
            >
              <svg class="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                />
              </svg>
            </span>
          </button>
        </div>
        <div
          v-if="PlayBtn == false && waitingRoom == false && systemPlay == false"
        >
          <div v-if="resume == 1">
            <button
              @click="Resume()"
              class="
                mt-2
                btn btn-primary btn-block
                w-full
                h-9
                bg-green-300
                text-white
                rounded-lg
                text-white
                cursor-pointer
              "
            >
              resume
            </button>
            <button
              @click="Cansle()"
              class="
                mt-2
                btn btn-primary btn-block
                w-full
                h-9
                bg-red-300
                text-white
                rounded-lg
                text-white
                cursor-pointer
              "
            >
              cansle
            </button>
          </div>
          <div v-if="resume == 0">wait</div>
        </div>
      </div>
    </div>

    <div
      v-if="waitingRoom == true"
      class="min-h-screen bg-gray-800 flex justify-center items-center"
    >
      <SnakeLedderRealGameMode :game-id="gameId" />
    </div>
    <div
      v-if="systemPlay == true"
      class="min-h-screen bg-gray-800 flex justify-center items-center"
    >
      <SnakeLedderSystem
        :player_random="playerRandom"
        :bot_random="botRandom"
        :Stake="Stake"
        :player="player"
        :bot="bot"
        :resume="resume"
        :active="active"
        :gameId="gameId"
      />
    </div>
    <!-- Snake Ladder Real -->
  </div>
</template>
<script>
import SnakeLedderRealGameMode from "@/components/games/random_games/snake_ladder/real/SnakeLadderRealGameMode.vue";
import SnakeLedderSystem from "@/components/games/random_games/snake_ladder/system/SnakeLadderSystem.vue";
import authHeader from "@/services/auth-header.js";
import axios from "axios";

export default {
  components: {
    SnakeLedderRealGameMode,
    SnakeLedderSystem,
  },
  data() {
    return {
      gameId: "",
      Stake: "1",
      gameType: "gc",

      waitingRoom: false,
      systemPlay: false,
      PlayBtn: true,

      resume: "0",
      player: "",
      bot: "",
      playerRandom: "",
      botRandom: "",
      active: "",
      massage: "",
    };
  },
  methods: {
    Resume() {
      this.systemPlay = true;
    },
    Cansle() {
      this.PlayBtn = false;
      axios
        .post(
          "http://127.0.0.1:8000/api/snakeladderentersystemresumcansle",
          {
            gameId: this.gameId,
            stake: this.Stake,
            gameType: this.gameType,
          },
          { headers: authHeader() }
        )
        .then(
          (response) => {
            if (response.data.status == 200) {
              this.active = response.data.active;
              this.bot = response.data.bot;
              this.player = response.data.player;
              this.playerRandom = response.data.player_random;
              this.botRandom = response.data.bot_random;
              this.gameId = response.data.id;
              this.systemPlay = true;

              console.log(response);
            } else {
              this.massage = response.data.massage;
              this.PlayBtn = true;
              (this.systemPlay = false), console.log(response);
            }
          },
          (error) => {
            (this.systemPlay = false), (this.PlayBtn = true);
            console.log(error);
          }
        );
    },
    Play(Type) {
      if (Type == "usd") {
        this.PlayBtn = false;
        axios
          .post(
            "http://127.0.0.1:8000/api/snakeladderenter",
            {
              stake: this.Stake,
              gameType: this.gameType,
            },
            { headers: authHeader() }
          )
          .then(
            (response) => {
              if (response.data.status == 200) {
                (this.waitingRoom = true),
                  (this.gameId = response.data.roomData.id);
                console.log(response);
              } else {
                this.massage = response.data.massage;
                this.PlayBtn = true;
                (this.waitingRoom = false), console.log(response);
                console.log("error");
              }
            },
            (error) => {
              (this.waitingRoom = false), (this.PlayBtn = true);
              console.log(error);
            }
          );
      }
      if (Type == "gc" || Type == "tc") {
        this.PlayBtn = false;
        axios
          .post(
            "http://127.0.0.1:8000/api/snakeladderentersystem",
            {
              stake: this.Stake,
              gameType: this.gameType,
            },
            { headers: authHeader() }
          )
          .then(
            (response) => {
              if (response.data.status == 200) {
                if (response.data.resume == 1) {
                  this.resume = response.data.resume;
                  this.active = response.data.active;
                  this.bot = response.data.bot;
                  this.player = response.data.player;
                  this.playerRandom = response.data.player_random;
                  this.botRandom = response.data.bot_random;
                  this.gameId = response.data.id;
                } else {
                  this.massage = response.data.massage;
                  this.active = response.data.active;
                  this.bot = response.data.bot;
                  this.player = response.data.player;
                  this.gameId = response.data.id;
                  this.systemPlay = true;
                }

                console.log(response);
              } else {
                this.massage = response.data.massage;
                this.PlayBtn = true;
                (this.systemPlay = false), console.log(response);
                console.log("error");
              }
            },
            (error) => {
              (this.systemPlay = false), (this.PlayBtn = true);
              console.log(error);
            }
          );
      }
    },
  },
};
</script>
<style>
</style>