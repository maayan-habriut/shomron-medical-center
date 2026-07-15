import { User, Briefcase, Award, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';

export default function Team() {
  const { t, dir, localizePath } = useLanguage();
  const avatarMargin = dir === 'rtl' ? 'ml-6' : 'mr-6';

  const values = [
    { icon: Award, title: t.team.value1Title, desc: t.team.value1Desc, gradient: 'from-blue-500 to-green-500' },
    { icon: GraduationCap, title: t.team.value2Title, desc: t.team.value2Desc, gradient: 'from-green-500 to-blue-500' },
    { icon: Briefcase, title: t.team.value3Title, desc: t.team.value3Desc, gradient: 'from-blue-500 to-green-500' },
  ];

  return (
    <div className="min-h-screen py-12" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.team.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.team.subtitle}</p>
        </div>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.team.whoWeAreTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.team.whoWeAreP1}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t.team.whoWeAreP2}</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.team.membersTitle}</h2>
          <div className="space-y-8">
            {t.team.members.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center ${avatarMargin}`}>
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{member.role}</p>
                    </div>
                  </div>
                  {member.description ? (
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{member.description}</p>
                  ) : null}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.team.valuesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">{t.team.ctaTitle}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{t.team.ctaDescription}</p>
            <Link
              to={localizePath('/contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              {t.common.contactNow}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
