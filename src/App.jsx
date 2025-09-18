import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/ui/Dashboard";
import CampaignsList from "./components/ui/campaignsList/CampaignsList";
import Donors from "./components/ui/donors/Donors";
import Entities from "./components/ui/entities/Entities";
import Appointments from "./components/ui/appointments/Appointments";
import NotFound from "./routes/notFound/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<CampaignsList />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/entities" element={<Entities />} />
            <Route path="/appointments" element={<Appointments />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
