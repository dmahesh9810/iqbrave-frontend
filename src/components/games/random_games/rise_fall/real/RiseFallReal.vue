<template>
   <div class="w-full h-screen flex items-center justify-center bg-gray-200">
<div class="wrapper bg-purple-700 antialiased text-gray-900">
    <div>
      <div class="relative">
        <div class="bg-white p-6 rounded-sm shadow-lg w-80 h-32 text-center">
          <div class="items-baseline">
            <div class="text-gray-600 uppercase font-semibold">
              <div v-if="result == 1 && result !== ''">
                <h1 class="text-4xl text-green-600">Win</h1>
              </div>
              <div v-if="result == 0 && result !== ''">
                <h1 class="text-4xl text-red-600">Loss</h1>
              </div>
              <div >
                <h1 class="text-1xl text-red-600">{{massage}}</h1>
              </div>
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
          </h4>
        </div>
        <!-- center -->

        <div class="mt-20 mb-20 h-24 text-center">
           <div v-if="enterGame == false">
              <input placeholder="Enter stake"
                v-model="Stake"
                class="
                  border-2 border-gray-200
                  rounded
                  py-2
                  px-4
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-purple-500 mb-2
                "
                type="text"
              /> <br>
           <input placeholder="Guest digit"
                v-model="Digit"
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
                /><span>Gold</span><br />
              </div>
           </div>
           <div v-else >
             <div class="flex items-center justify-center  divide-x divide-green-500">
              <div class="w-7 h-7 bg-blue-300 ">
                1
              </div>
              <div class="w-7 h-7 bg-blue-300">
                2
              </div>
              <div class="w-7 h-7 bg-blue-300">
                3
              </div>
              <div class="w-7 h-7 bg-blue-300">
                4
              </div>
              <div class="w-7 h-7 bg-blue-300">
                5
              </div>
              <div class="w-7 h-7 bg-blue-300">
                6
              </div>
              <div class="w-7 h-7 bg-blue-300">
                7
              </div>
              <div class="w-7 h-7 bg-blue-300">
                8
              </div>
              <div class="w-7 h-7 bg-blue-300">
                9
              </div>
              <div class="w-7 h-7 bg-blue-300">
                10
              </div>
             </div><br>
             <div class="flex items-center justify-center -mt-5 divide-x divide-green-500">
               <div class="w-7 h-7 bg-blue-300" v-if="firstDigit !== '0'">
                {{firstDigit}}
              </div>
               <div class="w-7 h-7 bg-blue-300" v-else>
                
              </div>
              <div class="w-7 h-7 bg-blue-300" v-if="second_digit !== '0'">
                {{second_digit}}
              </div>
              <div class="w-7 h-7 bg-blue-300" v-else>
                
              </div>
              <div class="w-7 h-7 bg-blue-300" v-if="third_digit !== '0'">
                {{third_digit}}
              </div>
              <div class="w-7 h-7 bg-blue-300" v-else>
                
              </div>
              <div class="w-7 h-7 bg-blue-300" v-if="four_digit !== '0'">
                {{four_digit}}
              </div>
              <div class="w-7 h-7 bg-blue-300" v-else>
                
              </div>
              <div class="w-7 h-7 bg-blue-300" v-if="five_digit !== '0'">
                {{five_digit}}
              </div>
              <div class="w-7 h-7 bg-blue-300" v-else>
                
              </div>
              <div class="w-7 h-7 bg-blue-300" v-if="six_digit !== '0'">
                {{six_digit}}
              </div>
              <div class="w-7 h-7 bg-blue-300" v-else>
                
              </div>
              <div class="w-7 h-7 bg-blue-300" v-if="seven_digit !== '0'">
                {{seven_digit}}
              </div>
              <div class="w-7 h-7 bg-blue-300" v-else>
                
              </div>
              <div class="w-7 h-7 bg-blue-300" v-if="eight_digit !== '0'">
                {{eight_digit}}
              </div>
              <div class="w-7 h-7 bg-blue-300" v-else>
                
              </div>
              <div class="w-7 h-7 bg-blue-300" v-if="nine_digit !== '0'">
                {{nine_digit}}
              </div>
              <div class="w-7 h-7 bg-blue-300" v-else>
                
              </div>
              <div class="w-7 h-7 bg-blue-300" v-if="ten_digit !== '0'">
                {{ten_digit}}
              </div>
              <div class="w-7 h-7 bg-blue-300" v-else>
                
              </div>
             </div>
             
              
           </div><br>
           
        </div>
        <!-- center -->

        <div class="bg-white p-6 rounded-sm shadow-lg  text-center h-32">
          <div class="items-baseline">
            <div class="text-gray-600 uppercase font-semibold">
              <div v-if="result == ''">
