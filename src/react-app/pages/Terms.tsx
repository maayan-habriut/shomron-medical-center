import { FileText, AlertTriangle, Scale, CheckCircle } from 'lucide-react';
import { useLanguage } from '../i18n';
import HebrewOnlyPage from './HebrewOnlyPage';

export default function Terms() {
  const { language } = useLanguage();
  if (language === 'en') return <HebrewOnlyPage />;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">תנאי שימוש</h1>
          <p className="text-lg text-gray-600">
            תנאי השימוש באתר האינטרנט של עמותת מרכז רפואי שומרון
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">

            <section>
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 ml-3" />
                <h2 className="text-2xl font-bold text-gray-900">הסכמה לתנאים</h2>
              </div>
              <p>
                השימוש באתר זה מהווה הסכמה מלאה לתנאי השימוש המפורטים להלן. 
                אם אינכם מסכימים לתנאים אלה, אנא הימנעו משימוש באתר.
              </p>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 ml-3" />
                <h2 className="text-2xl font-bold text-gray-900">אודות העמותה</h2>
              </div>
              <p className="mb-4">
                אתר זה מופעל על ידי עמותת מרכז רפואי שומרון:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>מספר עמותה:</strong> 580826667</p>
                <p><strong>כתובת:</strong> כיסופים 24, קרני שומרון</p>
                <p><strong>מטרה:</strong> הקמת מרכז רפואי מודרני לשירות תושבי השומרון</p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-600 ml-3" />
                <h2 className="text-2xl font-bold text-gray-900">שימוש מותר</h2>
              </div>
              <p className="mb-4">אתם רשאים להשתמש באתר למטרות הבאות:</p>
              <ul className="list-disc list-inside space-y-2 mr-6">
                <li>קבלת מידע על העמותה והפרויקט</li>
                <li>יצירת קשר עם צוות העמותה</li>
                <li>ביצוע תרומות לעמותה</li>
                <li>קריאת עדכונים וחדשות</li>
                <li>שיתוף תוכן האתר ברשתות חברתיות</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">שימושים אסורים</h2>
              <p className="mb-4">אסור להשתמש באתר למטרות הבאות:</p>
              <ul className="list-disc list-inside space-y-2 mr-6">
                <li>פעילות בלתי חוקית או מזיקה</li>
                <li>הפרעה לתפעול האתר או לשרתים</li>
                <li>העלאת תוכן פוגעני, מקובל או מטעה</li>
                <li>ניסיון להתחזות לעמותה או לנציגיה</li>
                <li>איסוף מידע על משתמשים אחרים</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">תרומות</h2>
              <p className="mb-4">לגבי תרומות לעמותה:</p>
              <ul className="list-disc list-inside space-y-2 mr-6">
                <li>כל התרומות הן חד-פעמיות אלא אם צוין אחרת</li>
                <li>התרומות מיועדות לפרויקט המרכז הרפואי</li>
                <li>אישור מס (טופס 46) יישלח לכתובת האימייל</li>
                <li>העמותה רשאית לפרסם את שמות התורמים אלא אם ביקשו אחרת</li>
                <li>ביטול תרומה אפשרי תוך 14 יום</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">זכויות יוצרים</h2>
              <p className="mb-4">
                כל התכנים באתר (טקסטים, תמונות, עיצובים) שייכים לעמותת מרכז רפואי שומרון 
                או מוגנים על ידי רישיונות מתאימים. שימוש בתכנים מותר למטרות אישיות בלבד.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">הגבלת אחריות</h2>
              <p className="mb-4">
                העמותה לא תישא באחריות לנזקים הנגרמים משימוש באתר, לרבות:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-6">
                <li>נזקים ישירים או עקיפים</li>
                <li>אובדן מידע או נתונים</li>
                <li>הפרעות בשירות או בגישה לאתר</li>
                <li>שגיאות או אי-דיוקים בתוכן</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">שינוי תנאים</h2>
              <p>
                העמותה רשאית לעדכן את תנאי השימוש מעת לעת. 
                השינויים ייכנסו לתוקף עם פרסומם באתר. 
                המשך השימוש באתר מהווה הסכמה לתנאים המעודכנים.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">דין חל וסמכות שיפוט</h2>
              <p>
                תנאי שימוש אלה כפופים לדיני מדינת ישראל. 
                סמכות השיפוט הבלעדית נתונה לבתי המשפט בישראל.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">צור קשר</h2>
              <p className="mb-4">
                לשאלות או הבהרות בנוגע לתנאי השימוש:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>אימייל:</strong> mbshomron@gmail.com</p>
                <p><strong>טלפון:</strong> 050-6655586</p>
                <p><strong>כתובת:</strong> כיסופים 24, קרני שומרון</p>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm text-gray-500">
                תנאי שימוש אלה עודכנו לאחרונה: ינואר 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
