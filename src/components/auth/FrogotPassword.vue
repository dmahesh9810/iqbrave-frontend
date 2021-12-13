<template>
  <div class="col-md-12 mt-10 mb-48">
    <div class="flex justify-center items-center h-full">
      <div
        class="
          container
          max-w-sm
          mx-auto
          flex-1 flex flex-col
          items-center
          justify-center
          px-2
          mt-5
        "
      >
        <div
          class="
            bg-white
            px-6
            py-8
            rounded
            shadow-md
            text-black
            w-full
            max-w-sm
          "
        >
          <div class="form-group">
            <input v-if="mailSendOk == false"
              type="email"
              class="
                container
                max-w-sm
                mx-auto
                flex-1 flex flex-col
                items-center
                justify-center
                px-2
                mt-5
                focus:border-purple-700
                rounded
                border-2
                outline-none
                h-12
              "
              v-model="mailAddress"
              placeholder="Enter Email" required
            />
           <h1 class="text-green-500">{{successMassage}}</h1>
           <input v-if="passwordChangeOk == true"
              type="text"
              class="
                container
                max-w-sm
                mx-auto
                flex-1 flex flex-col
                items-center
                justify-center
                px-2
                mt-5
                focus:border-purple-700
                rounded
                border-2
                outline-none
                h-12
              "
              v-model="token"
              placeholder="Paste your Code"
            />
           <input v-if="passwordChangeOk == true"
              type="text"
              class="
                container
                max-w-sm
                mx-auto
                flex-1 flex flex-col
                items-center
                justify-center
                px-2
                mt-5
                focus:border-purple-700
                rounded
                border-2
                outline-none
                h-12
              "
              v-model="password"
              placeholder="New Password"
            />
           <input v-if="passwordChangeOk == true"
              type="text"
              class="
                container
                max-w-sm
                mx-auto
                flex-1 flex flex-col
                items-center
                justify-center
                px-2
                mt-5
                focus:border-purple-700
                rounded
                border-2
                outline-none
                h-12
              "
              v-model="password_confirmation"
              placeholder="Confirm password"
            />
            
           <h1 class="text-red-500">{{message}}</h1> 

            <button v-if="btnOk == true && mailAddress"
              @click="sendMail()"
              class="
              
                btn btn-primary btn-block
                bg-purple-600
                hover:bg-purple-900
                text-white
                font-bold
                p-2
                rounded
                container
                max-w-sm
                mx-auto
                flex-1 flex flex-col
                items-center
                justify-center
                px-2
                mt-5
              "
            >
              Send Mail
            </button>
            <button v-if="passwordChangeOk == true && password && token && password_confirmation && password_confirmation == password"
              @click="changePassword()"
              class="
              
                btn btn-primary btn-block
                bg-purple-600
                hover:bg-purple-900
                text-white
                font-bold
                p-2
                rounded
                container
                max-w-sm
                mx-auto
                flex-1 flex flex-col
                items-center
                justify-center
                px-2
                mt-5
              "
            >
              Change password
            </button>
            <button v-if="passwordChangeOk == false && btnOk == false && !mailSendOk == false && passwordChangeSuccess == !true"
            
              class="
              
                cursor-default
                btn btn-block
                bg-purple-100
                hover:bg-purple-100
                text-white
                font-bold
                p-2
                rounded
                container
                max-w-sm
                mx-auto
                flex-1 flex flex-col
                items-center
                justify-center
                px-2
                mt-5
              "
            >
              Change password
            </button>
            <button v-if="btnOk == false && !mailSendOk == true && passwordChangeOk == !true || !mailAddress"
              
              class="
              cursor-default
                btn btn-block
                bg-purple-100
                hover:bg-purple-100
                text-white
                font-bold
                p-2
                rounded
                container
                max-w-sm
                mx-auto
                flex-1 flex flex-col
                items-center
                justify-center
                px-2
                mt-5
              "
            >
              Send Mail
            </button>
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
  name: "FrogotPassword",
  data() {
    return {
      mailAddress: "",
      mailSendOk: false,
      message: "",
      successMassage: "",
      btnOk: true,
      mailCode: "",

counterOk: false,
myTime: 0,
counter: 0,
      password: "",
      password_confirmation: "",
      token: "",

      passwordChangeOk: false,
      passwordChangeSuccess: false,
    };
  },
  methods: {
    changePassword() {
      this.successMassage = "";
        this.changePasswordBtn = false;
        this.message = "";
      axios
        .post(
          "http://127.0.0.1:8000/api/reset-password",
          {
            email: this.mailAddress,
            password: this.password,
            password_confirmation: this.password_confirmation,
            token: this.token,
          },
          { headers: authHeader() }
        )
        .then(
      (response) => {
        this.counterOk = true;
          this.passwordChangeSuccess = true;
          this.passwordChangeOk = false;
        this.successMassage = response.data.message;
              this.myTime = setInterval(() => {
                if (this.counterOk == true) {
                  this.counter++;
                }
                if (this.counter == 3) {
                   window.location.href = "http://localhost:8081/login"
                  this.counter = 0;
                  this.counterOk = false;
                  clearInterval(this.myTime);
                }
              }, 1000);
      },
      (error) => {
          this.passwordChangeOk = true;
        this.message =
          (error.response &&
            error.response.data &&
            error.response.data) ||
          error.message ||
          error.toString();
        console.log(error);
        

      }
    );
    },
    sendMail() {
        this.btnOk = false;
        this.message = "";
      axios
        .post(
          "http://127.0.0.1:8000/api/frogot-password/",
          {
            email: this.mailAddress,
          },
          { headers: authHeader() }
        )
        .then(
      (r) => {
        console.log(r)
          this.mailSendOk = true;
          this.passwordChangeOk = true;
        this.successMassage = "Please check your email";
      },
      (error) => {
        console.log(error)
          this.btnOk = true; 
          this.passwordChangeOk = false;
          this.mailSendOk = false;
        this.message =
          (error.response &&
            error.response.data &&
            error.response.data.errors.email[0]) ||
          error.message ||
          error.toString();
      }
    );
    },
  }
};
</script>

<style lang="scss" scoped>
</style>