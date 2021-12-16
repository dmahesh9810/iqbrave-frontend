<template>
  <!-- component -->
  <section>
    <div class="bg-black text-white py-20 mt-40">
      <div class="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
        <div class="flex flex-col w-full lg:w-1/3 p-8">
          <p class="ml-6 text-yellow-300 text-lg uppercase tracking-loose">
            REVIEW
          </p>
          <p class="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
            Leave us a feedback!
          </p>
          <p
            class="
              text-sm
              md:text-base
              leading-snug
              text-gray-50 text-opacity-100
            "
          >
            Please provide your valuable feedback and something ...
          </p>
        </div>
        <div class="flex flex-col w-full lg:w-2/3 justify-center">
          <div class="container w-full px-4">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-6/12 px-4">
                <div
                  class="
                    relative
                    flex flex-col
                    min-w-0
                    break-words
                    w-full
                    mb-6
                    shadow-lg
                    rounded-lg
                    bg-white
                  "
                >
                  <div class="flex-auto p-5 lg:p-10">
                    <h4 class="text-2xl mb-4 text-black font-semibold">
                      Have a suggestion?
                      <br>
                      
                    </h4>
                    <p class="text-green-500" v-if="smassage !== ''">{{smassage}}</p>
                    <p class="text-red-500" v-if="fmassage !== ''" >{{fMassage}}</p>
                      <div class="relative w-full mb-3">
                        <label
                          class="
                            block
                            uppercase
                            text-gray-700 text-xs
                            font-bold
                            mb-2
                          "
                          for="email"
                          >Email</label
                        ><input
                          v-model="email"
                          name="email"
                          id="email"
                          class="
                            border-0
                            px-3
                            py-3
                            rounded
                            text-sm
                            shadow
                            w-full
                            bg-gray-300
                            placeholder-black
                            text-gray-800
                            outline-none
                            focus:bg-gray-400
                          "
                          placeholder=" "
                          style="transition: all 0.15s ease 0s"
                          required
                        /> 
                      </div>
                      <div class="relative w-full mb-3">
                        <label
                          class="
                            block
                            uppercase
                            text-gray-700 text-xs
                            font-bold
                            mb-2
                          "
                          for="message"
                          >Message</label
                        ><textarea
                        v-model="feedback"
                          maxlength="300"
                          name="feedback"
                          id="feedback"
                          rows="4"
                          cols="80"
                          class="
                            border-0
                            px-3
                            py-3
                            bg-gray-300
                            placeholder-black
                            text-gray-800
                            rounded
                            text-sm
                            shadow
                            focus:outline-none
                            w-full
                          "
                          placeholder=""
                          required
                        ></textarea>
                      </div>
                      <div class="text-center mt-6">
                        <button @click="submitdata()" 
                          class="
                            btn btn-primary btn-block
                            border-2 border-blue-600
                            hover:bg-blue-600
							text-blue-600
                            rounded-lg
                            px-3
                            py-2
                            cursor-pointer
                            hover:text-white
                          " 
                          style="transition: all 0.45s ease 0s"
                        >
                          Submit
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      feedback: "",
      smassage: "",
      fMassage: "",
    }
  },
  methods: {
    submitdata(){
      this.smassage = "";
      this.massage = "";
axios
        .post(
          "https://backend-re5zx.ondigitalocean.app/api/feedback",
          {
            email: this.email,
            feedback: this.feedback,
          }
        )
        .then((response) => {
          console.log(response);
          if (response.data.status == 200) {
            this.email = "";
            this.feedback = "";
            this.fMassage = '';
            this.smassage = response.data.massage;
          } else {
            this.resultResponse = true;
            this.smassage = '';
            this.fMassage = response.data.massage;
          }
        });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>