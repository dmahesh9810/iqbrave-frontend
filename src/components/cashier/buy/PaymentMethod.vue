<template>
  <div>
    <div v-if="paymentForm == false && coindata.dataShareOk == 'true'">
      <div
        class="
          min-w-screen min-h-screen
          bg-gray-200
          flex
          items-center
          justify-center
          px-5
          pb-10
          pt-16
        "
      >
        <div
          class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
          style="max-width: 600px"
        >
          <div class="w-full pt-1 pb-5">
            <div
              class="
                bg-indigo-500
                text-white
                overflow-hidden
                rounded-full
                w-20
                h-20
                -mt-16
                mx-auto
                shadow-lg
                flex
                justify-center
                items-center
              "
            >
              <i class="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div class="mb-10">
            <h1 class="text-center font-bold text-xl uppercase">
              Select payment Option
            </h1>
          </div>
          <div class="mb-3 flex -mx-2 justify-center">
            <button v-if="payHereBtn == true">
              <img
                @click="payHere()"
                v-bind:src="require('@/assets/payment/PayHereCard.png')"
                class="h-14 ml-3"
              />PayHere
            </button>
            <button v-if="payHereBtn == false">
              <img
                v-bind:src="require('@/assets/payment/PayHereCard.png')"
                class="h-14 ml-3"
              />
            </button>
            <button v-if="skrillBtn == true">
              <img
                @click="Skrill('skrill')"
                v-bind:src="require('@/assets/payment/Skrill-Logo.svg')"
                class="h-14 w-28 ml-6"
              />Skril
            </button>
            <button v-if="skrillBtn == false">
              <img
                v-bind:src="require('@/assets/payment/Skrill-Logo.svg')"
                class="h-14 w-28 ml-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="paymentForm == true">
      <!-- component -->

      <div
        class="
          min-w-screen min-h-screen
          bg-gray-200
          flex
          items-center
          justify-center
          px-5
          pb-10
          pt-16
        "
      >
        <div
          class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
          style="max-width: 600px"
        >
          <div class="w-full pt-1 pb-5">
            <div
              class="
                bg-indigo-500
                text-white
                overflow-hidden
                rounded-full
                w-20
                h-20
                -mt-16
                mx-auto
                shadow-lg
                flex
                justify-center
                items-center
              "
            >
              <i class="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div class="mb-8">
            <h1 class="text-center font-bold text-xl uppercase">
              Secure payment info
            </h1>
          </div>
          <form method="post" action="https://sandbox.payhere.lk/pay/checkout">
            <select hidden name="merchant_id" multiple>
              <option selected>{{ merchant_id }}</option>
            </select>
            <select hidden name="return_url" multiple>
              <option selected>{{ returnUrl }}</option>
            </select>
            <select hidden name="cancel_url" multiple>
              <option selected>{{ cancelUrl }}</option>
            </select>
            <select hidden name="notify_url" multiple>
              <option selected>{{ notifyUrl }}</option>
            </select>
            <br />

            <select hidden name="order_id" multiple>
              <option selected>{{ order_id }}</option>
            </select>

            <div>
              <select hidden name="currency" class="uppercase" multiple>
                <option selected >{{ payhere_currency }}</option>
              </select>
            </div>
            <br />
            <div>
              <!-- <select hidden name="hash" multiple>
                <option selected>{{ hash }}</option>
              </select> -->
              <!-- <input
              type="hidden"
              name="hash"
              v-model="hash"
              class=""
            />
            <br /> -->
            </div>
            <br />
            <div>
              <select hidden name="amount" multiple>
                <option selected>{{ payhere_amount }}</option>
              </select>
            </div>
            <!-- hidden -->

            <input
              type="hidden"
              name="items"
              v-model.lazy="coindata.packageName"
              class=""
            />
            <br />
            <div>
              <input
                type="hidden"
                name="first_name"
                v-model="user.firstname"
                class=""
              />
            </div>
            <br />
            <div>
              <input
                type="hidden"
                name="last_name"
                v-model.lazy="user.lastname"
                class=""
              />
            </div>
            <br />
            <div>
              <input
                type="hidden"
                name="email"
                v-model.lazy="user.email"
                class=""
              />
            </div>
            <br />
            <div>
              <input
                type="hidden"
                name="phone"
                v-model="user.mobile"
                class=""
              />
            </div>
            <br />
            <div>
              <input
                type="hidden"
                name="address"
                value="No.1, Galle Road"
                class=""
              />
            </div>
            <br />
            <div>
              <input type="hidden" name="city" value="Colombo" class="" />
            </div>
            <br />
            <div>
              <input
                v-once
                type="hidden"
                name="country"
                value="Sri Lanka"
                class=""
              />
            </div>
            <!-- hidden -->
            <div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <li
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none
                      focus:bg-white
                    "
                  >
                    {{ user.firstname }}
                  </li>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                  >
                    Last Name
                  </label>
                  <li
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none
                      focus:bg-white
                    "
                  >
                    {{ user.lastname }}
                  </li>
                </div>
              </div>
              <label
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700 text-xs
                  font-bold
                  mb-2
                "
              >
                E-mail
              </label>
              <li
                class="
                  appearance-none
                  block
                  w-full
                  bg-gray-200
                  text-gray-700
                  border
                  rounded
                  py-3
                  px-4
                  mb-3
                  leading-tight
                  focus:outline-none
                  focus:bg-white
                "
              >
                {{ user.email }}
              </li>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                  >
                    Country
                  </label>
                  <li
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none
                      focus:bg-white
                    "
                  >
                    Sri Lanka
                  </li>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                  >
                    City
                  </label>
                  <li
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none
                      focus:bg-white
                    "
                  >
                    Colombo
                  </li>
                </div>
              </div>
              <label
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700 text-xs
                  font-bold
                  mb-2
                "
              >
                Address
              </label>
              <li
                class="
                  appearance-none
                  block
                  w-full
                  bg-gray-200
                  text-gray-700
                  border
                  rounded
                  py-3
                  px-4
                  mb-3
                  leading-tight
                  focus:outline-none
                  focus:bg-white
                "
              >
                No.1, Galle Road
              </li>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                  >
                    Mobile Number
                  </label>
                  <li
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none
                      focus:bg-white
                    "
                  >
                    {{ user.mobile }}
                  </li>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                  >
                    Package
                  </label>
                  <li
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none
                      focus:bg-white
                    "
                  >
                    {{ coindata.packageName }}
                  </li>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                  >
                    Currency
                  </label>
                  <li
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none
                      focus:bg-white
                    "
                  >
                    {{ payhere_currency }}
                  </li>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                  >
                    Amount
                  </label>
                  <li
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none
                      focus:bg-white
                    "
                  >
                    {{ coindata.amount }}
                  </li>
                </div>
              </div>
              <button
                type="submit"
                value="Buy Now"
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
                "
              >
                Buy Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authHeader from "@/services/auth-header.js";
