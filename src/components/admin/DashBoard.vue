<template>
  <div v-if="showAdminBoard || showModeratorBoard || !currentUser">
    <div class="grid  rounded">
      <div class="  ">
        <div class="bg-blue-500  rounded h-screen">
          <div>
            <button
              @click="Dashboard()"
              class="
                w-full 
                bg-blue-500
                hover:bg-blue-400
                text-white
                font-bold
                py-2
                px-4
                border-b-4 border-blue-700
                hover:border-blue-500
                rounded
              "
            >
              Dashboard
            </button>
          </div>
          <div>
            <button
              v-if="showAdminBoard"
              @click="Admin()"
              class="
                w-full
                h-12
                bg-blue-500
                hover:bg-blue-400
                text-white
                font-bold
                py-2
                px-4
                border-b-4 border-blue-700
                hover:border-blue-500
                rounded
              "
            >
              Admin
            </button>
          </div>
          <div>
            <button
              @click="Mod()"
              class="
                w-full
                h-12
                bg-blue-500
                hover:bg-blue-400
                text-white
                font-bold
                py-2
                px-4
                border-b-4 border-blue-700
                hover:border-blue-500
                rounded
              "
            >
              Modrator
            </button>
          </div>
          <div v-if="moderatorItem == true">
            <div class="text-right">
              <button
                @click="AddQuiz()"
                class="
                  w-full
                  text-right
                  bg-blue-600
                  hover:bg-blue-400
                  text-white
                  font-bold
                  py-2
                  px-4
                  border-b-4
                  rounded
                "
              >
                Add Quiz
              </button>
            </div>
            <div class="text-right">
              <button
                @click="AllQuiz()"
                class="
                  w-full
                  text-right
                  bg-blue-600
                  hover:bg-blue-400
                  text-white
                  font-bold
                  py-2
                  px-4
                  border-b-4
                  rounded
                "
              >
                All Quiz
              </button>
            </div>
          </div>

          <div>
            <button
              @click="User()"
              class="
                w-full
                h-12
                bg-blue-500
                hover:bg-blue-400
                text-white
                font-bold
                py-2
                px-4
                border-b-4 border-blue-700
                hover:border-blue-500
                rounded
              "
            >
              User
            </button>
          </div>
        </div>
      </div>
      <div class="col-start-2 col-span-4 ">
        <div v-if="mainContent == true">
          <MainBoard v-if="mainContent == true" />
        </div>

        <!-- main content -->
        <div class="" v-if="userContent == true">
          <UserBoard />
        </div>
        <div class="" v-if="ModratorContent == true">
          <ModratorContent />
        </div>
        <div class="" v-if="AdminContent == true">
          <AdminContent />
        </div>
        <div class="" v-if="AddQuizContent == true">
          <AddQuiz />
        </div>
        <div class="" v-if="AllQuizContent == true">
          <AllQuiz />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import authHeader from "@/services/auth-header.js";
import axios from "axios";
import UserBoard from "@/components/admin/user_content/UserContent.vue";
import MainBoard from "@/components/admin/main_content/MainContent.vue";
import ModratorContent from "@/components/admin/modrator_content/ModratorContent.vue";
import AdminContent from "@/components/admin/admin_content/AdminContent.vue";
import AddQuiz from "@/components/admin/content/AddQuiz.vue";
import AllQuiz from "@/components/admin/content/AllQuiz.vue";

export default {
  components: {
    MainBoard,
    UserBoard,
    ModratorContent,
    AdminContent,
    AddQuiz,
    AllQuiz,
  },
  data() {
    return {
      mainContent: true,
      userContent: false,
      ModratorContent: false,
      AdminContent: false,
      moderatorItem: false,
      AddQuizContent: false,
      AllQuizContent: false,
    };
  },
  methods: {
    AllQuiz() {
      this.mainContent = false;
        this.userContent = false;
        this.AdminContent = false;
        this.ModratorContent = false;
        this.AddQuizContent = false;
        this.AllQuizContent = true;
    },
    User() {
      this.mainContent = false;
      this.ModratorContent = false;
      this.userContent = true;
      this.AdminContent = false;
      this.AddQuizContent = false;
       this.AllQuizContent = false;
    },
    Dashboard() {
      this.mainContent = true;
      this.userContent = false;
      this.ModratorContent = false;
      this.AdminContent = false;
      this.AddQuizContent = false;
      this.AllQuizContent = false;
    },
    Mod() {
      if (this.moderatorItem == true) {
        this.mainContent = false;
        this.userContent = false;
        this.AdminContent = false;
        this.ModratorContent = true;
        this.moderatorItem = false;
        this.AddQuizContent = false;
        this.AllQuizContent = false;
      } else {
        this.mainContent = false;
        this.userContent = false;
        this.AdminContent = false;
        this.ModratorContent = true;
        this.moderatorItem = true;
        this.AllQuizContent = false;
      }
    },
    Admin() {
      this.mainContent = false;
      this.userContent = false;
      this.ModratorContent = false;
      this.AdminContent = true;
      this.AddQuizContent = false;
      this.AllQuizContent = false;
    },
    AddQuiz() {
      this.mainContent = false;
      this.userContent = false;
      this.AdminContent = false;
      this.ModratorContent = false;
      this.AddQuizContent = true;
      this.AllQuizContent = false;
      this.AllQuizContent = false;
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/home");
      axios
        .post(
          "https://backend-re5zx.ondigitalocean.app/api/userlogout/",
          { balance: this.balance - this.enterValue },
          { headers: authHeader() }
        )
        .then((response) => {
          if (response.data.status == 200) {
            this.$store.dispatch("auth/logout");
            this.$router.push("/home");
          }
        });
    },
  },

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_ADMIN");
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_MODERATOR");
      }

      return false;
    },
  },
  mounted() {
    if (this.currentUser && !this.showAdminBoard && !this.showModeratorBoard) {
      this.$router.push("/");
    }
  },
};
</script>
<style></style>
