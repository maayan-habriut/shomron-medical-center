import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { CreateContactMessage } from '@/shared/types';
import { useLanguage } from '../i18n';

export default function Contact() {
  const { t, dir } = useLanguage();
  const [formData, setFormData] = useState<CreateContactMessage>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const rowReverse = dir === 'rtl' ? 'space-x-reverse' : '';
  const textAlign = dir === 'rtl' ? 'text-right' : 'text-left';
  const iconMargin = dir === 'rtl' ? 'ml-3' : 'mr-3';
  const blockIconMargin = dir === 'rtl' ? 'ml-4' : 'mr-4';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.contact.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.formTitle}</h2>

            {submitStatus === 'success' && (
              <div className={`mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex items-center ${rowReverse}`}>
                <CheckCircle className={`w-5 h-5 text-green-600 ${iconMargin}`} />
                <span className="text-green-700">{t.contact.successMessage}</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 rounded-lg">
                <span className="text-red-700">{t.contact.errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name', label: t.contact.nameLabel, type: 'text', placeholder: t.contact.namePlaceholder, required: true },
                { id: 'email', label: t.contact.emailLabel, type: 'email', placeholder: t.contact.emailPlaceholder, required: true },
                { id: 'phone', label: t.contact.phoneLabel, type: 'tel', placeholder: t.contact.phonePlaceholder, required: false },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof CreateContactMessage] as string}
                    onChange={handleInputChange}
                    required={field.required}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${textAlign}`}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t.contact.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${textAlign}`}
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${rowReverse}`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t.contact.submit}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.detailsTitle}</h2>
              <div className="space-y-6">
                <div className={`flex items-start gap-4 ${rowReverse}`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.common.address}</h3>
                    <p className="text-gray-600">{t.common.addressValue}</p>
                  </div>
                </div>
                <div className={`flex items-start gap-4 ${rowReverse}`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.common.phone}</h3>
                    <a href="tel:050-6655586" className="text-gray-600 hover:text-blue-600 transition-colors">
                      {t.common.phoneValue}
                    </a>
                  </div>
                </div>
                <div className={`flex items-start gap-4 ${rowReverse}`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.common.email}</h3>
                    <a href="mailto:mbshomron@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      {t.common.emailValue}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-white">
              <div className={`flex items-center mb-6 ${rowReverse}`}>
                <div className={`w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center ${blockIconMargin}`}>
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{t.contact.whatsappTitle}</h3>
              </div>
              <p className="mb-6">{t.contact.whatsappP}</p>
              <a
                href="https://wa.me/972506655586"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-block"
              >
                {t.contact.openWhatsapp}
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.contact.hoursTitle}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">{t.contact.hoursSunThu}</span>
                  <span className="text-gray-600">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">{t.contact.hoursFri}</span>
                  <span className="text-gray-600">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">{t.contact.hoursSat}</span>
                  <span className="text-gray-600">{t.contact.hoursClosed}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">{t.contact.hoursNote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
