import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import { NotFound } from "./components/NotFound.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import store from "./redux/store.ts";
import PricingPage from "./pages/Pricing.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import UserTasks from "./pages/UserTasks.tsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/pricing", element: <PricingPage/>},
  { path: "/:id/dashboard", element: <Dashboard/>},
  { path: "/:id/tasks", element: <UserTasks/>},
  { path: "/*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
    ,
  </Provider>
);
