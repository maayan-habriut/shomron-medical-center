import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./i18n";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectPage from "./pages/Project";
import HelpPage from "./pages/Help";
import TeamPage from "./pages/Team";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";
import DonatePage from "./pages/Donate";
import PrivacyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";

function LocalizedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />

      <Route path="/en" element={<HomePage />} />
      <Route path="/en/about" element={<AboutPage />} />
      <Route path="/en/project" element={<ProjectPage />} />
      <Route path="/en/help" element={<HelpPage />} />
      <Route path="/en/team" element={<TeamPage />} />
      <Route path="/en/news" element={<NewsPage />} />
      <Route path="/en/contact" element={<ContactPage />} />
      <Route path="/en/donate" element={<DonatePage />} />
      <Route path="/en/privacy" element={<PrivacyPage />} />
      <Route path="/en/terms" element={<TermsPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <LocalizedRoutes />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}
