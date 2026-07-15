import { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { NewsPost } from '@/shared/types';
import { useLanguage } from '../i18n';
import HebrewOnlyPage from './HebrewOnlyPage';

export default function News() {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        setPosts(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (language === 'en') {
    return <HebrewOnlyPage />;
  }

  if (loading) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            חדשות ועדכונים
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            עקבו אחר ההתקדמות שלנו והישגינו בדרך להקמת המרכז הרפואי
          </p>
        </div>

        {posts.length === 0 ? (
          /* No Posts Yet */
          <div className="text-center py-16">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                בקרוב יפורסמו עדכונים
              </h2>
              <p className="text-gray-600 mb-8">
                אנחנו עובדים קשה על הפרויקט ובקרוב נפרסם עדכונים על ההתקדמות
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">מה תוכלו למצוא כאן בקרוב:</h3>
                  <ul className="text-gray-600 space-y-2 text-right">
                    <li>• עדכונים על התקדמות הבנייה</li>
                    <li>• מילות אבן דרך חשובות בפרויקט</li>
                    <li>• הכרת צוות והתנדבים</li>
                    <li>• אירועי גיוס תרומות</li>
                    <li>• שיתופי פעולה חדשים</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* News Posts */
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-6 text-gray-500">
                    <Calendar className="w-5 h-5 ml-2" />
                    <span className="ml-4">{formatDate(post.created_at)}</span>
                    <Clock className="w-5 h-5 mr-4" />
                    <span>עדכון חדש</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {post.title}
                  </h2>
                  
                  {post.summary && (
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {post.summary}
                    </p>
                  )}
                  
                  <div 
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
                  />
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        פורסם: {formatDate(post.created_at)}
                      </span>
                      <div className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                        <span className="ml-2">קרא עוד</span>
                        <ArrowLeft className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter Signup */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">הישארו מעודכנים</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              צרו קשר כדי לקבל עדכונים ישירים על התקדמות הפרויקט
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              הצטרפו לעדכונים
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
