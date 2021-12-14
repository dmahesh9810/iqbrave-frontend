<template>
  <div class="w-full h-screen flex items-center justify-center bg-gray-200">
    <div
      v-if="gameStart == false"
      class="wrapper bg-purple-700 antialiased text-gray-900"
    >
      <div>
        <div class="relative">
          <!-- center -->

          <div
            class="w-full h-full mt-20 mb-20 h-24 text-center rounded py-2 px-4"
          >
            <div>
              <h1 class="text-white">{{ Massage }}</h1>
            </div>
            <div class="p-5">
              <div>
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
                </div>
                <div>
                  <button
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
                </div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <!-- center -->
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="resultResponse == false">
        <div v-if="!Massage">wait</div>
        <div v-else>
          {{ Massage }}
        </div>
      </div>
      <div v-else>
        <div class="w-full bg-purple-300 p-10 rounded">
          <div v-if="Counter <= 10 && Counter >= 1">
            {{ Counter }}
          </div>
          <div class="">
            <h1 class="font-bold">Question is :</h1>
            <h1>{{ Quiz }}<span>?</span></h1>
          </div>
        </div>
        <div class="w-full bg-blue-300 p-10 rounded mt-4">
          <div class="">
            <h1 class="font-bold">What is your answer :</h1>
            <div>
              <input
                type="radio"
                v-model="Correct"
                name="correct"
                value="1"
                checked
              /><span class="ml-3"> {{ Ans1 }}</span>
            </div>
            <div>
              <input
                type="radio"
                v-model="Correct"
                name="correct"
                value="2"
              /><span class="ml-3"> {{ Ans2 }}</span>
            </div>
            <div>
              <input
                type="radio"
                v-model="Correct"
                name="correct"
                value="3"
              /><span class="ml-3"> {{ Ans3 }}</span>
            </div>
            <div>
              <input
                type="radio"
                v-model="Correct"
                name="correct"
                value="4"
              /><span class="ml-3"> {{ Ans4 }}</span>
            </div>
            <div>
              <button
                v-if="btn == true && Counter <= 10"
                class="bg-blue-400 p-2 mt-2 rounded"
                @click="SubmitQuiz()"
              >
                Submit
              </button>
              <button v-else class="bg-gray-400 p-2 mt-2 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import authHeader from "@/services/auth-header.js";
import axios from "axios";

export default {
  data() {
    return {
      Stake: "1",
      gameStart: false,
      resultResponse: false,

      Quiz: "",
      Ans1: "",
      Ans2: "",
      Ans3: "",
      Ans4: "",
      Correct: "1",
      Massage: "",
      QuizResultId: "",
      QuestionId: "",

      timeCount: "",
      CounterOK: true,
      Counter: "0",
      btn: true,
      btnClickOK: false,
    };
  },
  methods: {
    SubmitQuiz() {
        this.correct = "0";
      this.btnClickOK = true;
      this.resultResponse = false;
      this.Massage = "";
      axios
        .post(
          "https://backend-re5zx.ondigitalocean.app/api/quizanswer",
          {
            correct: this.Correct,
            quizResultid: this.QuizResultId,
            questionid: this.QuestionId,
          },
          { headers: authHeader() }
        )
        .then((response) => {
          console.log(response);
          if (response.data.status == 200) {
            this.Massage = response.data.massage;
            this.gameStart = false;
            this.resultResponse = true;
          } else {
            this.gameStart = false;
            this.resultResponse = true;
            this.Massage = response.data.massage;
          }
        });
    },
    Start() {
        this.correct = "0";
      this.gameStart = true;
      this.btnClickOK = false;
      this.btn = true;
      this.Massage = "";
      axios
        .post(
          "https://backend-re5zx.ondigitalocean.app/getquiz",
          {
            stake: this.Stake,
            subject: "science",
          },
          { headers: authHeader() }
        )
        .then((response) => {
          console.log(response);
          if (response.data.status == 200) {
            this.QuizResultId = response.data.quizresultid;
            this.QuestionId = response.data.questionid;
            this.Quiz = response.data.quiz;
            this.Ans1 = response.data.ans1;
            this.Ans2 = response.data.ans2;
            this.Ans3 = response.data.ans3;
            this.Ans4 = response.data.ans4;
            this.resultResponse = true;
            // time
            this.timeCount = setInterval(() => {
              if (this.CounterOK == true) {
                this.Counter++;
              }
              if (this.Counter > 10) {
                this.btn = false;
              }
              if (this.Counter > 11 || this.btnClickOK == true) {
                
                
                // dd
                if (this.btnClickOK == false) {
                    this.btnClickOK == true;
                    this.btn == true;
                    this.Massage = "Time Out";
                  axios
                    .post(
                      "https://backend-re5zx.ondigitalocean.app/quizanswer",
                      {
                        correct: "0",
                        quizResultid: this.QuizResultId,
                        questionid: this.QuestionId,
                      },
                      { headers: authHeader() }
                    )
                    .then((response) => {
                      console.log(response);
                      if (response.data.status == 200) {
                        this.Massage = "Time Out";
                        this.gameStart = false;
                        this.resultResponse = true;
                        this.btn = true;
                      } else {
                        this.gameStart = false;
                        this.btn = true;
                        this.resultResponse = true;
                        this.Massage = "Time Out";
                      }
                    });
                    this.Counter = "0";
                this.btnClickOK == true;
                this.btn == true;
                clearInterval(this.timeCount);
                }

                // dd
                this.Counter = "0";
                this.btnClickOK == true;
                this.btn == true;
                clearInterval(this.timeCount);
              }
            }, 1000);
            // time
          } else {
            this.Massage = response.data.massage;
            this.gameStart = false;
            this.resultResponse = false;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>