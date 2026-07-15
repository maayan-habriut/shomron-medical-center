import { useState } from 'react';
import { Heart, CreditCard, Shield, CheckCircle, Gift } from 'lucide-react';
import { CreateDonation } from '@/shared/types';

import { useLanguage } from '../i18n';
import EnglishDonateContent from './EnglishDonatePage';

function DonateHebrew() {
  const [formData, setFormData] = useState<CreateDonation>({
    donor_name: '',
    donor_email: '',
    donor_phone: '',
    amount: 0,
    is_anonymous: false,
    dedication_message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const suggestedAmounts = [100, 250, 500, 1000, 2500, 5000];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
               name === 'amount' ? Number(value) : value
    }));
  };

  const handleAmountSelect = (amount: number) => {
    setFormData(prev => ({ ...prev, amount }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          donor_name: '',
          donor_email: '',
          donor_phone: '',
          amount: 0,
          is_anonymous: false,
          dedication_message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            תרומה למרכז הרפואי
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            כל תרומה, קטנה כגדולה, מקרבת אותנו למטרה: מרכז רפואי איכותי ונגיש לכל תושבי השומרון
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center ml-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">טופס תרומה</h2>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 ml-3" />
                <span className="text-green-700">תודה רבה! הבקשה לתרומה נשלחה בהצלחה.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 rounded-lg">
                <span className="text-red-700">שגיאה בשליחת הבקשה. אנא נסו שוב.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  סכום התרומה (₪) *
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {suggestedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 px-4 rounded-lg border font-semibold transition-all ${
                        formData.amount === amount
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                      }`}
                    >
                      ₪{amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount || ''}
                  onChange={handleInputChange}
                  min="1"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                  placeholder="או הכניסו סכום אחר"
                />
              </div>

              {/* Personal Information */}
              <div>
                <label htmlFor="donor_name" className="block text-sm font-medium text-gray-700 mb-2">
                  שם מלא *
                </label>
                <input
                  type="text"
                  id="donor_name"
                  name="donor_name"
                  value={formData.donor_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                  placeholder="הכנס את שמך המלא"
                />
              </div>

              <div>
                <label htmlFor="donor_email" className="block text-sm font-medium text-gray-700 mb-2">
                  אימייל *
                </label>
                <input
                  type="email"
                  id="donor_email"
                  name="donor_email"
                  value={formData.donor_email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                  placeholder="הכנס את כתובת האימייל שלך"
                />
              </div>

              <div>
                <label htmlFor="donor_phone" className="block text-sm font-medium text-gray-700 mb-2">
                  טלפון
                </label>
                <input
                  type="tel"
                  id="donor_phone"
                  name="donor_phone"
                  value={formData.donor_phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                  placeholder="הכנס את מספר הטלפון שלך"
                />
              </div>

              {/* Dedication Message */}
              <div>
                <label htmlFor="dedication_message" className="block text-sm font-medium text-gray-700 mb-2">
                  הקדשה או הודעה מיוחדת
                </label>
                <textarea
                  id="dedication_message"
                  name="dedication_message"
                  value={formData.dedication_message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right resize-none"
                  placeholder="לזכר... / לכבוד... / הודעה מיוחדת (אופציונלי)"
                />
              </div>

              {/* Anonymous Donation */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_anonymous"
                  name="is_anonymous"
                  checked={formData.is_anonymous}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ml-2"
                />
                <label htmlFor="is_anonymous" className="text-gray-700">
                  תרומה אנונימית (השם לא יופיע ברשימת התורמים)
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.amount <= 0}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 space-x-reverse"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>תרום ₪{formData.amount}</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
              <Shield className="w-4 h-4 ml-1" />
              <span>התשלום מאובטח ומוגן</span>
            </div>
          </div>

          {/* Donation Information */}
          <div className="space-y-8">
            {/* Why Donate */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center ml-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">למה לתרום?</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">רפואה איכותית ונגישה לכל תושבי השומרון</p>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">קיצור זמני המתנה לטיפול רפואי</p>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">חיזוק הקהילה המקומית</p>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">יצירת מקומות עבודה איכותיים באזור</p>
                </div>
              </div>
            </div>

            {/* Tax Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">הטבות מס</h3>
              <p className="text-gray-700 mb-4">
                כעמותה רשומה (מס' 580826667), אנחנו מוכרים לצורך ניכוי מס. 
                כל תרומה מזכה בהטבת מס בהתאם לחוק.
              </p>
              <p className="text-sm text-gray-600">
                * אישור 46 יישלח לכתובת האימייל שלכם לאחר התרומה
              </p>
            </div>

            {/* Transparency */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">שקיפות כספית</h3>
              <p className="text-gray-700 mb-4">
                אנחנו מתחייבים לשקיפות מלאה בניהול הכספים. 
                כל תרומה מושקעת ישירות בפרויקט המרכز הרפואי.
              </p>
              <div className="text-sm text-gray-600">
                <p>• דוחות כספיים רבעוניים</p>
                <p>• עדכוני התקדמות שוטפים</p>
                <p>• פירוט השימוש בתרומות</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Donate() {
  const { language } = useLanguage();
  return language === 'en' ? <EnglishDonateContent /> : <DonateHebrew />;
}
