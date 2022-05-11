import homePage from "./components/HomePage"
import mainPage from "./components/MainPage"
import failurePage from "./components/FailurePage"
import randomBoard from "./components/RandomBoard"
import randomPosts from "./components/RandomPosts"
import userPage from "./components/UserPage"
import replyThread from "./components/ReplyThread"

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