import axios from "axios";

export default {
  name: "PaymentMethod",
  data() {
    return {
      coindata: this.$route.params,
      returnUrl: "http://localhost:8081/returnurl",
      cancelUrl: "http://127.0.0.1:8000/",
      notifyUrl: "http://127.0.0.1:8000/api/checkout/success",
      payHereBtn: true,
      skrillBtn: true,
      paymentForm: false,

      
      user: "",
      submitBtn: true,
      sss: "",
      MerchantId: 1217561,
      formMerchantId: "",
      formMerchantIdCheck: true,
      formOrderId: "",
      formOrderIdCheck: true,
      formAmount: "",
      formAmountCheck: true,
      FormPayhereCurrency: "",
      FormPayhereCurrencyCheck: true,

      
      hash: "",
      order_id: "",
      merchant_id: "",
      payhere_amount: "",
      payhere_currency: "",
    };
  },
  methods: {
    buyNow() {
      this.submitBtn = false;
    },
    payHere() {
      this.user = this.$store.state.auth.user;
      this.payHereBtn = false;
      this.skrillBtn = false;
      if (this.coindata.dataShareOk == "true") {
        axios
          .post(
            "http://127.0.0.1:8000/api/checkout/save/" + this.coindata.coinId,
            {
              saveCoinId: this.coindata.coinId,
              saveCoinPrice: this.coindata.amount,
              saveCurrency: this.coindata.currency,
            },
            { headers: authHeader() }
          )
          .then(
            (response) => {
              this.merchant_id = response.data.merchant_id;
              this.order_id = response.data.order_id;
              this.payhere_amount = response.data.payhere_amount;
              this.payhere_currency = response.data.payhere_currency;
              this.hash = response.data.hash;
              this.paymentForm = true;
            },
            (error) => {
              (this.payHereBtn = true),
                (this.skrillBtn = true),
                (this.content =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString());
              console.log(error);
            }
          );
      }
    },
  },
};
</script>

<style>
/*
module.exports = {
    plugins: [require('@tailwindcss/forms'),]
};
*/
.form-radio {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-shrink: 0;
  border-radius: 100%;
  border-width: 2px;
}

.form-radio:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media not print {
  .form-radio::-ms-check {
    border-width: 1px;
    color: transparent;
    background: inherit;
    border-color: inherit;
    border-radius: inherit;
  }
}

.form-radio:focus {
  outline: none;
}

.form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e");
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  background-repeat: no-repeat;
  padding-top: 0.5rem;
  padding-right: 2.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
}

.form-select::-ms-expand {
  color: #a0aec0;
  border: none;
}

@media not print {
  .form-select::-ms-expand {
    display: none;
  }
}

@media print and (-ms-high-contrast: active),
  print and (-ms-high-contrast: none) {
  .form-select {
    padding-right: 0.75rem;
  }
}
</style>