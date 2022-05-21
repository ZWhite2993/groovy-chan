import homePage from "./views/HomePage"
import mainPage from "./views/MainPage"
import failurePage from "./views/FailurePage"
import randomBoard from "./views/RandomBoard"
import randomPosts from "./views/RandomPosts/RandomPosts.vue"
import userPage from "./views/UserPage"
import replyThread from "./views/ReplyThread"

export default [
  {
    path: "/",
    component: homePage
  },
  {
    path: "/main",
    component: mainPage
  },
  {
    path: "/failure",
    component: failurePage
  },
  {
    path: "/random",
    component: randomBoard
  },
  {
    path: "/userpage",
    component: userPage
  },
  {
    path: "/randomposts",
    component: randomPosts
  },
  {
    path: "/posts/:id",
    component: replyThread
  }
] 