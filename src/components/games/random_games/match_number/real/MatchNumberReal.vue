<template>
<div class="w-full h-screen flex items-center justify-center bg-gray-200">
<div class="wrapper bg-purple-700 antialiased text-gray-900">
    <div>
      <div class="relative">
        <div class="bg-white p-6 rounded-sm shadow-lg ml-28 h-32 text-center">
          <div class="items-baseline">
            <div class="text-gray-600 uppercase font-semibold">
              <span class="">Bot</span>
            </div>
          </div>

          <h4
            class="
              mt-1
              text-xl
              font-semibold
              uppercase
              leading-tight
              truncate
              w-36
            "
          >
            <span class="font-semibold text-4xl"> {{ botCounter }} </span>
          </h4>
        </div>
        <!-- center -->

        <div class="mt-20 mb-20 h-24 text-center">
          <!-- content -->
          <div v-if="startGame == false && resumeId">
            <button
              @click="Resume()"
              class="
                btn btn-primary btn-block
                bg-purple-600
                hover:bg-purple-900
                text-white
                rounded-lg
                px-3
                py-2
                text-white
                cursor-pointer
              "
            >
              Resume
            </button>
          </div>
          <div v-if="startGame == false && !resumeId">
            
            <div class="text-red-500">
            {{massage}}
            </div>
            <div>
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
              />
              <br />
              <div class="mt-3">
                <input
                  type="radio"
                  id="one"
                  value="tc"
                  v-model="coinType"
                  name="coin"
                  class="mr-1"
                  checked
                /><span>tc</span>
                <input
                  type="radio"
                  id="two"
                  value="gc"
                  v-model="coinType"
                  name="coin"
                  class="mr-1 ml-4"
                /><span>Gold</span>
                <input
                  type="radio"
                  id="tree"
                  value="usd"
                  v-model="coinType"
                  name="coin"
                  class="ml-4 mr-1"
                  disabled
                /><span>USD</span><br />
              </div>
            </div>
            <div>
              <button
                v-if="startGameOK == false"
                @click="Start()"
                class="
                  btn btn-primary btn-block
                  mt-5
                  bg-purple-600
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
                Start Game
              </button>
              <button
                v-if="startGameOK == true && startGame == false"
                class="
                  btn btn-primary btn-block
                  mt-5
                  bg-gray-600
                  text-white
                  rounded-lg
                  px-3
                  py-2
                  text-white
                  cursor-pointer
                "
              >
                Start Game
              </button>
            </div>
          </div>
          <!-- content -->
          <div v-if="startGame == true" class="text-center">
            <div>
              <div class="grid grid-cols-1 divide-y divide-white-500">
                <h4
                  class="
                    mt-1
                    text-5xl
                    font-semibold
                    uppercase
                    leading-tight
                    truncate
                  "
                >
                  <span v-if="result == ''" class="text-white-600">{{
                    systemRandom
                  }}</span>
                  <span v-if="result == 'Win'" class="text-green-600">WIN</span>
                  <span v-if="result == 'Loss'" class="text-red-600">LOSS</span>
                </h4>
                <div>
                  <div class="grid grid-cols-2 divide-x divide-green-500">
                    <div
                      class="text-4xl"
                      v-if="playerCounter == '' && playerDisplay == true"
                    >
                      {{ playerRandom }}
                    </div>
                    <div class="text-4xl" v-else></div>
                    <div
                      class="text-4xl"
                      v-if="botCounter == '' && botDisplay == true"
                    >
                      {{ botRandom }}
                    </div>
                    <div class="text-4xl" v-else></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- center -->

        <div class="bg-white p-6 rounded-sm shadow-lg mr-28 text-center h-32">
          <div class="items-baseline">
            <div class="text-gray-600 uppercase font-semibold">
              <span class="">Player</span>
            </div>
          </div>
          <div>
            <span class="font-semibold text-4xl"> {{ playerCounter }} </span>
          </div>
          <div>
            <button
              v-if="
                startGame == true && player_click == 0 && playerClickOk == false
              "
              @click="playerClick()"
              class="
                btn btn-primary btn-block
                bg-purple-600
                hover:bg-purple-900
                text-white
                rounded-lg
                px-3
                py-2
                text-white
                cursor-pointer
              "
            >
              Role Me
            </button>
            <button
              v-if="result !== ''"
              @click="Restart()"
              class="
                btn btn-primary btn-block
                bg-purple-600
                hover:bg-purple-900
                text-white
                rounded-lg
                px-3
                py-2
                text-white
                cursor-pointer
              "
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
import authHeader from "@/services/auth-header.js";
import axios from "axios";

