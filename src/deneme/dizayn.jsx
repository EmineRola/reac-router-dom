import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>İki sayfadada bulunacak.</h1>
      {/* içerde olan routen bu sayfada konumlaacağı nokta */}
      <Outlet />
    </div>
  );
};
export default Layout;
