import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../i18n";

const CAUSEMATCH_URL = "/donate";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, dir, language, localizePath, switchLanguage, stripLanguagePrefix } = useLanguage();
  const isEnglish = language === "en";

  const navItems = [
    { path: "/", label: t.nav.home },
    { path: "/about", label: t.nav.about },
    { path: "/project", label: t.nav.project },
    { path: "/help", label: t.nav.help },
    { path: "/team", label: t.nav.team },
    { path: "/news", label: t.nav.news },
    { path: "/contact", label: t.nav.contact },
  ];

  const isActive = (path: string) => stripLanguagePrefix(location.pathname) === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-3 py-3 ${isEnglish ? "lg:py-4" : "py-4"}`}>
          <Link
            to={localizePath("/")}
            className={`flex items-center gap-3 min-w-0 shrink ${dir === "rtl" ? "flex-row-reverse" : ""}`}
          >
            <img
              src="/logo.png"
              alt={t.common.logoAlt}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain shrink-0"
              loading="eager"
              width={64}
              height={64}
            />
            <div className={`min-w-0 ${dir === "rtl" ? "text-right" : "text-left"}`}>
              <h1 className={`font-bold text-gray-900 leading-tight text-balance ${isEnglish ? "text-sm sm:text-base lg:text-lg" : "text-lg"}`}>
                {t.common.orgName}
              </h1>
              <p className={`text-gray-600 ${isEnglish ? "text-xs sm:text-sm" : "text-sm"}`}>
                {t.common.orgNumber}
              </p>
            </div>
          </Link>

          <nav
            className={`hidden ${isEnglish ? "xl:flex" : "lg:flex"} items-center justify-center gap-4 xl:gap-5 flex-1 px-2 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={localizePath(item.path)}
                className={`nav-link text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                  isActive(item.path) ? "text-blue-600 border-b-2 border-blue-600 pb-0.5" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={`hidden md:flex items-center gap-2 shrink-0 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
            <button
              onClick={switchLanguage}
              className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 px-3 py-2 rounded-full border border-gray-200 hover:border-blue-300 transition-colors text-sm font-medium whitespace-nowrap"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4 shrink-0" />
              <span>{t.common.languageSwitch}</span>
            </button>
            <a
              href={CAUSEMATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-200 whitespace-nowrap text-sm sm:text-base"
            >
              {t.common.donate}
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isEnglish ? "xl:hidden" : "lg:hidden"} p-2 rounded-lg hover:bg-gray-100 transition-colors shrink-0`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className={`${isEnglish ? "xl:hidden" : "lg:hidden"} border-t border-gray-200 py-4`}>
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={localizePath(item.path)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 ${
                    isActive(item.path) ? "text-blue-600" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => { switchLanguage(); setIsMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-2 text-gray-700 py-2 font-medium"
              >
                <Globe className="w-4 h-4" />
                {t.common.languageSwitch}
              </button>
              <a
                href={CAUSEMATCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold text-center mt-2 block"
              >
                {t.common.donate}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
