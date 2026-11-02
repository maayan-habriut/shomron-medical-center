import { Heart, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n';

const DONATION_URL = 'https://nedar.im/7017841';
const TAX_DEDUCTIBLE_DONATION_URL = 'https://nedar.im/gdRC';

export default function Donate() {
  const { language } = useLanguage();
  const english = language === 'en';
  return (
    <main className="min-h-screen py-12 bg-gray-50" dir={english ? 'ltr' : 'rtl'}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <Heart className="w-12 h-12 text-green-600 mx-auto mb-5" aria-hidden="true" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            {english ? 'Support Maayan HaBriut' : 'תרומה למעיין הבריאות בשומרון'}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {english ? 'Choose how you would like to support the medical center.' : 'בחרו את מסלול התרומה המתאים לכם והמשיכו לתשלום מאובטח באתר נדרים פלוס.'}
          </p>
          <div className="grid gap-4">
            <a href={DONATION_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg px-6 py-4 text-lg">
              {english ? 'Donate now' : 'תרומה רגילה'} <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href={TAX_DEDUCTIBLE_DONATION_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-green-700 text-green-800 hover:bg-green-50 font-bold rounded-lg px-6 py-4 text-lg">
              {english ? 'Donate through the Section 46 tax-benefit route' : 'תרומה במסלול מוכר לצורכי מס (סעיף 46)'} <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            {english ? 'Tax eligibility depends on the donation route and applicable law. Check the receipt issued by the payment provider.' : 'ההכרה לצורכי מס כפופה לתנאי המסלול ולהוראות הדין. יש לוודא את פרטי הקבלה המונפקת בעת התרומה.'}
          </p>
        </div>
      </div>
    </main>
  );
}