export default {
  data() {
    return {
      massage: "",
      startGame: false,
      startGameOK: false,
      Stake: 2,
      coinType: "tc",
      systemRandom: "",
      result: "",
      lastGameId: "",

      player_click: 0,
      playerClickOk: false,
      gameId: "",

      playerRandom: "",
      playerTime: "",
      playerCounter: "",
      playerDisplay: false,

      botRandom: "",
      botTime: "",
      botCounter: "",
      botDisplay: false,

      resumeId: JSON.parse(localStorage.getItem("matchnumber")),
    };
  },
  methods: {
    Start() {
      this.startGameOk = true;
      axios
        .post(
          "http://127.0.0.1:8000/api/matchnumberenter",
          {
            stake: this.Stake,
            coinType: this.coinType,
          },
          { headers: authHeader() }
        )
        .then((response) => {
          if (response.data.status == 200) {
            this.startGame = true;
            this.systemRandom = response.data.enterGame.system_random;
            this.player_click = response.data.enterGame.player_click;
            this.gameId = response.data.enterGame.id;
            localStorage.setItem(
              "matchnumber",
              JSON.stringify(response.data.enterGame.id)
            );
          } else {
            this.startGameOk = false;
            this.massage = response.data.massage;
          }
        });
        this.massage = "";
    },
    playerClick() {
      this.playerClickOk = true;
      this.playerDisplay = false;

      axios
        .post(
          "http://127.0.0.1:8000/api/matchnumberplayer",
          {
            player_click: this.player_click,
            gameId: this.gameId,
          },
          { headers: authHeader() }
        )
        .then(
          (response) => {
            if (response.data.status == 200) {
              this.playerRandom = response.data.player.player_random;
              this.player_click = response.data.player.player_click;
            } else if (response.data.status == 204) {
              localStorage.removeItem("matchnumber");
              this.resumeId = "";
              this.startGame = false;
              this.startGameOK = false;
              this.Stake = 2;
              this.systemRandom = "";
              this.result = "";

              this.player_click = 0;
              this.playerClickOk = false;
              this.gameId = "";

              this.playerRandom = "";
              this.playerTime = "";
              this.playerCounter = "";
              this.playerDisplay = false;

              this.botRandom = "";
              this.botTime = "";
              this.botCounter = "";
              this.botDisplay = false;
            }
          },
          (error) => {
            console.log(error);
          }
        );
      // DD

      this.playerTime = setInterval(() => {
        if (this.playerClickOk == true) {
          this.playerCounter++;
        }
        if (this.playerCounter == 3) {
          this.playerDisplay = true;
          this.playerCounter = "";
          if (this.player_click == 2) {
            this.result = "Win";
            localStorage.removeItem("matchnumber");
          } else if (this.player_click == 3) {
            this.result = "Loss";
            localStorage.removeItem("matchnumber");
          }
          clearInterval(this.playerTime);
          // FF
          // gg
          if (this.player_click !== 2) {
            axios
              .post(
                "http://127.0.0.1:8000/api/matchnumberbot",
                {
                  player_click: this.player_click,
                  gameId: this.gameId,
                },
                { headers: authHeader() }
              )
              .then((response) => {
                if (response.data.status == 200) {
                  this.botDisplay = false;
                  this.botRandom = response.data.bot.bot_random;
                  this.player_click = response.data.bot.player_click;
                } else {
                  this.startGameOk = false;
                }
              });
            // gg
            this.botTime = setInterval(() => {
              if (this.playerClickOk == true) {
                this.botCounter++;
              }
              if (this.botCounter == 3) {
                this.botDisplay = true;
                this.botCounter = "";
                if (this.player_click == 2) {
                  this.result = "Win";
                  localStorage.removeItem("matchnumber");
                } else if (this.player_click == 3) {
                  this.result = "Loss";
                  localStorage.removeItem("matchnumber");
                }
                clearInterval(this.botTime);
                this.playerClickOk = false;
              }
            }, 1000);
          }
          // FF
        }
      }, 1000);
      // DD
    },
    Resume() {
      axios
        .post(
          "http://127.0.0.1:8000/api/matchresume",
          {
            gameId: this.resumeId,
          },
          { headers: authHeader() }
        )
        .then((response) => {
          if (response.data.status == 200) {
            this.startGame = true;
            this.systemRandom = response.data.enterGame.system_random;
            this.player_click = response.data.enterGame.player_click;
            this.gameId = response.data.enterGame.id;
            localStorage.setItem(
              "matchnumber",
              JSON.stringify(response.data.enterGame.id)
            );
          } else if (response.data.status == 204) {
            localStorage.removeItem("matchnumber");
            this.resumeId = "";
            this.startGame = false;
            this.startGameOK = false;
            this.Stake = 2;
            this.systemRandom = "";
            this.result = "";

            this.player_click = 0;
            this.playerClickOk = false;
            this.gameId = "";

            this.playerRandom = "";
            this.playerTime = "";
            this.playerCounter = "";
            this.playerDisplay = false;

            this.botRandom = "";
            this.botTime = "";
            this.botCounter = "";
            this.botDisplay = false;
          }
        });
    },

    Restart() {
      this.startGame = false;
      this.startGameOK = false;
      this.Stake = 2;
      this.systemRandom = "";
      this.result = "";

      this.player_click = 0;
      this.playerClickOk = false;
      this.gameId = "";

      this.playerRandom = "";
      this.playerTime = "";
      this.playerCounter = "";
      this.playerDisplay = false;

      this.botRandom = "";
      this.botTime = "";
      this.botCounter = "";
      this.botDisplay = false;
      this.resumeId = "";
    },
  },
};
</script>
<style lang="">
</style>