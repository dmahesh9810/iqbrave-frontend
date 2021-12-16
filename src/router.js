import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
import FrogotPassword from "./components/auth/FrogotPassword.vue";
import ResetPassword from "./components/auth/ResetPassword.vue";
import Cashier from "./components/cashier/Cashier.vue";
import Returnurl from "./components/cashier/buy/PaymentSuccess.vue";
import RandomGame from "./components/games/RandomGame.vue";
import MatchNumberReal from "./components/games/random_games/match_number/real/MatchNumberReal.vue";
import SnakeLadderGameEnter from "./components/games/random_games/snake_ladder/real/SnakeLadderRealGameEnter.vue";
import RiseFallReal from "./components/games/random_games/rise_fall/real/RiseFallReal.vue";

import KnowledgeGame from "@/components/games/KnowledgeGame.vue";
import IctGame from "@/components/games/knowledge_game/ict/IctGame.vue";
import MathsGame from "@/components/games/knowledge_game/maths/MathsGame.vue";
import ScienceGame from "@/components/games/knowledge_game/science/ScienceGame.vue";

import UserQuiz from "@/components/user/UserQuiz.vue";

// import PaymentMethod from "./components/cashier/buy/PaymentMethod.vue";

// lazy-loaded
const Profile = () => import("./components/user/profile/Profile.vue")
const EmailVerify = () => import("./components/user/profile/EmailVerify.vue")
const BoardAdmin = () => import("./components/admin/DashBoard.vue")
// const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")
const PaymentMethod = () => import("./components/cashier/buy/PaymentMethod.vue")

let ResetPasswordPath = "/ResetPassword/:token";

var getLocation = function (href) {
  var l = document.createElement("a");
  l.href = href;
  return l;
};
var l = getLocation("http://localhost:8081/" + ResetPasswordPath);
console.debug(l.hostname)
console.debug(l.pathname)

const bb = l.pathname

const routes = [
  {
    scrollBehavior: function(to) {
      if (to.hash) {
        return {selector: to.hash}
      } else {
        return {x: 0, y: 0}
      }
    },
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: ResetPasswordPath,
    component: ResetPassword,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/frogotpassword",
    component: FrogotPassword,
  },
  {
    path: "/returnurl",
    name: "Returnurl",
    component: Returnurl,
  },
  {
    path: "/cashier",
    component: Cashier,
  },
  {
    path: "/randomgame",
    component: RandomGame,
  },
  {
    path: "/knowledgegame",
    component: KnowledgeGame,
  },
  {
    path: "/ictgame",
    component: IctGame,
  },
  {
    path: "/userquiz",
    component: UserQuiz,
  },
  {
    path: "/mathsgame",
    component: MathsGame,
  },
  {
    path: "/sciencegame",
    component: ScienceGame,
  },
  {
    path: "/match",
    component: MatchNumberReal,
  },
  {
    path: "/snakeladder",
    component: SnakeLadderGameEnter,
  },
  {
    path: "/risefall",
    component: RiseFallReal,
  },
  {
    path: "/paymentmethod",
    name: "PaymentMethod",
    component: PaymentMethod,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/email-verify",
    name: "email",
    // lazy-loaded
    component: EmailVerify,
  },
  
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = [bb, '/', '/login', '/register', '/home', '/frogotpassword',];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;