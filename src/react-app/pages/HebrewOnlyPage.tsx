import { useLanguage } from '../i18n';
import { useLocation, Link } from 'react-router-dom';

export default function HebrewOnlyPage() {
  const { t, stripLanguagePrefix } = useLanguage();
  const location = useLocation();
  const hebrewPath = stripLanguagePrefix(location.pathname);

  return (
    <div className="min-h-[50vh] flex items-center justify-center py-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.secondary.hebrewOnlyTitle}</h1>
        <p className="text-lg text-gray-600 mb-8">{t.secondary.hebrewOnlyDescription}</p>
        <Link
          to={hebrewPath}
          className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
        >
          {t.secondary.viewHebrew}
        </Link>
      </div>
    </div>
  );
}
