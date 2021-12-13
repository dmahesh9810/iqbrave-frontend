<template>
  <!-- component -->
  <div class="items-center justify-center bg-white">
    <div class="p-16">
      <div>
        <div v-if="successMassage && !errorMassage">
          <h1 class="text-green-500">{{successMassage}}</h1>
        </div>
        <div v-if="errorMassage && !successMassage">
          <h1 class="text-red-500">{{errorMassage}}</h1>
        </div>
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
          @click="Save()"
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
</template>
<script>
import authHeader from "@/services/auth-header.js";
import axios from "axios";

export default {
  data() {
    return { 
         Subject: "ict" ,
         Quiz: "" ,
         Asw1: "" ,
         Asw2: "" ,
         Asw3: "" ,
         Asw4: "" ,
         CorrectAsw: "1",
         errorMassage: "",
         successMassage: "",
    };
  },
  methods: {
    Save() {
      this.errorMassage = "",
      this.successMassage = "",
      axios
        .post(
          'http://127.0.0.1:8000/api/savequiz',
          {
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
        .then((response) => {
          if (response.data.status == 200) {
            this.successMassage = response.data.massage;
            this.Subject = "";
            this.Quiz = "";
            this.Asw1 = "";
            this.Asw2 = "";
            this.Asw3 = "";
            this.Asw4 = "";
            this.CorrectAsw = "";
          } else {
            this.errorMassage = response.data.massage;
          }
        });
    },
  },
};
</script>
<style>
</style>