import { Shield, Eye, Lock, FileText } from 'lucide-react';
import { useLanguage } from '../i18n';
import HebrewOnlyPage from './HebrewOnlyPage';

export default function Privacy() {
  const { language } = useLanguage();
  if (language === 'en') return <HebrewOnlyPage />;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">מדיניות פרטיות</h1>
          <p className="text-lg text-gray-600">
            אנחנו מחויבים להגנה על הפרטיות שלכם ולשימוש אחראי במידע
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            
            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 ml-3" />
                <h2 className="text-2xl font-bold text-gray-900">איסוף מידע</h2>
              </div>
              <p className="mb-4">
                אנחנו אוספים מידע שאתם מספקים לנו בעצמכם, כולל:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-6">
                <li>פרטים אישיים (שם, אימייל, טלפון) בטפסי יצירת קשר ותרומות</li>
                <li>תוכן ההודעות שאתם שולחים לנו</li>
                <li>מידע על תרומות (סכומים, הקדשות)</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-blue-600 ml-3" />
                <h2 className="text-2xl font-bold text-gray-900">שימוש במידע</h2>
              </div>
              <p className="mb-4">
                אנחנו משתמשים במידע שלכם למטרות הבאות:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-6">
                <li>מענה לפניותיכם ושאלותיכם</li>
                <li>עיבוד תרומות ושליחת אישורים</li>
                <li>שליחת עדכונים על הפרויקט (רק למי שביקש)</li>
                <li>עמידה בדרישות חוק והתחייבויות רגולטוריות</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 ml-3" />
                <h2 className="text-2xl font-bold text-gray-900">הגנה על המידע</h2>
              </div>
              <p className="mb-4">
                אנחנו נוקטים באמצעי אבטחה מתקדמים כדי להגן על המידע שלכם:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-6">
                <li>הצפנת מידע רגיש</li>
                <li>גישה מוגבלת למידע לצוות מורשה בלבד</li>
                <li>גיבוי ושמירה מאובטחת של המידע</li>
                <li>עדכוני אבטחה שוטפים</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 ml-3" />
                <h2 className="text-2xl font-bold text-gray-900">שיתוף מידע</h2>
              </div>
              <p className="mb-4">
                אנחנו לא משתפים את המידע האישי שלכם עם גורמים חיצוניים, למעט המקרים הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-6">
                <li>כאשר נדרש על פי חוק</li>
                <li>לצורך עיבוד תרומות (באמצעות חברות תשלומים מוכרות)</li>
                <li>כאשר ניתנה הסכמה מפורשת</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">הזכויות שלכם</h2>
              <p className="mb-4">אתם זכאים:</p>
              <ul className="list-disc list-inside space-y-2 mr-6">
                <li>לדעת איזה מידע אנחנו שומרים עליכם</li>
                <li>לבקש תיקון מידע שגוי</li>
                <li>לבקש מחיקת המידע שלכם</li>
                <li>להסיר עצמכם מרשימת תפוצה</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">עוגיות (Cookies)</h2>
              <p className="mb-4">
                אנחנו משתמשים בעוגיות בסיסיות כדי לשפר את חווית הגלישה באתר. 
                העוגיות עוזרות לנו להבין איך משתמשים באתר ולשפר אותו.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">שינויים במדיניות</h2>
              <p className="mb-4">
                אנחנו עשויים לעדכן את מדיניות הפרטיות מעת לעת. 
                שינויים מהותיים יפורסמו באתר ונשלחו למי שביקש לקבל עדכונים.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">צור קשר</h2>
              <p className="mb-4">
                לשאלות או בקשות בנוגע לפרטיות ושימוש במידע, אנא צרו קשר:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>אימייל:</strong> mbshomron@gmail.com</p>
                <p><strong>טלפון:</strong> 050-6655586</p>
                <p><strong>כתובת:</strong> כיסופים 24, קרני שומרון</p>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm text-gray-500">
                מדיניות פרטיות זו עודכנה לאחרונה: ינואר 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
