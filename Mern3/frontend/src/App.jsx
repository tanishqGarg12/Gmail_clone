import Navbar from "./components/Navbar";
import Slidebar from "./components/Slidebar";
import Inbox from "./components/Inbox";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Body from "./components/Body";
import Mail from "./components/Mail";
import Emails from "./components/Emails";
import SendEmail from "./components/SendEmail";
import Logout from "./components/Signup";
import Login from "./components/Login";
import Signup from "./components/Signup";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Inbox/>
      },
      {
        path: 'mail/:id',
        element: <Mail />
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }
])
export default function App() {
  return (
    <div className="bg-[#F6F8FC] h-screen">
    <Navbar/>
    {/* <Inbox/> */}
    <RouterProvider router={appRouter}/>
    {/* <Emails/> */}
    <div className="absolute w-[36%] bottom-1 right-10 z-10">
         <SendEmail/>
       </div>
    </div>
  )
}