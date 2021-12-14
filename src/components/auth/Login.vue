<template>
<div class=" h-screen bg-gray-100">

  <div class="col-md-12  mb-48">
    <div class="flex justify-center items-center h-full">
      <!-- component -->
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
          <div class="">
            <img
              id="profile-img"
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              class="profile-img-card"
            />
            <Form class="" @submit="handleLogin" :validation-schema="schema">
              <div class="form-group">
                <Field
                  name="email"
                  type="email"
                  class="
                    container
                    max-w-sm
                    mx-auto
                    flex-1 flex flex-col
                    items-center
                    justify-center
                    px-2
                    focus:border-purple-700
                    rounded
                    border-2
                    outline-none
                    h-12
                  "
                  autocomplete="off"
                  placeholder="Email"
                />
                <ErrorMessage name="email" class="error-feedback" />
              </div>
              <div class="form-group">
                <Field
                  name="password"
                  :type="type"
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
                  autocomplete="off"
                  placeholder="Password"
                /> <input @click="showPassword()" type="checkbox" class="mt-3"> <span>Show password</span>
                <ErrorMessage name="password" class="error-feedback" />
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
                  <span>Login</span>
                </button>
              </div>
              <div class="flex justify-center">
                <router-link
                  to="/frogotpassword"
                  class="
                    hover:text-gray-500
                    dark:hover:text-gray-200
                    mx-1.5
                    sm:mx-6
                    mt-10
                  "
                >
                  Reset Password
                </router-link>
              </div>
              <div class="form-group"></div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
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
      type: 'password',
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    showPassword(){
      if(this.type == 'password'){
        this.type = 'password';
      }else{
        this.type = 'password';
      }
    },
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/");
        },
        (error) => {
          this.$router.push("/login");
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
