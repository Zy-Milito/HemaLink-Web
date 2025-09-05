import { Outlet } from "react-router";
import Sidebar from "./shared/sideBar/Sidebar";

const Dashboard = () => {
  return (
    <div class="app">
      <section>
        <Sidebar />
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Dashboard;
