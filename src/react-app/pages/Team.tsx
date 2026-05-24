import React from 'react';
import { User, Briefcase, Award, GraduationCap } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: "שמואל וייס",
      role: "יו״ר העמותה",
      description: "בעל ניסיון רב בניהול פרויקטים קהילתיים והקמת מוסדות ציבור",
      expertise: ["ניהול פרויקטים", "יזמות חברתית", "פיתוח קהילתי"]
    },
    {
      name: "ד״ר יעקב זליגמן",
      role: "נשיא העמותה והיועץ הרפואי",
      description: "רופא כירורג",
      expertise: ["רפואה פנימית", "ניהול רפואי", "איכות בטיחות"]
    },
    {
      name: "מיכאל אסרף",
      role: "מנכ״ל העמותה",
      description: "בעל ניסיון רב בניהול פרויקטים",
      expertise: ["ניהול עמותות", "תפעול רפואי", "פיתוח עסקי"]
    },
    {
      name: "עו״ד אבי במברגר",
      role: "יועץ משפטי",
      expertise: ["דיני עמותות", "דיני בינוי", "דיני בריאות"]
    }
  ];

  return (
    <div className="min-h-screen py-12" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            הצוות וההנהלה
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            צוות מקצועי ומנוסה המוביל את הפרויקט במקצועיות ובמחויבות לקהילה
          </p>
        </div>

        {/* Team Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">מי אנחנו</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              הצוות שלנו מורכב מאנשי מקצוע מנוסים ומוכשרים, שכל אחד מהם מביא עמו ידע וניסיון ייחודיים. 
              אנחנו משלבים מומחיות רפואית, ניהולית, משפטית וכספית כדי להבטיח את הצלחת הפרויקט.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              כל חברי הצוות פועלים באופן התנדבותי מתוך אמונה עמוקה בחשיבות המיזם ומחויבות לשירות הקהילה.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">חברי ההנהלה</h2>
          <div className="space-y-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center ml-6">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{member.role}</p>
                    </div>
                  </div>
                  {member.description ? (
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {member.description}
                  </p>
                  ) : null}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
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

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">הערכים שמנחים אותנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">מקצועיות</h3>
              <p className="text-gray-600">
                אנחנו מחויבים לסטנדרטים הגבוהים ביותר בכל תחומי פעילותנו
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">שקיפות</h3>
              <p className="text-gray-600">
                פעילות שקופה ופתוחה מול הציבור והגורמים הרלוונטיים
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">מחויבות</h3>
              <p className="text-gray-600">
                מחויבות מלאה למטרות העמותה ולשירות הקהילה
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">רוצים ליצור קשר?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              אנחנו תמיד זמינים לשאלות, הצעות או רעיונות לשיתוף פעולה
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              צור קשר עכשיו
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
