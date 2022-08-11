<template>
  <div class="items-center justify-center bg-white">
    <div v-if="successMassage && !errorMassage">
      <h1 class="text-green-500">{{ successMassage }}</h1>
    </div>
    <div v-if="errorMassage && !successMassage">
      <h1 class="text-red-500">{{ errorMassage }}</h1>
    </div>
    <div class="w-full divide-y divide-blue-500">
      <div v-if="editContent == false">
        <div >
          <div class="p-5">
            <div>
              <label class="inline-flex items-center">
                <input
                  @click="All()"
                  v-model="Search"
                  type="radio"
                  class="form-radio ml-2"
                  name="Search"
                  value="all"
                />
                <span class="ml-2">All</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  @click="Ict()"
                  v-model="Search"
                  type="radio"
                  class="form-radio ml-2"
                  name="Search"
                  value="ict"
                />
                <span class="ml-2">ICT</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  @click="Maths()"
                  v-model="Search"
                  type="radio"
                  class="form-radio ml-2"
                  name="Search"
                  value="maths"
                />
                <span class="ml-2">Maths</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  @click="Science()"
                  v-model="Search"
                  type="radio"
                  class="form-radio ml-2"
                  name="Search"
                  value="science"
                />
                <span class="ml-2">Science</span>
              </label>
            </div>
          </div>
          <div v-if="massage == ''">
