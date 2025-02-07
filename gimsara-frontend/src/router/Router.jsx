import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menuPage/Menu";
import Signup from "../components/Signup";
import Order from "../pages/dashboard/Order";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UserProfile from "../pages/dashboard/UserProfile";
import CartPage from "../pages/menuPage/CartPage";
import Login from "../components/Login";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu";
import Payment from "../pages/menuPage/Payment";
import ManageBookings from "../pages/dashboard/admin/ManageBookings";
import Offers from "../pages/offers/Offers";
import AboutUs from "../pages/footer/AboutUs";
import TableBooking from "../pages/tableBooking/tableBooking"
import FAQ from "../pages/footer/Faq";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/table-booking",
          element: <TableBooking/>
        },
        {
          path: "/faq",
          element: <FAQ/>
        },
        {
          path: "/menu",
          element: <Menu/>
        },
        {
          path: "/offers",
          element: <Offers/>
        },
        {
          path: "/order",
          element:<PrivateRoute><Order/></PrivateRoute>
        },
        {
          path: "/update-profile",
          element: <UserProfile/>
        },
        {
          path: "/cart-page",
          element: <CartPage/>
        },
        {
          path: "/process-checkout",
          element: <Payment/>
        },
        {
          path: "/about-us",
          element: <AboutUs/>
        }
      ]
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/login",
      element: <Login/>
    },

    // admin routes
    {
      path: 'dashboard',
      // element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
      element: <DashboardLayout/>,
      children: [
        {
          path: '',
          element: <Dashboard/>
        },
        {
          path: 'users', 
          element: <Users/>
        },
        {
          path: 'add-menu',
          element: <AddMenu/>
        }, 
        {
          path: "manage-items",
          element: <ManageItems/>
        },
        {
          path: "update-menu/:id",
          element: <UpdateMenu/>,
          loader: ({params}) => fetch(`http://localhost:6001/menu/${params.id}`)
        },
        {
          path: 'manage-bookings',
          element: <ManageBookings/>
        }
      ]
    }
  ]);

  export default router;