import { useLanguage } from '../i18n';
import { Heart, ExternalLink } from 'lucide-react';

const CAUSEMATCH_URL = 'https://causematch.com/maayan-habriyut';

export default function EnglishDonateContent() {
  const { t, localizePath } = useLanguage();

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Support Maayan HaBriut</h1>
          <p className="text-xl text-gray-600 mb-4 leading-relaxed">
            Your gift helps build the first 24/7 community medical center in Shomron — bringing urgent,
            accessible care to thousands of families.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Choose your preferred donation option on our donation page.
          </p>
          <a
            href={CAUSEMATCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-yellow-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <span>Choose a Donation Option</span>
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-sm text-gray-500 mt-8">
            Registered Israeli nonprofit #580826667 · Karnei Shomron, Israel
          </p>
          <a href={localizePath('/contact')} className="text-blue-600 hover:underline mt-4 inline-block">
            {t.common.contact} →
          </a>
        </div>
      </div>
    </div>
  );
}
