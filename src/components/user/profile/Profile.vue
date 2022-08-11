<template>
  <div>
    <div class="items-center justify-center bg-white">
      <div class="lg:p-16 2xl:p-16 xl:p-16 md:p-16">
        <!-- first name -->
        <div>
          <div>
              <h1 class="text-green-500" v-if="successMassage !== ''">{{successMassage}}</h1>
              <h1 class="text-red-500" v-if="errorMassage !== ''">{{errorMassage}}</h1>
            <div
              class=" 
                rounded-lg
                p-6 
                shadow-lg 
              "
            >
              <div v-if="firstNameEdit === false">
                <div class="flex items-center  ">
                  <h3 class="text-gray-900 text-sm font-semibold">
                    First Name
                  </h3>
                </div>
                <p class="text-gray-500 text-sm ">{{Fname}}</p>
                <div class="">
                  <button
                    @click="firstNameEditBtn()"
                    class="
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
                      w-full mt-4
                    "
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div v-if="firstNameEdit === true">
                <div class="flex items-center space-x-3 ">
                  <h3 class="text-gray-900 text-sm font-semibold">
                    First Name
                  </h3>
                </div>
                <div>
                  <input
                    v-model="Fname"
                    type="text"
                    placeholder="First name"
                    class="
                      mt-2
                      px-3
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600
                      
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
                <button
                  @click="Update(Fname, 'firstname')"
                  class="
                    mt-5
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
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- first name -->
        <!-- Last name -->
        <div>
          <div>
            <div
              class=" 
                rounded-lg
                p-6 
                shadow-lg 
              "
            >
              <div v-if="LastNameEdit === false">
                <div class="flex items-center space-x-3 ">
                  <h3 class="text-gray-900 text-sm font-semibold">Last Name</h3>
                </div>
                <p class="text-gray-500 text-sm ">{{Lname}}</p>
                <div class="">
                  <button
                    @click="LastNameEditBtn()"
                    class="
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
                      w-full mt-4
                    "
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div v-if="LastNameEdit === true">
                <div class="flex items-center space-x-3 ">
                  <h3 class="text-gray-900 text-sm font-semibold">Last Name</h3>
                </div>
                <div>
                  <input
                    v-model="Lname"
                    type="text"
                    placeholder="Last name"
                    class="
                      mt-2
                      px-3
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600
                      
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
                <button
                  @click="Update(Lname, 'lastname')"
                  class="
                    mt-5
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
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- last name -->
        <!-- Email name -->
        <div>
          <div>
            <div
              class="
                rounded-lg
                p-6
                ring-gray-900/5
                shadow-lg 
              "
            >
              <div v-if="EmailEdit === false">
                <div class="flex items-center space-x-3 ">
                  <h3 class="text-gray-900 text-sm font-semibold">E-mail</h3>
                </div>
                <p class="text-gray-500 text-sm ">
                  {{Email}}
                </p>
                <div class="">
                  <button
                    @click="EmailEditBtn()"
                    class="
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
                      w-full mt-4
                    "
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div v-if="EmailEdit === true">
                <div class="flex items-center space-x-3 ">
                  <h3 class="text-gray-900 text-sm font-semibold">Email</h3>
                </div>
                <div>
                  <input
                    v-model="Email"
                    type="text"
                    placeholder="Email"
                    class="
                      mt-2
                      px-3
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600
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
                <button
                  @click="Update(Email, 'email')"
                  class="
                    mt-5
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
                  Update
                </button>
                <button v-if="verifyBtn === false && sendMail === false && verifyMail === false"
                  @click="Verify()"
                  class="
                  ml-3
                    mt-5
                    bg-transparent
                    hover:bg-green-500
                    text-green-700
                    font-semibold
                    hover:text-white
                    py-2
                    px-4
                    border border-green-500
                    hover:border-transparent
                    rounded
                  "
                >
                  Verify now
                </button>
                <button v-if="verifyBtn === true && sendMail === false"
                  class="
                  ml-3
                    mt-5
                    bg-transparent
                    text-gray-700
                    font-semibold
                    py-2
                    px-4
                    border border-gray-500
                    rounded
                  "
                >
                  Verify now
                </button><span class="text-green-500 ml-3" v-if="sendMail === true || verifyMessage !== ''">{{verifyMessage}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Email name -->
        <!-- Coutry -->
        <div>
          <div>
            <div
              class="
                rounded-lg
                p-6
                shadow-lg
              "
            >
              <div v-if="CountryEdit === false">
                <div class="flex items-center space-x-3 ">
                  <h3 class="text-gray-900 text-sm font-semibold">Country</h3>
                </div>
                <p class="text-gray-500 text-sm ">{{Country}}</p>
                <div class="">
                  <button
                    @click="CountryEditBtn()"
                    class="
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
                      w-full mt-4
                    "
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div v-if="CountryEdit === true">
                <div class="flex items-center space-x-3 ">
                  <h3 class="text-gray-900 text-sm font-semibold">Country</h3>
                </div>
                <div>
                  <input
                    v-model="Country"
                    type="text"
                    placeholder="Country"
                    class="
                      mt-2
                      px-3
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600
                      
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
                <button
                  @click="Update(Country, 'country')"
                  class="
                    mt-5
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
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Coutry -->
        <!-- City -->
        <div>
          <div>
            <div
              class=" 
                rounded-lg
                p-6 
                shadow-lg 
              "
            >
              <div v-if="CityEdit === false">
                <div class="flex items-center space-x-3  ">
                  <h3 class="text-gray-900 text-sm font-semibold">City</h3>
                </div>
                <p class="text-gray-500 text-sm  ">{{City}}</p>
                <div class=" ">
                  <button
                    @click="CityEditBtn()"
                    class="
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
                      w-full mt-4
                    "
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div v-if="CityEdit === true">
                <div class="flex items-center space-x-3  ">
                  <h3 class="text-gray-900 text-sm font-semibold">City</h3>
                </div>
                <div>
                  <input
                    v-model="City"
                    type="text"
                    placeholder="City"
                    class="
                      mt-2
                      px-3
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600
                       
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
                <button
                  @click="Update(City, 'city')"
                  class="
                    mt-5
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
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- City -->
        <!-- Mobile -->
        <div>
          <div>
            <div
              class=" 
                rounded-lg
                p-6 
                shadow-lg 
              "
            >
              <div v-if="MobileEdit === false">
                <div class="flex items-center space-x-3  ">
                  <h3 class="text-gray-900 text-sm font-semibold">Mobile</h3>
                </div>
                <p class="text-gray-500 text-sm  ">{{Mobile}}</p>
                <div class=" ">
                  <button
                    @click="MobileEditBtn()"
                    class="
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
                      w-full mt-4
                    "
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div v-if="MobileEdit === true">
                <div class="flex items-center space-x-3  ">
                  <h3 class="text-gray-900 text-sm font-semibold">Mobile</h3>
                </div>
                <div>
                  <input
                    v-model="Mobile"
                    type="text"
                    placeholder="Mobile"
                    class="
                      mt-2
                      px-3
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600 
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
                <button
                  @click="Update(Mobile, 'mobile')"
                  class="
                    mt-5
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
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Mobile -->
        <div>
         
        </div>
        <!-- Mobile -->
      </div>
    </div>
  </div>
</template>

<script>
import authHeader from "@/services/auth-header.js";
import axios from "axios";
import UserService from "@/services/user.service";

export default {
  data() {
    return {
      firstNameEdit: false,
      LastNameEdit: false,
      EmailEdit: false,
      CountryEdit: false,
      CityEdit: false,
      MobileEdit: false,

      Mobile: "",
      City: "",
      Country: "",
      Email: "",
      Lname: "",
      Fname: "",

      errorMassage: "",
      successMassage: "",
      verifyMessage: "",

      verifyMail: null,
      sendMail: false,
      verifyBtn: false,

    };
  },
  methods: {
      Verify(){
this.verifyBtn = true
      axios
          .post(
            "http://127.0.0.1:8000/api/email/verification-notification",
            {
              data: "data"
            },
            { headers: authHeader() }
          )
          .then((response) => {
            if (response.data.status == 200) {
              this.verifyMessage = response.data.message;
              this.verifyMail = true;
            } else {
              this.verifyMessage = response.data.message;
              console.log(response);
            }
          },
      () => {
        console.log("Somthing else")
      }
    );  
      },
    Update(value, row) {
        this.successMassage = "";
        this.errorMassage = "";
      if (row === "firstname") {
        axios
          .post(
            "http://127.0.0.1:8000/api/profile-update",
            {
              firstname: value,
            },
            { headers: authHeader() }
          )
          .then((response) => {
            if (response.data.status == 200) {
              this.successMassage = response.data.massage;
              this.firstNameEdit = false;
              console.log(response);
            } else {
              this.errorMassage = "Invalid data";
              console.log(response);
            }
          },
      () => {
        this.errorMassage = "Invalid data";
      }
    );
      } else if (row === "lastname") {
        axios
          .post(
            "http://127.0.0.1:8000/api/profile-update",
            {
              lastname: value,
            },
            { headers: authHeader() }
          )
          .then((response) => {
            if (response.data.status == 200) {
              this.successMassage = response.data.massage;
              this.LastNameEdit = false;
              console.log(response);
            } else {
              this.errorMassage = "Invalid data";
              console.log(response);
            }
          },
      () => {
        this.errorMassage = "Invalid data";
      });
      }
      else if (row === "email") {
        axios
          .post(
            "http://127.0.0.1:8000/api/profile-update",
            {
              email: value,
            },
            { headers: authHeader() }
          )
          .then((response) => {
            if (response.data.status == 200) {
              this.successMassage = response.data.massage;
              this.EmailEdit = false;
              console.log(response);
            } else {
              this.errorMassage = "Invalid data";
              console.log(response);
            }
          },
      () => {
        this.errorMassage = "Invalid data";
      });
      }
      else if (row === "country") {
        axios
          .post(
            "http://127.0.0.1:8000/api/profile-update",
            {
              country: value,
            },
            { headers: authHeader() }
          )
          .then((response) => {
            if (response.data.status == 200) {
              this.successMassage = response.data.massage;
              this.CountryEdit = false;
              console.log(response);
            } else {
              this.errorMassage = "Invalid data";
              console.log(response);
            }
          },
      () => {
        this.errorMassage = "Invalid data";
      });
      }
      else if (row === "city") {
        axios
          .post(
            "http://127.0.0.1:8000/api/profile-update",
            {
              city: value,
            },
            { headers: authHeader() }
          )
          .then((response) => {
            if (response.data.status == 200) {
              this.successMassage = response.data.massage;
              this.CityEdit = false;
              console.log(response);
            } else {
              this.errorMassage = "Invalid data";
              console.log(response);
            }
          },
      () => {
        this.errorMassage = "Invalid data";
      });
      }
      else if (row === "mobile") {
        axios
          .post(
            "http://127.0.0.1:8000/api/profile-update",
            {
              mobile: value,
            },
            { headers: authHeader() }
          )
          .then((response) => {
            if (response.data.status == 200) {
              this.successMassage = response.data.massage;
              this.MobileEdit = false;
              console.log(response);
            } else {
              this.errorMassage = "Invalid data";
              console.log(response);
            }
          },
      () => {
        this.errorMassage = "Invalid data";
      });
      }
    },
    // first name
    firstNameEditBtn() {

      this.verifyMessage = "";
      this.firstNameEdit = true;
      this.MobileEdit = false;
      this.CityEdit = false;
      this.CountryEdit = false;
      this.EmailEdit = false;
      this.LastNameEdit = false;
      this.successMassage = "";
        this.errorMassage = "";
    },
    // first name
    // Last name
    LastNameEditBtn() {
      this.verifyMessage = "";
      this.LastNameEdit = true;
      this.firstNameEdit = false;
      this.MobileEdit = false;
      this.CityEdit = false;
      this.CountryEdit = false;
      this.EmailEdit = false;
      this.successMassage = "";
        this.errorMassage = "";
    },
    // Last name
    // Email
    EmailEditBtn() {
      this.verifyMessage = "";
      this.EmailEdit = true;
      this.firstNameEdit = false;
      this.MobileEdit = false;
      this.CityEdit = false;
      this.CountryEdit = false;
      this.LastNameEdit = false;
      this.successMassage = "";
        this.errorMassage = "";
        // asd
        axios
          .get(
            "http://127.0.0.1:8000/api/email/verification-notification-check",
            { headers: authHeader() }
          )
          .then((response) => {
            if (response.data.status == 200) {
              this.verifyMessage = response.data.message;
              this.verifyMail = true;
            } else {
              this.verifyMessage = response.data.message;
              console.log(response);
            }
          },
      () => {
        this.sendMail = false;
        this.verifyBtn = false;
        this.verifyMail = false;
      }
    );
        // asd
    },
    // Last
    // Country
    CountryEditBtn() {
      this.verifyMessage = "";
      this.CountryEdit = true;
      this.firstNameEdit = false;
      this.MobileEdit = false;
      this.EmailEdit = false;
      this.LastNameEdit = false;
      this.successMassage = "";
        this.errorMassage = "";
    },
    // Country
    // City
    CityEditBtn() {
      this.verifyMessage = "";
      this.CityEdit = true;
      this.firstNameEdit = false;
      this.MobileEdit = false;
      this.CountryEdit = false;
      this.EmailEdit = false;
      this.LastNameEdit = false;
      this.successMassage = "";
        this.errorMassage = "";
    },
    // City
    // City
    MobileEditBtn() {
      this.verifyMessage = "";
      this.MobileEdit = true;
      this.firstNameEdit = false;
      this.CityEdit = false;
      this.CountryEdit = false;
      this.EmailEdit = false;
      this.LastNameEdit = false;
      this.successMassage = "";
        this.errorMassage = "";
    },
    // Mobile
  },
  mounted() {
    UserService.getUserBoard().then(
      (response) => {
        this.Fname = response.data.user.firstname;
        this.Lname = response.data.user.lastname;
        this.Mobile = response.data.user.mobile;
        this.City = response.data.user.city;
        this.Country = response.data.user.country;
        this.Email = response.data.user.email;
        console.log(response)
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>

<style lang="scss" scoped>
</style>