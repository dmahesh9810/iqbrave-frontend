<template>
  <div>
    <div class="margin"></div>
    <section class="parallax">
      <div class="parallax-inner">
        <!-- Login -->
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />
        <div
          class="
            invisible
            xl:visible
            lg:visible
            md:visible
            flex
            justify-end
            mr-32
            -mt-40
          "
          v-if="!currentUser"
        >
          <Form class="" @submit="handleLogin" :validation-schema="schema">
            <div class="form-group">
              <Field
                name="email"
                type="email"
                class="
                  w-72
                  container
                  max-w-sm
                  mx-auto
                  px-2
                  focus:border-blue-700
                  rounded
                  border-2
                  outline-none
                  h-12
                " 
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <Field
                :type="type"
                name="password"
                class="
                w-72
                  container
                  max-w-sm
                  mx-auto
                  px-2
                  mt-5
                  focus:border-blue-700
                  rounded
                  border-2
                  outline-none
                  h-12
                "
                autocomplete="off"
                placeholder="Password"
              /> 
            </div>
            <div class="container max-w-sm">
              <input @click="showPassword()" type="checkbox" class="mt-3" />
              <span class="text-white">Show password</span>
            </div>
            <div v-if="message" class="alert alert-danger" role="alert">
              <h1 class="text-red-500">{{ message }}</h1>
            </div>
            <div class="form-group">
              <button
                style="transition: all 0.45s ease 0s"
                class="
                  btn btn-primary btn-block
                  border-2 border-blue-600
                  hover:bg-blue-600
                  text-blue-600
                  hover:text-white
                  font-bold
                  p-2
                  rounded
                  container
                  max-w-sm
                  mx-auto
                  px-2
                  mt-5
                "
                :disabled="loading"
              >
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span>Login</span>
              </button>
            </div>
            <div class="flex-col flex items-center">
              <router-link
                to="/frogotpassword"
                class="
                  hover:text-gray-500
                  dark:hover:text-gray-200
                  mx-1.5
                  sm:mx-6
                  mt-5
                  text-white
                "
              >
                Reset Password
              </router-link>
            </div>
            <div class="form-group"></div>
          </Form>
        </div>
        <div v-else>
          <h1
            class="
              uppercase
              mt-20
              mb-20
              flex-col flex
              text-white
              ml-auto
              items-center
              lg:w-6/6
              md:w-3/6
              text-6xl
              cursor-default
            "
          >
            Welcome
          </h1>
        </div>
        <!-- Login end -->
      </div>
      <div class="curved-div">
        <svg viewBox="0 0 1440 319">
          <path
            fill="#1e3a8a"
            class="bg-blue-900"
            fill-opacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  </div>
</template>

<script>
import { Form, Field} from "vee-validate";
import * as yup from "yup";
export default {
  components: {
    Form,
    Field,
    // ErrorMessage,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    
  },
  data() {
      const schema = yup.object().shape({
        email: yup.string().required("Email is required!"),
        password: yup.string().required("Email is required!"),
      });
      return {
        loading: false,
        message: "",
        schema,
        type: "password",
      };
    },
  methods: {
    keydown: function (e) {
      console.log(e);
    },
    showPassword() {
      if (this.type == "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style>
.parallax {
  background: url("../../assets/logo/carosal.jpg") repeat fixed 100%;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.parallax-inner {
  padding-top: 25%;
  padding-bottom: 1%;
}
/* login */
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.error-feedback {
  color: red;
}
/* login */
</style>
      