import DonationLink from '../components/DonationLink';
import { Heart, Users, Building, Stethoscope, ArrowLeft, ArrowRight, Phone, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';

const DISPLAYED_SUPPORTS = 1364;
const DISPLAYED_DONATIONS_TOTAL_NIS = 310_000;

export default function Home() {
  const { t, dir, localizePath, language } = useLanguage();
  const isEnglish = language === 'en';
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const locale = language === 'he' ? 'he-IL' : 'en-US';
  const rowReverse = dir === 'rtl' ? 'space-x-reverse' : '';

  return (
    <div className="min-h-screen" dir={dir}>
      <section className="relative text-white overflow-hidden">
        <img
          src="/hero-landscape.png"
          alt={t.home.heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 z-10">
          <div className="text-center">
            <div className="mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-100 mb-3 text-balance">
                {t.home.heroSubtitle}
              </h2>
              <h1 className="hero-title text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300 max-w-4xl mx-auto">
                {t.home.heroTitle}
              </h1>
            </div>
            <p className={`text-lg sm:text-xl md:text-2xl mb-8 text-blue-100 mx-auto leading-relaxed text-balance ${isEnglish ? 'max-w-2xl' : 'max-w-3xl'}`}>
              {t.home.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-xl sm:max-w-none mx-auto">
              <DonationLink
              
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                {t.common.donateNow}
              </DonationLink>
              <Link
                to={localizePath('/project')}
                className={`border-2 border-white text-white px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center gap-2 ${rowReverse}`}
              >
                <span>{t.home.projectInfo}</span>
                <ArrowIcon className="w-5 h-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-l from-red-600 to-orange-600 px-8 py-6">
              <div className={`flex items-center justify-center gap-3 text-white ${rowReverse}`}>
                <AlertCircle className="w-8 h-8" />
                <h2 className="text-2xl md:text-3xl font-bold">{t.home.urgentTitle}</h2>
              </div>
            </div>

            <div className={`px-8 md:px-12 py-10 space-y-6 text-gray-800 text-lg leading-relaxed ${isEnglish ? 'max-w-3xl mx-auto' : ''}`}>
              <div className={`flex items-start gap-3 ${rowReverse}`}>
                <Clock className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <p className="font-semibold text-xl text-red-600">{t.home.urgentTime}</p>
              </div>

              <p>{t.home.urgentP1}</p>

              <p>
                {t.home.urgentP2}<br />
                <em className="text-gray-600">{t.home.urgentQuote}</em>
              </p>

              <div className={`bg-red-50 border-red-600 p-6 rounded-lg ${dir === 'rtl' ? 'border-r-4' : 'border-l-4'}`}>
                <p className="font-semibold text-red-900 mb-3">{t.home.urgentHardTitle}</p>
                <p>{t.home.urgentHardP1}</p>
                <p className="mt-4">{t.home.urgentHardP2}</p>
              </div>

              <div className="text-center py-6">
                <p className="text-3xl font-bold text-blue-700 mb-2">{t.home.urgentEnough}</p>
                <p className="text-xl text-gray-700">{t.home.urgentEnoughSub}</p>
                <p className="text-lg text-gray-600">{t.home.urgentEnoughP}</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-300 p-8 rounded-2xl">
                <p className="text-2xl font-bold text-center text-blue-900 mb-4">{t.home.solutionTitle}</p>
                <p className="text-xl text-center text-blue-800 mb-6">{t.home.solutionP}</p>
                <div className="space-y-3 mt-6">
                  <p className="text-lg">{t.home.solutionP1}</p>
                  <p className="text-lg">{t.home.solutionP2}</p>
                </div>
              </div>

              <ul className="space-y-2 text-gray-700">
                {[t.home.benefit1, t.home.benefit2, t.home.benefit3].map((benefit) => (
                  <li key={benefit} className={`flex items-start gap-2 ${rowReverse}`}>
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xl font-semibold text-center text-blue-900">{t.home.securityP}</p>

              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-2xl mt-8">
                <p className={`text-2xl font-bold mb-4 flex items-center justify-center gap-2 ${rowReverse}`}>
                  <Heart className="w-8 h-8" />
                  <span>{t.home.howYouHelpTitle}</span>
                </p>
                <p className="text-lg mb-3">{t.home.howYouHelpP1}</p>
                <p className="text-lg mb-3">{t.home.howYouHelpP2}</p>
                <p className="text-lg mb-4">{t.home.howYouHelpP3}</p>
                <p className="text-lg">{t.home.howYouHelpP4}</p>
              </div>

              <div className="text-center space-y-4 pt-6">
                <p className="text-2xl font-bold text-gray-900">{t.home.joinTitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <DonationLink
              
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-r from-green-500 to-yellow-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${rowReverse}`}
                  >
                    <Heart className="w-6 h-6" />
                    <span>{t.common.joinDonate}</span>
                  </DonationLink>
                </div>
                <div className="pt-6 border-t border-gray-200 mt-8">
                  <p className="text-lg font-semibold text-gray-800">{t.home.signature}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">{t.home.statsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">480</div>
              <div className={`text-gray-600 ${isEnglish ? 'text-sm sm:text-base px-2' : ''}`}>{t.home.statArea}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{DISPLAYED_SUPPORTS}</div>
              <div className="text-gray-600">{t.home.statSupporters}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                ₪{DISPLAYED_DONATIONS_TOTAL_NIS.toLocaleString(locale)}
              </div>
              <div className="text-gray-600">{t.home.statRaised}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">{t.home.statResidents}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t.home.ctaTitle}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{t.home.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DonationLink
              
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              {t.common.donateNow}
            </DonationLink>
            <Link
              to={localizePath('/help')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              {t.common.moreWaysToHelp}
            </Link>
            <a
              href="https://wa.me/972506655586"
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 ${rowReverse}`}
            >
              <Phone className="w-5 h-5" />
              <span>{t.common.whatsapp}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
