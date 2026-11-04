import { Heart, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n';

const DONATION_URL = 'https://nedar.im/7017841';
const TAX_DEDUCTIBLE_DONATION_URL = 'https://nedar.im/gdRC';

export default function Donate() {
  const { language } = useLanguage();
  const english = language === 'en';

  if (english) return (
    <main className="min-h-screen py-12 bg-gray-50" dir="ltr">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Support Maayan HaBriut</h1>
        <p className="text-lg text-gray-600 text-center mb-8">Help bring urgent medical care closer to families in Shomron. Choose the donation method that works for you.</p>
        <div className="space-y-6">
          <section className="bg-white rounded-xl shadow p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-3">Donate in the United States</h2>
            <p className="text-gray-600 mb-5">U.S. donations to Friends of Ma'ayan Habriut Inc. are tax-deductible to the extent permitted by law.</p>
            <a href="https://abcharity.org/campaign.php?id=8038" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg px-6 py-4">Donate Online via AB Charity</a>
          </section>
          <section className="bg-white rounded-xl shadow p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">U.S. Bank Transfer</h2>
            <dl className="space-y-4 break-words">
              <div><dt className="text-sm text-gray-500">Beneficiary / Account name</dt><dd className="font-semibold">FRIENDS OF MA’AYAN HABRIUT INC</dd></div>
              <div><dt className="text-sm text-gray-500">Beneficiary address</dt><dd>495 Route 70 #1025, Brick, NJ 08723, USA</dd></div>
              <div><dt className="text-sm text-gray-500">Bank</dt><dd>First Commerce Bank</dd></div>
              <div><dt className="text-sm text-gray-500">Bank address</dt><dd>1700 Avenue of the States, Lakewood, NJ 08701, USA</dd></div>
              <div><dt className="text-sm text-gray-500">Account number</dt><dd className="font-semibold">2010121313</dd></div>
              <div><dt className="text-sm text-gray-500">ABA / Wire routing number</dt><dd className="font-semibold">021214082</dd></div>
            </dl>
            <p className="text-sm text-gray-600 mt-5">For ACH or international transfers, please contact us to confirm any additional banking requirements.</p>
          </section>
          <section className="bg-white rounded-xl shadow p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-3">Donate by Check</h2>
            <p className="text-gray-600 mb-3">Please make your check payable to Friends of Ma'ayan Habriut Inc. and mail it to:</p>
            <address className="not-italic leading-relaxed">Friends of Ma'ayan Habriut Inc.<br />495 Route 70 #1025<br />Brick, NJ 08723, USA</address>
            <p className="text-sm text-gray-600 mt-4">Include your name and email address so we can send your donation receipt.</p>
          </section>
          <section className="bg-white rounded-xl shadow p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-3">Donate in Israel</h2>
            <p className="text-gray-600 mb-4">Donate through Veyiten Yosef via Nedarim Plus. This is the Israeli tax-deductible donation route.</p>
            <a href={TAX_DEDUCTIBLE_DONATION_URL} target="_blank" rel="noopener noreferrer" className="block text-center border-2 border-green-700 text-green-800 font-bold rounded-lg px-6 py-4">Donate in Israel</a>
          </section>
        </div>
        <p className="text-center text-gray-600 mt-8">For transfer assistance or a donation receipt, email <a className="text-blue-700 underline" href="mailto:mbshomron@gmail.com">mbshomron@gmail.com</a>. For bank transfers, include your name, donation date and amount.</p>
      </div>
    </main>
  );

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
