import { Heart, Target, Eye, Users, Shield, FileText } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function About() {
  const { t, dir } = useLanguage();
  const iconMargin = dir === 'rtl' ? 'ml-4' : 'mr-4';

  return (
    <div className="min-h-screen py-12" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.about.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.about.subtitle}</p>
        </div>

        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center ${iconMargin}`}>
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{t.about.storyTitle}</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.about.storyP1}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.about.storyP2}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t.about.storyP3}</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.about.goalsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: t.about.goal1Title, desc: t.about.goal1Desc, gradient: 'from-blue-500 to-green-500' },
              { icon: Eye, title: t.about.goal2Title, desc: t.about.goal2Desc, gradient: 'from-green-500 to-blue-500' },
              { icon: Users, title: t.about.goal3Title, desc: t.about.goal3Desc, gradient: 'from-blue-500 to-green-500' },
            ].map((goal) => (
              <div key={goal.title} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${goal.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <goal.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{goal.title}</h3>
                <p className="text-gray-600">{goal.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center ${iconMargin}`}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{t.about.transparencyTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.about.orgDetailsTitle}</h3>
                <div className="space-y-3">
                  {[t.about.orgNumber, t.about.orgAddress, t.about.orgStatus].map((line) => (
                    <div key={line} className={`flex items-center ${dir === 'rtl' ? '' : 'gap-3'}`}>
                      <FileText className={`w-5 h-5 text-blue-600 ${dir === 'rtl' ? 'ml-3' : 'mr-0'}`} />
                      <span className="text-gray-700">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.about.commitmentTitle}</h3>
                <p className="text-gray-700 mb-4">{t.about.commitmentP1}</p>
                <p className="text-gray-700">{t.about.commitmentP2}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">{t.about.visionTitle}</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">{t.about.visionQuote}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
