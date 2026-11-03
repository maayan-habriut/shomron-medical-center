import { Heart, HandHeart, Users, Briefcase, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';

const HELP_ICONS = [Heart, HandHeart, Users, Briefcase];
const HELP_COLORS = [
  'from-green-500 to-blue-500',
  'from-blue-500 to-purple-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-red-500',
];

export default function Help() {
  const { t, dir, language, localizePath } = useLanguage();
  const isEnglish = language === 'en';
  const rowReverse = dir === 'rtl' ? 'space-x-reverse' : '';
  const listClass = dir === 'rtl' ? 'list-disc list-inside mr-4' : 'list-disc list-inside ml-4';

  const detailSections = [
    { title: t.help.financialTitle, p: t.help.financialP, items: t.help.financialItems },
    { title: t.help.volunteerTitle, p: t.help.volunteerP, items: t.help.volunteerItems },
    { title: t.help.connectionsTitle, p: t.help.connectionsP, items: t.help.connectionsItems },
    { title: t.help.sponsorshipTitle, p: t.help.sponsorshipP, items: t.help.sponsorshipItems },
  ];

  return (
    <div className="min-h-screen py-12" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title mb-6">{t.help.title}</h1>
          <p className={`text-xl text-gray-600 mx-auto text-balance ${isEnglish ? 'max-w-2xl leading-relaxed' : 'max-w-3xl'}`}>{t.help.subtitle}</p>
        </div>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.help.ways.map((way, index) => {
              const Icon = HELP_ICONS[index];
              const color = HELP_COLORS[index];
              const link = way.link === '/donate' ? localizePath('/donate') : localizePath(way.link);
              return (
                <div key={way.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-full flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{way.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{way.description}</p>
                    {way.link === '/donate' ? (
                      <Link
              to={localizePath('/donate')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block bg-gradient-to-r ${color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        {way.action}
                      </Link>
                    ) : (
                      <Link
                        to={link}
                        className={`inline-block bg-gradient-to-r ${color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        {way.action}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.help.detailsTitle}</h2>
            <div className="space-y-8">
              {detailSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                  <p className="text-gray-700 mb-4">{section.p}</p>
                  <ul className={`${listClass} text-gray-700 space-y-2`}>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">{t.help.ctaTitle}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{t.help.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={localizePath('/contact')}
                className={`bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${rowReverse}`}
              >
                <Mail className="w-5 h-5" />
                <span>{t.common.contact}</span>
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
    </div>
  );
}
