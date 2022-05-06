import homePage from "./components/HomePage"
import mainPage from "./components/MainPage"
import failurePage from "./components/FailurePage"
import randomBoard from "./components/RandomBoard"

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
  }
] 