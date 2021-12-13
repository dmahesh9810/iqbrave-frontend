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
        <div class="invisible xl:visible lg:visible md:visible" v-if="!currentUser">
          <div
            class=" -mt-40
              flex-col flex
              ml-auto
              items-center
              lg:w-6/6
              md:w-3/6
            "
          >
            <h1 class="font-bold text-2xl text-white">Login</h1>
            <form action="" class="mt-2 flex flex-col lg:w-1/2 w-8/12">
              <div
                class="
                  flex flex-wrap
                  items-stretch
                  mb-4
                  relative
                  h-15
                  bg-white
                  items-center
                  rounded
                  mb-6
                  pr-10
                "
              >
                <div class="flex -mr-px justify-center w-15 p-4">
                  <span
                    class="
                      flex
                      items-center
                      leading-normal
                      bg-white
                      px-3
                      border-0
                      rounded rounded-r-none
                      text-2xl text-gray-600
                    "
                  >
                    <i class="fas fa-user-circle"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="
                    flex-shrink flex-grow flex-auto
                    leading-normal
                    w-px
                    flex-1
                    border-0
                    h-10
                    border-grey-light
                    rounded rounded-l-none
                    px-3
                    self-center
                    relative
                    font-roboto
                    text-xl
                    outline-none
                  "
                  placeholder="Username"
                />
              </div>
              <div
                class="
                  flex flex-wrap
                  items-stretch
                  w-full
                  relative
                  h-15
                  bg-white
                  items-center
                  rounded
                  mb-4
                "
              >
                <div class="flex -mr-px justify-center w-15 p-4">
                  <span
                    class="
                      flex
                      items-center
                      leading-normal
                      bg-white
                      rounded rounded-r-none
                      text-xl
                      px-3
                      whitespace-no-wrap
                      text-gray-600
                    "
                  >
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  class="
                    flex-shrink flex-grow flex-auto
                    leading-normal
                    w-px
                    flex-1
                    border-0
                    h-10
                    px-3
                    relative
                    self-center
                    font-roboto
                    text-xl
                    outline-none
                  "
                  placeholder="Password"
                />
                <div class="flex -mr-px">
                  <span
                    class="
                      flex
                      items-center
                      leading-normal
                      bg-white
                      rounded rounded-l-none
                      border-0
                      px-3
                      whitespace-no-wrap
                      text-gray-600
                    "
                  >
                  </span>
                </div>
              </div>
              <a
                href="#"
                class="
                  text-base text-white text-right
                  font-roboto
                  leading-normal
                  hover:underline
                  mb-6
                "
                >Forget Password ?</a
              >
              <a
                href="/"
                class="
                  bg-purple-600
                  hover:bg-purple-900 hover:text-white
                  py-4
                  text-center
                  px-17
                  md:px-12
                  md:py-4
                  text-white
                  rounded
                  leading-tight
                  text-xl
                  md:text-base
                  font-sans 
                  mb-20
                "
              >
                Login
              </a>
            </form>
          </div>
        </div>
        <div v-else>
          <h1 class="uppercase mt-20 mb-20
              flex-col flex
              text-white
              ml-auto
              items-center
              lg:w-6/6
              md:w-3/6
              text-6xl cursor-default">Welcome</h1>

        </div>
        <!-- Login end -->
        
      </div>
      <div class="curved-div">
  <svg viewBox="0 0 1440 319">
    <path fill="#1e3a8a" class="bg-blue-900" fill-opacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
</div>
    </section> 
  </div>
</template>

<script>
export default {
  
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    data() {
      return {
      }
    },
  },
  methods: {
    keydown: function(e) {
      console.log(e)
    }
  }
};
</script>

<style>
.parallax {
  
  background: url("../../assets/logo/carosal.jpg")
    repeat fixed 100%;
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
      