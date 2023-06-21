import { Outlet } from "react-router-dom";
import HeaderComponent from "./Header/HeaderComponent";

const LayoutComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

export default LayoutComponent;
