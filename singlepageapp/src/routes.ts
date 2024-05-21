import TopUp from "./pages/TopUp/TopUpPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Transfer from "./pages/Transfer/TransferPage";
import History from "./pages/History/HistoryPage";
import SubscriptionRequest from "./pages/SubRequest/SubscriptionRequestPage";
import ReportPage from "./pages/Report/ReportPage";
// import Landing from "./pages/Landing";

// TODO : Implementasi lazyloading

export const privateRoutes = [
  // {
  //   path: "/",
  //   element: Landing,
  // },  
  {
    path: "/",
    element: Home,
  },
];

export const publicRoutes = [
  {
    path: "/login",
    element: Login,
  },{
    path: "/register",
    element: Register,
  },{
    path: "/",
    element: Home,
  },{
    path: "/topup",
    element: TopUp,
  },{
    path: "/transfer",
    element: Transfer,
  },{
    path: "/history",
    element: History,
  },{
    path: "/sub",
    element: SubscriptionRequest,
  },{
    path: "/report",
    element: ReportPage,
  }
];
