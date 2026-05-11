import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "@/components/TopNav";
import SearchPage from "@/pages/SearchPage";
import AssetModelPage from "@/pages/AssetModelPage";
import UploadPage from "@/pages/UploadPage";
import ApprovalPage from "@/pages/ApprovalPage";
import SettingsPage from "@/pages/SettingsPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <TopNav />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/asset-model" element={<AssetModelPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/approval" element={<ApprovalPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