<button @click="up()" v-if="enterGame == false && Digit > 1 && Digit < 10 && Stake >= 1"
                class="
                mr-2
                  btn btn-primary btn-block
                  mt-5
                  w-20
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
                UP
              </button>
<button v-else
                class="
                mr-2
                  btn btn-primary btn-block
                  mt-5
                  w-20
                  bg-gray-600 
                  text-white
                  rounded-lg
                  px-3
                  py-2
                  text-white
                  cursor-default 
                "
              >
                UP
              </button>
              <button @click="down()" v-if="enterGame == false  && Digit > 1 && Digit < 10 && Stake >= 1"
                class="
                  btn btn-primary btn-block
                  mt-5
                  w-20
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
                DOWN
              </button>
              <button  v-else
                class="
                  btn btn-primary btn-block
                  mt-5
                  w-20
                  bg-gray-600 
                  text-white
                  rounded-lg
                  px-3
                  py-2
                  text-white
                  cursor-default 
                "
              >
                DOWN
              </button>
              </div>
              <div v-else>
                <button @click="Restart()"
                class="
                  btn btn-primary btn-block
                  mt-5
                  w-20
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
                Restart
              </button>
              </div>
              
            </div>
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
      return{
         enterGame: false,
         Stake: "",
         Digit: "",
         coinType: "tc",

         firstDigit: "0", 
         second_digit: "0", 
         third_digit: "0", 
         four_digit: "0", 
         five_digit: "0", 
         six_digit: "0", 
         seven_digit: "0", 
         eight_digit: "0", 
         nine_digit: "0", 
         ten_digit: "0",

         result: "",
         CounterOK: false,
         timeCount: "0",
         Counter: "0",
         restartok: false,
         massage: "",


 
      }
   },
   methods: {
      up(){
        this.massage = "";
        this.CounterOK = false;
        this.restartok = false;
         this.enterGame = true;
         axios
        .post(
          "https://backend-re5zx.ondigitalocean.app/api/risefallenter",
          {
            stake: this.Stake,
            digit: this.Digit,
            cointype: this.coinType,
            action: "up",
          },
          { headers: authHeader() }
        )
        .then((response) => {
          if (response.data.status == 200) {

            
            this.CounterOK = true;
            // time
            this.timeCount = setInterval(() => {
              if (this.CounterOK == true) {
                this.Counter++;
                if (this.Counter >= 1) {
                  this.firstDigit = response.data.firstDigit;
                  if(this.Digit == 1 && this.Digit <= this.firstDigit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 1 && this.Digit > this.firstDigit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 2) {
                  this.second_digit = response.data.second_digit;
                  if(this.Digit == 2 && this.Digit <= this.second_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 2 && this.Digit > this.second_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 3) {
                  this.third_digit = response.data.third_digit;
                  if(this.Digit == 3 && this.Digit <= this.third_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 3 && this.Digit > this.third_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 4) {
                  this.four_digit = response.data.four_digit;
                  if(this.Digit == 4 && this.Digit <= this.four_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 4 && this.Digit > this.four_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 5) {
                  this.five_digit = response.data.five_digit;
                  if(this.Digit == 5 && this.Digit <= this.five_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 5 && this.Digit > this.five_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 6) {
                  this.six_digit = response.data.six_digit;
                  if(this.Digit == 6 && this.Digit <= this.six_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 6 && this.Digit > this.six_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 7) {
                  this.seven_digit = response.data.seven_digit;
                  if(this.Digit == 7 && this.Digit <= this.seven_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 7 && this.Digit > this.seven_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 8) {
                  this.eight_digit = response.data.eight_digit;
                  if(this.Digit == 8 && this.Digit <= this.eight_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 8 && this.Digit > this.eight_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 9) {
                  this.nine_digit = response.data.nine_digit;
                  if(this.Digit == 9 && this.Digit <= this.nine_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 9 && this.Digit > this.nine_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 10) {
                  this.ten_digit = response.data.ten_digit;
                  if(this.Digit == 10 && this.Digit <= this.ten_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 10 && this.Digit > this.ten_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 11 || this.restartok == true) {
                  this.Counter = "0";
                  clearInterval(this.timeCount);
                }
              }
                
              
            }, 1000);
            // time
          }else {
            clearInterval(this.timeCount);
        this.CounterOK = false;
        this.restartok = true;
        this.Counter = "0";
            this.enterGame = false,

                  this.firstDigit = "0"; 
                  this.second_digit = "0"; 
                  this.third_digit = "0"; 
                  this.four_digit = "0"; 
                  this.five_digit = "0"; 
                  this.six_digit = "0"; 
                  this.seven_digit = "0"; 
                  this.eight_digit = "0"; 
                  this.nine_digit = "0"; 
                  this.ten_digit = "0";

                  this.result = '';
                  this.timeCount = "0";
            this.massage = response.data.massage;
          }
        },
          (error) => {
            this.$router.push("/randomgame");
            console.log(error);
          });
      },
      down(){
        this.massage = "";
        this.CounterOK = false;
        this.restartok = false;
         this.enterGame = true;
         axios
        .post(
          "http://127.0.0.1:8000/api/risefallenter",
          {
            stake: this.Stake,
            digit: this.Digit,
            cointype: this.coinType,
            action: "down",
          },
          { headers: authHeader() }
        )
        .then((response) => {
          // time
          if (response.data.status == 200) {

            
            this.CounterOK = true;
            // time
            this.timeCount = setInterval(() => {
              if (this.CounterOK == true) {
                this.Counter++; 
                if (this.Counter >= 1) {
                  this.firstDigit = response.data.firstDigit;
                  if(this.Digit == 1 && this.Digit >= this.firstDigit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 1 && this.Digit < this.firstDigit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 2) {
                  this.second_digit = response.data.second_digit;
                  if(this.Digit == 2 && this.Digit >= this.second_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 2 && this.Digit < this.second_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 3) {
                  this.third_digit = response.data.third_digit;
                  if(this.Digit == 3 && this.Digit >= this.third_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 3 && this.Digit < this.third_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 4) {
                  this.four_digit = response.data.four_digit;
                  if(this.Digit == 4 && this.Digit >= this.four_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 4 && this.Digit < this.four_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 5) {
                  this.five_digit = response.data.five_digit;
                  if(this.Digit == 5 && this.Digit >= this.five_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 5 && this.Digit < this.five_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 6) {
                  this.six_digit = response.data.six_digit;
                  if(this.Digit == 6 && this.Digit >= this.six_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 6 && this.Digit < this.six_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 7) {
                  this.seven_digit = response.data.seven_digit;
                  if(this.Digit == 7 && this.Digit >= this.seven_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 7 && this.Digit < this.seven_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 8) {
                  this.eight_digit = response.data.eight_digit;
                  if(this.Digit == 8 && this.Digit >= this.eight_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 8 && this.Digit < this.eight_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 9) {
                  this.nine_digit = response.data.nine_digit;
                  if(this.Digit == 9 && this.Digit >= this.nine_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 9 && this.Digit < this.nine_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 10) {
                  this.ten_digit = response.data.ten_digit;
                  if(this.Digit == 10 && this.Digit >= this.ten_digit){
                      this.result = response.data.result;
                  }
                  if (this.Digit == 10 && this.Digit < this.ten_digit) {
                     this.result = response.data.result;
                  }
                }
                if (this.Counter >= 11 || this.restartok == true) {
                  this.Counter = "0";
                  clearInterval(this.timeCount);
                }
              }
                
              
            }, 1000);
            // time
          } else {
            clearInterval(this.timeCount);
        this.CounterOK = false;
        this.restartok = true;
        this.Counter = "0";
            this.enterGame = false,

                  this.firstDigit = "0"; 
                  this.second_digit = "0"; 
                  this.third_digit = "0"; 
                  this.four_digit = "0"; 
                  this.five_digit = "0"; 
                  this.six_digit = "0"; 
                  this.seven_digit = "0"; 
                  this.eight_digit = "0"; 
                  this.nine_digit = "0"; 
                  this.ten_digit = "0";

                  this.result = '';
                  this.timeCount = "0";
            this.massage = response.data.massage;
          }
          // time
        },
          (error) => {
            this.$router.push("/randomgame");
            console.log(error);
          });
      },
      Restart(){
        this.massage = "";
        clearInterval(this.timeCount);
        this.CounterOK = false;
        this.restartok = true;
        this.Counter = "0";
                  // das
                  this.enterGame = false,

                  this.firstDigit = "0"; 
                  this.second_digit = "0"; 
                  this.third_digit = "0"; 
                  this.four_digit = "0"; 
                  this.five_digit = "0"; 
                  this.six_digit = "0"; 
                  this.seven_digit = "0"; 
                  this.eight_digit = "0"; 
                  this.nine_digit = "0"; 
                  this.ten_digit = "0";

                  this.result = '';
                  this.timeCount = "0";
      }
   }
}
</script>
<style>
   
</style>