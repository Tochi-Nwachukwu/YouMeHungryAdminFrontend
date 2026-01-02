import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import Notification from "./pages/Notification";
import Menu from "./pages/Menu";
import AddMenu from "./pages/AddMenu";
import Profile from "./pages/Profile";
import DisputeResolution from "./pages/DisputeResolution";
import DisputeResolutionDetails from "./pages/DisputeResolutionDetails";
import Earnings from "./pages/Earnings";
import VerifyEmail from "./pages/VerifyEmail";
import ChangeBank from "./pages/ChangeBank";
import DiscountAndPromos from "./pages/DiscountAndPromos";
import CreateDicountAndPromo from "./pages/CreateDicountAndPromo";
import EditDicountAndPromo from "./pages/EditDicountAndPromo";
import EditMenu from "./pages/EditMenu";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/add-menu" element={<AddMenu />} />
        <Route path="/menu/edit-menu/:id" element={<EditMenu />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/details/:id" element={<OrderDetails />} />
        <Route path="/discounts-promos" element={<DiscountAndPromos />} />
        <Route
          path="/discounts-promos/create-discount"
          element={<CreateDicountAndPromo />}
        />
        <Route
          path="/discounts-promos/edit-discount/:id"
          element={<EditDicountAndPromo />}
        />
        <Route path="/wallet-earnings" element={<Earnings />} />
        <Route path="/wallet-earnings/verify-email" element={<VerifyEmail />} />
        <Route
          path="/wallet-earnings/change-account"
          element={<ChangeBank />}
        />
        <Route path="/dispute-resolution" element={<DisputeResolution />} />
        <Route
          path="/dispute-resolution/:id"
          element={<DisputeResolutionDetails />}
        />
        <Route path="/profile-settings" element={<Profile />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
