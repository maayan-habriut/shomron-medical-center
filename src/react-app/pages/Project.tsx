import { Building, Calendar, CheckCircle, Circle, MapPin, Stethoscope, Users, Zap } from 'lucide-react';
import { useLanguage } from '../i18n';

const FACILITY_COUNTS = [2, 2, 1, 1];
const FACILITY_ICONS = [Stethoscope, Building, Zap, Circle];
const PHASE_STATUS = ['completed', 'in-progress', 'pending', 'pending', 'pending'] as const;


export default function Project() {
  const { t, dir, language, localizePath } = useLanguage();
  const isEnglish = language === 'en';
  const borderActive = dir === 'rtl' ? 'border-r-4 border-blue-500' : 'border-l-4 border-blue-500';

  const statusLabel = (status: typeof PHASE_STATUS[number]) => {
    if (status === 'completed') return t.project.statusCompleted;
    if (status === 'in-progress') return t.project.statusInProgress;
    return t.project.statusPending;
  };

  return (
    <div className="min-h-screen py-12" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title mb-6">{t.project.title}</h1>
          <p className={`text-xl text-gray-600 mx-auto text-balance ${isEnglish ? 'max-w-3xl leading-relaxed' : 'max-w-3xl'}`}>{t.project.subtitle}</p>
        </div>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.project.overviewTitle}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.project.whatWillBeBuilt}</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{t.project.overviewP}</p>
                <div className={`flex items-center mb-4 ${dir === 'rtl' ? '' : 'gap-3'}`}>
                  <MapPin className={`w-6 h-6 text-blue-600 ${dir === 'rtl' ? 'ml-3' : ''}`} />
                  <span className="text-gray-700">{t.project.location}</span>
                </div>
                <div className={`flex items-center mb-4 ${dir === 'rtl' ? '' : 'gap-3'}`}>
                  <Building className={`w-6 h-6 text-blue-600 ${dir === 'rtl' ? 'ml-3' : ''}`} />
                  <span className="text-gray-700">{t.project.area}</span>
                </div>
                <div className={`flex items-center ${dir === 'rtl' ? '' : 'gap-3'}`}>
                  <Users className={`w-6 h-6 text-blue-600 ${dir === 'rtl' ? 'ml-3' : ''}`} />
                  <span className="text-gray-700">{t.project.serves}</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={t.project.imageAlt}
                  className="rounded-lg shadow-lg w-full"
                />
                <div className={`absolute -bottom-4 bg-white p-4 rounded-lg shadow-lg ${dir === 'rtl' ? '-left-4' : '-right-4'}`}>
                  <div className="text-2xl font-bold text-blue-600">80</div>
                  <div className="text-sm text-gray-600">{t.project.areaLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.project.facilitiesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.project.facilities.map((facility, index) => {
              const Icon = FACILITY_ICONS[index];
              return (
                <div key={facility.name} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-balance">{facility.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-3">{FACILITY_COUNTS[index]}</div>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.project.timelineTitle}</h2>
          <div className="space-y-8">
            {t.project.phases.map((phase, index) => {
              const status = PHASE_STATUS[index];
              return (
                <div key={phase.title} className="flex items-start">
                  <div className={`flex-shrink-0 ${dir === 'rtl' ? 'ml-6' : 'mr-6'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      status === 'completed'
                        ? 'bg-green-100 border-2 border-green-500'
                        : status === 'in-progress'
                        ? 'bg-blue-100 border-2 border-blue-500'
                        : 'bg-gray-100 border-2 border-gray-300'
                    }`}>
                      {status === 'completed' ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <span className={`text-sm font-semibold ${status === 'in-progress' ? 'text-blue-600' : 'text-gray-500'}`}>
                          {index + 1}
                        </span>
                      )}
                    </div>
                    {index < t.project.phases.length - 1 && (
                      <div className={`w-0.5 h-16 mx-auto mt-4 ${status === 'completed' ? 'bg-green-200' : 'bg-gray-200'}`} />
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className={`bg-white rounded-lg shadow-lg p-6 ${status === 'in-progress' ? borderActive : ''}`}>
                    <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 ${dir === 'rtl' ? 'sm:flex-row-reverse' : ''}`}>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-balance">{phase.title}</h3>
                      <div className={`flex items-center shrink-0 ${dir === 'rtl' ? '' : 'gap-2'}`}>
                        <Calendar className={`w-4 h-4 text-gray-500 ${dir === 'rtl' ? 'ml-2' : ''}`} />
                        <span className="text-sm text-gray-500 whitespace-nowrap">{phase.duration}</span>
                      </div>
                    </div>
                      <p className="text-gray-700">{phase.description}</p>
                      <div className="mt-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : status === 'in-progress'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {statusLabel(status)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">{t.project.ctaTitle}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{t.project.ctaDescription}</p>
            <a
              href={localizePath('/donate')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              {t.common.donateNow}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
