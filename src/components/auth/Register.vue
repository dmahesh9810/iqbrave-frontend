<template>
  <div class="col-md-12">
    <div class="flex justify-center items-center bg-gray-100 h-full">
      <div
        class="
          container
          max-w-sm
          mx-auto
          flex-1 flex flex-col
          items-center
          justify-center
          px-2
          mt-20
          mb-20
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
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <h1 class="error-feedback">{{ message }}</h1>
          <Form @submit="handleRegister" :validation-schema="schema">
            <div v-if="!successful">
              <div class="form-group">
                <Field
                  name="firstname"
                  type="text"
                  placeholder="First Name"
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
                />
                <ErrorMessage name="firstname" class="error-feedback" />
                <h1 v-if="fnameErrors == true" class="error-feedback">
                  {{ fnameMessage }}
                </h1>
              </div>
              <div class="form-group">
                <Field
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
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
                />
                <ErrorMessage name="lastname" class="error-feedback" />
                <h1 v-if="lnameErrors == true" class="error-feedback">
                  {{ lnameMessage }}
                </h1>
              </div>
              <div class="form-group">
                <Field
                  name="email"
                  type="email"
                  placeholder="E-mali"
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
                />
                <ErrorMessage name="email" class="error-feedback" />
                <h1 v-if="emailErrors == true" class="error-feedback">
                  {{ emailMessage }}
                </h1>
              </div>
              <div class="form-group">
                <Field
                  name="mobile"
                  type="text"
                  placeholder="Mobile"
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
                />
                <ErrorMessage name="mobile" class="error-feedback" />
                <h1 v-if="mobileErrors == true" class="error-feedback">
                  {{ mobileMessage }}
                </h1>
              </div>
              <div class="form-group">
                <Field
                  name="country"
                  type="text"
                  placeholder="Country"
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
                />
                <ErrorMessage name="country" class="error-feedback" />
                <h1 v-if="countryErrors == true" class="error-feedback">
                  {{ countryMessage }}
                </h1>
              </div>
              <div class="form-group">
                <Field
                  name="city"
                  type="text"
                  placeholder="city"
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
                />
                <ErrorMessage name="city" class="error-feedback" />
                <h1 v-if="cityErrors == true" class="error-feedback">
                  {{ cityMessage }}
                </h1>
              </div>
              <div class="form-group">
                <Field
                  name="password"
                  :type="type"
                  placeholder="password"
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
                />
                <ErrorMessage name="password" class="error-feedback" />
              </div>
              <div class="form-group">
                <Field
                  name="confirmpassword"
                  :type="type"
                  placeholder="Confirm Password"
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
                />
                <ErrorMessage name="confirmpassword" class="error-feedback" />
                <h1 v-if="passwordErrors == true" class="error-feedback">
                  {{ passwordMessage }}
                </h1>
              </div>
              <div class="form-group">
                <input @click="showPassword()" type="checkbox" class="mt-3"> <span>Show password</span>
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
                    flex-1 flex flex-col
                    items-center
                    justify-center
                    px-2
                    mt-5
                  "
                  :disabled="loading"
                >
                  <span
                    v-show="loading"
                    class="spinner-border spinner-border-sm"
                  ></span>
                  Sign Up
                </button>
              </div>
            </div>
          </Form>
        </div>

        <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Register",

  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const schema = yup.object().shape({
      firstname: yup
        .string()
        .required("Firstname is required!")
        .min(3, "Must be at least 3 characters!")
        .max(40, "Must be maximum 40 characters!"),
      lastname: yup
        .string()
        .required("Lastname is required!")
        .min(3, "Must be at least 3 characters!")
        .max(40, "Must be maximum 40 characters!"),

      country: yup
        .string()
        .required("Country is required!")
        .min(3, "Must be at least 3 characters!")
        .max(40, "Must be maximum 40 characters!"),
      city: yup
        .string()
        .required("City is required!")
        .min(3, "Must be at least 3 characters!")
        .max(40, "Must be maximum 40 characters!"),

      mobile: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("mobile is required!")
        .min(5, "Phone number is not valid")
        .max(15, "Phone number is not valid"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(16, "Must be maximum 16 characters!"),
      confirmpassword: yup
        .string()
        .required("Confirm Password is required!")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    });

    return {
      dd: "",
      type: 'password',
      successful: false,
      loading: false,

      fnameErrors: false,
      lnameErrors: false,
      emailErrors: false,
      passwordErrors: false,
      mobileErrors: false,
      countryErrors: false,
      cityErrors: false,

      message: "",
      fnameMessage: "",
      lnameMessage: "",
      emailMessage: "",
      passwordMessage: "",
      mobileMessage: "",
      countryMessage: "",
      cityMessage: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    showPassword(){
      if(this.type == 'password'){
        this.type = 'text';
      }else{
        this.type = 'password';
      }
    },
    handleRegister(user) {
      this.message = "";
      this.fnameMessage = "";
      this.lnameMessage = "";
      this.emailMessage = "";
      this.passwordMessage = "";
      this.mobileMessage = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
          this.$router.push("/login");
        },
        (error) => {
          this.fnameErrors = false;
          this.lnameErrors = false;
          this.countryErrors = false;
          this.cityErrors = false;
          this.emailErrors = false;
          this.passwordErrors = false;
          this.mobileErrors = false;
          this.loading = false;

          if (
            error.response.data.errors.confirmpassword ||
            error.response.data.errors.email ||
            error.response.data.errors.mobile ||
            error.response.data.errors.firstname ||
            error.response.data.errors.lastname ||
            error.response.data.errors.country ||
            error.response.data.errors.city
          ) {
            if (error.response.data.errors.firstname) {
              this.fnameMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.errors.firstname[0]) ||
                error.firstname[0] ||
                error.toString();
              this.successful = false;
              this.loading = false;
              this.fnameErrors = true;
            }
            if (error.response.data.errors.lastname) {
              this.lnameMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.errors.lastname[0]) ||
                error.lastname[0] ||
                error.toString();
              this.successful = false;
              this.loading = false;
              this.lnameErrors = true;
            }
            if (error.response.data.errors.confirmpassword) {
              this.passwordMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.errors.confirmpassword[0]) ||
                error.confirmpassword[0] ||
                error.toString();
              this.successful = false;
              this.loading = false;
              this.passwordErrors = true;
            }
            if (error.response.data.errors.email) {
              this.emailMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.errors.email[0]) ||
                error.email[0] ||
                error.toString();
              this.successful = false;
              this.loading = false;
              this.emailErrors = true;
            }
            if (error.response.data.errors.mobile) {
              this.mobileMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.errors.mobile[0]) ||
                error.mobile[0] ||
                error.toString();
              this.successful = false;
              this.loading = false;
              this.mobileErrors = true;
            }

            if (error.response.data.errors.country) {
              this.countryMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.errors.country[0]) ||
                error.country[0] ||
                error.toString();
              this.successful = false;
              this.loading = false;
              this.countryErrors = true;
            }
            if (error.response.data.errors.city) {
              this.cityMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.errors.city[0]) ||
                error.city[0] ||
                error.toString();
              this.successful = false;
              this.loading = false;
              this.cityErrors = true;
            }
          } else {
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            this.successful = false;
            this.loading = false;
            this.mobileErrors = true;
          }
          this.successful = false;
          this.loading = false;
          this.mobileErrors = true;
        }
      );
    },
  },
};
</script>

<style scoped>
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
</style>
