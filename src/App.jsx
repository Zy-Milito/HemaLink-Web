import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/ui/Dashboard";
import DonationsList from "./components/ui/panels/DonationsList"
/* import ModTools from "./components/dashboard/panels/moderator/ModTools";
import AdminTools from "./components/dashboard/panels/admin/AdminTools"; */
import NotFound from "./routes/notFound/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<DonationsList />} />
            {/* <Route path="mod" element={<ModTools />} />
            <Route path="admin" element={<AdminTools />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
