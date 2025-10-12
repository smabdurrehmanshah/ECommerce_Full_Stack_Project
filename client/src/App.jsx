import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "./components/provider/theme-provider";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import AdminLogin from "./pages/AdminLogin";
import Error from "./pages/Error";
import Success from "./pages/Success";
import RootLayout from "./layouts/RootLayout";
import AdminLayout from "./layouts/AdminLayout";
import CreateProduct from "./components/custom/CreateProduct";
import AllProducts from "./components/custom/AllProducts";
import Orders from "./components/custom/Orders";
import Settings from "./components/custom/Settings";
import Analytics from "./components/custom/Analytics";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "signup",
          Component: Signup,
        },
        {
          path: "login",
          Component: Login,
        },
        {
          path: "product",
          Component: Product,
        },
        {
          path: "checkout",
          Component: Checkout,
        },
      ],
    },
    {
      path: "/admin/dashboard",
      Component: AdminLayout,
      children: [
        {
          index: true,
          Component: CreateProduct,
        },
        {
          path: "all-products",
          Component: AllProducts,
        },
        {
          path: "orders",
          Component: Orders,
        },
        {
          path: "analytics",
          Component: Analytics,
        },
        {
          path: "settings",
          Component: Settings,
        },
      ],
    },

    {
      path: "/admin/login",
      Component: AdminLogin,
    },
    {
      path: "/success",
      Component: Success,
    },
    {
      path: "/*",
      Component: Error,
    },
  ]);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