<div
            class="p-10 border-2 mt-2"
            v-for="content in content"
            :key="content"
          >
            <div>
              Subject is : <span>{{ content.subject }}</span>
            </div>
            <div class="mt-2">
              question is : <span>{{ content.quiz }}</span>
            </div>
            <div class="mt-2">
              Answer 1 : <span>{{ content.answer1 }}</span>
            </div>
            <div class="mt-2">
              Answer 2 : <span>{{ content.answer2 }}</span>
            </div>
            <div class="mt-2">
              Answer 3 : <span>{{ content.answer3 }}</span>
            </div>
            <div class="mt-2">
              Answer 4 : <span>{{ content.answer4 }}</span>
            </div>
            <div class="mt-2">
              Correct : <span>{{ content.correct }}</span>
            </div>
            <button
              @click="
                editQuiz(
                  content.subject,
                  content.quiz,
                  content.answer1,
                  content.answer2,
                  content.answer3,
                  content.answer4,
                  content.correct,
                  content.id
                )
              "
              class="
                w-24
                mt-2
                bg-purple-600
                hover:bg-purple-900
                text-white
                font-bold
                p-2
                rounded
                items-center
              "
            >
              edit
            </button>
          </div>
          <div class="w-full flex items-center justify-center p-3">
            <button
              @click="FirstPage()"
              class="
                bg-purple-600
                hover:bg-purple-900
                text-white
                font-bold
                p-2
                rounded
                items-center
                ml-5
              "
            >
              First Page
            </button>
            <button
              @click="PrevPage()"
              class="
                bg-purple-600
                hover:bg-purple-900
                text-white
                font-bold
                p-2
                rounded
                items-center
                ml-5
              "
            >
              Previous
            </button>
            <button
              @click="NextPage()"
              class="
                bg-purple-600
                hover:bg-purple-900
                text-white
                font-bold
                p-2
                rounded
                ml-5
                items-center
              "
            >
              Next
            </button>
            <button
              @click="LastPage()"
              class="
                bg-purple-600
                hover:bg-purple-900
                text-white
                font-bold
                p-2
                rounded
                ml-5
                items-center
              "
            >
              Last Page
            </button>
          </div>
          </div>
          <div v-else>
             {{massage}}
          </div>
          
        </div>
      </div>
      <div v-if="editContent == true">
        <div class="items-center justify-center bg-white">
          <div class="p-16">
            <div>
              <h1>What is subject ?</h1>
              <label class="inline-flex items-center">
                <input
                  v-model="Subject"
                  type="radio"
                  class="form-radio"
                  name="Subject"
                  value="ict"
                />
                <span class="ml-2">ICT</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  v-model="Subject"
                  type="radio"
                  class="form-radio ml-2"
                  name="Subject"
                  value="maths"
                />
                <span class="ml-2">Maths</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  v-model="Subject"
                  type="radio"
                  class="form-radio ml-2"
                  name="Subject"
                  value="science"
                />
                <span class="ml-2">Science</span>
              </label>
            </div>
            <div>
              <div>
                <h1 class="mt-2">What is questions</h1>
                <textarea
                  v-model="Quiz"
                  class="
                    resize-x
                    border
                    rounded-md
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    relative
                    bg-white bg-white
                    rounded
                    text-sm
                    border-0
                    shadow
                    outline-none
                    focus:outline-none focus:ring
                    w-full
                  "
                ></textarea>
              </div>
              <div>
                <h1 class="mt-2">Answer 1</h1>
                <input
                  v-model="Asw1"
                  type="text"
                  placeholder="Enter Answer 1"
                  class="
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    relative
                    bg-white bg-white
                    rounded
                    text-sm
                    border-0
                    shadow
                    outline-none
                    focus:outline-none focus:ring
                    w-full
                  "
                />
              </div>
              <div>
                <h1 class="mt-2">Answer 2</h1>
                <input
                  v-model="Asw2"
                  type="text"
                  placeholder="Enter Answer 2"
                  class="
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    relative
                    bg-white bg-white
                    rounded
                    text-sm
                    border-0
                    shadow
                    outline-none
                    focus:outline-none focus:ring
                    w-full
                  "
                />
              </div>
              <div>
                <h1 class="mt-2">Answer 3</h1>
                <input
                  v-model="Asw3"
                  type="text"
                  placeholder="Enter Answer 3"
                  class="
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    relative
                    bg-white bg-white
                    rounded
                    text-sm
                    border-0
                    shadow
                    outline-none
                    focus:outline-none focus:ring
                    w-full
                  "
                />
              </div>
              <div>
                <h1 class="mt-2">Answer 4</h1>
                <input
                  v-model="Asw4"
                  type="text"
                  placeholder="Enter Answer 4"
                  class="
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    relative
                    bg-white bg-white
                    rounded
                    text-sm
                    border-0
                    shadow
                    outline-none
                    focus:outline-none focus:ring
                    w-full
                  "
                />
              </div>
            </div>
            <div>
              <div>
                <h1 class="mt-2">What is correct answer ?</h1>
                <label class="inline-flex items-center">
                  <input
                    v-model="CorrectAsw"
                    type="radio"
                    class="form-radio"
                    name="CorrectAsw"
                    value="1"
                  />
                  <span class="ml-2">Answer 1</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    v-model="CorrectAsw"
                    type="radio"
                    class="form-radio ml-2"
                    name="CorrectAsw"
                    value="2"
                  />
                  <span class="ml-2">Answer 2</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    v-model="CorrectAsw"
                    type="radio"
                    class="form-radio ml-2"
                    name="CorrectAsw"
                    value="3"
                  />
                  <span class="ml-2">Answer 3</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    v-model="CorrectAsw"
                    type="radio"
                    class="form-radio ml-2"
                    name="CorrectAsw"
                    value="4"
                  />
                  <span class="ml-2">Answer 4</span>
                </label>
              </div>
            </div>
            <div>
              <button
                v-if="saveBtn"
                @click="Edit()"
                class="
                  mt-4
                  bg-transparent
                  hover:bg-blue-500
                  text-blue-700
                  font-semibold
                  hover:text-white
                  py-2
                  px-4
                  border border-blue-500
                  hover:border-transparent
                  rounded
                "
              >
                Save Quiz
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
      Search: "all",
      saveBtn: true,
      Subject: "",
      Quiz: "",
      Asw1: "",
      Asw2: "",
      Asw3: "",
      Asw4: "",
      CorrectAsw: "",
      QuizId: "",
      errorMassage: "",
      successMassage: "",

      editContent: false,
      content: "",
      massage: "",
      firstPage: "",
      prevPage: "",
      nextPage: "",
      lastPage: "",
      currentPage: "",
    };
  },

  methods: {
      All() {
        this.massage = "";
      (this.errorMassage = ""),
        (this.successMassage = ""),
        axios
          .get("http://127.0.0.1:8000/api/getuserquiz", {
            headers: authHeader(),
          })
          .then(
            (response) => {
              if (response.data.status == 200) {
                console.log(response.data.question);
                this.content = response.data.question.data;
                this.nextPage = response.data.question.next_page_url;
                this.firstPage = response.data.question.first_page_url;
                this.prevPage = response.data.question.prev_page_url;
                this.lastPage = response.data.question.last_page_url;
                this.currentPage = response.data.question.current_page;
              } else {
                //   console.log(response)
                this.massage = response.data.massage;
              }
            },
            (error) => {
              console.log(error);
              this.massage = "Somthing else";
            }
          );
    },
    Ict() {
        this.massage = "";
      (this.errorMassage = ""),
        (this.successMassage = ""),
        axios
          .get("http://127.0.0.1:8000/api/getuserquizict", {
            headers: authHeader(),
          })
          .then(
            (response) => {
              if (response.data.status == 200) {
                console.log(response.data.question);
                this.content = response.data.question.data;
                this.nextPage = response.data.question.next_page_url;
                this.firstPage = response.data.question.first_page_url;
                this.prevPage = response.data.question.prev_page_url;
                this.lastPage = response.data.question.last_page_url;
                this.currentPage = response.data.question.current_page;
              } else {
                //   console.log(response)
                this.massage = response.data.massage;
              }
            },
            (error) => {
              console.log(error);
              this.massage = "Somthing else";
            }
          );
    },
    Maths() {
        this.massage = "";
      (this.errorMassage = ""),
        (this.successMassage = ""),
        axios
          .get("http://127.0.0.1:8000/api/getuserquizmaths", {
            headers: authHeader(),
          })
          .then(
            (response) => {
              if (response.data.status == 200) {
                console.log(response.data.question);
                this.content = response.data.question.data;
                this.nextPage = response.data.question.next_page_url;
                this.firstPage = response.data.question.first_page_url;
                this.prevPage = response.data.question.prev_page_url;
                this.lastPage = response.data.question.last_page_url;
                this.currentPage = response.data.question.current_page;
              } else {
                //   console.log(response)
                this.massage = response.data.massage;
              }
            },
            (error) => {
              console.log(error);
              this.massage = "Somthing else";
            }
          );
    },
    Science() {
        this.massage = "";
      (this.errorMassage = ""),
        (this.successMassage = ""),
        axios
          .get("http://127.0.0.1:8000/api/getuserquizscience", {
            headers: authHeader(),
          })
          .then(
            (response) => {
              if (response.data.status == 200) {
                console.log(response.data.question);
                this.content = response.data.question.data;
                this.nextPage = response.data.question.next_page_url;
                this.firstPage = response.data.question.first_page_url;
                this.prevPage = response.data.question.prev_page_url;
                this.lastPage = response.data.question.last_page_url;
                this.currentPage = response.data.question.current_page;
              } else {
                //   console.log(response)
                this.massage = response.data.massage;
              }
            },
            (error) => {
              console.log(error);
              this.massage = "Somthing else";
            }
          );
    },
    Edit() {
      this.saveBtn = false;
      (this.errorMassage = ""),
        (this.successMassage = ""),
        axios
          .post(
            "http://127.0.0.1:8000/api/editquiz",
            {
              QuizId: this.QuizId,
              Subject: this.Subject,
              Quiz: this.Quiz,
              Asw1: this.Asw1,
              Asw2: this.Asw2,
              Asw3: this.Asw3,
              Asw4: this.Asw4,
              CorrectAsw: this.CorrectAsw,
            },
            { headers: authHeader() }
          )
          .then(
            (response) => {
              if (response.data.status == 200) {
                //   sdf

                axios
                  .get(
                    "http://127.0.0.1:8000/api/getquiz?page=" +
                      this.currentPage,
                    { headers: authHeader() }
                  )
                  .then((response) => {
                    if (response.data.status == 200) {
                      this.content = response.data.question.data;
                      this.nextPage = response.data.question.next_page_url;
                      this.firstPage = response.data.question.first_page_url;
                      this.prevPage = response.data.question.prev_page_url;
                      this.lastPage = response.data.question.last_page_url;
                    } else {
                      this.saveBtn = true;
                      this.massgae = "somthing else";
                    }
                  });
                //   sdf
                this.editContent = false;
                this.successMassage = response.data.massage;
                this.saveBtn = true;
              } else {
                this.errorMassage = response.data.massage;
              }
            },
            (error) => {
              console.log(error);
              this.massgae = "Somthing else";
            }
          );
    },
    editQuiz(a, b, c, d, e, f, g, h) {
      (this.errorMassage = ""),
        (this.successMassage = ""),
        (this.editContent = true);
      this.Subject = a;
      this.Quiz = b;
      this.Asw1 = c;
      this.Asw2 = d;
      this.Asw3 = e;
      this.Asw4 = f;
      this.CorrectAsw = g;
      this.QuizId = h;
    },
    FirstPage() {
      window.scrollTo(0, 0);
      (this.errorMassage = ""),
        (this.successMassage = ""),
        axios.get(this.firstPage, { headers: authHeader() }).then(
          (response) => {
            if (response.data.status == 200) {
              console.log(response.data.question);
              this.content = response.data.question.data;
              this.nextPage = response.data.question.next_page_url;
              this.firstPage = response.data.question.first_page_url;
              this.prevPage = response.data.question.prev_page_url;
              this.lastPage = response.data.question.last_page_url;
              this.currentPage = response.data.question.current_page;
            } else {
              //   console.log(response)
              this.massgae = "somthing else";
            }
          },
          (error) => {
            console.log(error);
            this.massgae = "Somthing else";
          }
        );
    },
    PrevPage() {
      window.scrollTo(0, 0);
      (this.errorMassage = ""),
        (this.successMassage = ""),
        axios.get(this.prevPage, { headers: authHeader() }).then(
          (response) => {
            if (response.data.status == 200) {
              console.log(response.data.question);
              this.content = response.data.question.data;
              this.nextPage = response.data.question.next_page_url;
              this.firstPage = response.data.question.first_page_url;
              this.prevPage = response.data.question.prev_page_url;
              this.lastPage = response.data.question.last_page_url;
              this.currentPage = response.data.question.current_page;
            } else {
              //   console.log(response)
              this.massgae = "somthing else";
            }
          },
          (error) => {
            console.log(error);
            this.massgae = "Somthing else";
          }
        );
    },
    NextPage() {
      window.scrollTo(0, 0);
      (this.errorMassage = ""),
        (this.successMassage = ""),
        axios.get(this.nextPage, { headers: authHeader() }).then(
          (response) => {
            if (response.data.status == 200) {
              console.log(response.data.question);
              this.content = response.data.question.data;
              this.nextPage = response.data.question.next_page_url;
              this.firstPage = response.data.question.first_page_url;
              this.prevPage = response.data.question.prev_page_url;
              this.lastPage = response.data.question.last_page_url;
              this.currentPage = response.data.question.current_page;
            } else {
              //   console.log(response)
              this.massgae = "somthing else";
            }
          },
          (error) => {
            console.log(error);
            this.massgae = "Somthing else";
          }
        );
    },
    LastPage() {
      window.scrollTo(0, 0);
      (this.errorMassage = ""),
        (this.successMassage = ""),
        axios.get(this.lastPage, { headers: authHeader() }).then(
          (response) => {
            if (response.data.status == 200) {
              this.content = response.data.question.data;
              this.nextPage = response.data.question.next_page_url;
              this.firstPage = response.data.question.first_page_url;
              this.prevPage = response.data.question.prev_page_url;
              this.lastPage = response.data.question.last_page_url;
              this.currentPage = response.data.question.current_page;
            } else {
              //   console.log(response)
              this.massgae = "somthing else";
            }
          },
          (error) => {
            console.log(error);
            this.massgae = "Somthing else";
          }
        );
    },
  },
  mounted() {
    (this.errorMassage = ""),
      (this.successMassage = ""),
      axios
        .get("http://127.0.0.1:8000/api/getuserquiz", { headers: authHeader() })
        .then(
          (response) => {
            if (response.data.status == 200) {
              console.log(response.data.question);
              this.massage = "";
              this.content = response.data.question.data;
              this.nextPage = response.data.question.next_page_url;
              this.firstPage = response.data.question.first_page_url;
              this.prevPage = response.data.question.prev_page_url;
              this.lastPage = response.data.question.last_page_url;
              this.currentPage = response.data.question.current_page;
            } else {
              this.massage = response.data.massage;
            }
          },
          (error) => {
            console.log(error);
            this.massage = "Somthing else";
          }
        );
  },
};
</script>

<style lang="scss" scoped></style>
