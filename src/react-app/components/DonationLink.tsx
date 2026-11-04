import type { AnchorHTMLAttributes } from 'react';
import { useLanguage } from '../i18n';

export default function DonationLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { language, localizePath } = useLanguage();
  return (
    <a {...props} href={language === 'en' ? localizePath('/donate') : 'https://nedar.im/gdRC'}>
      <span className="inline-flex flex-col items-center text-center">
        <span className="inline-flex items-center justify-center gap-2">{children}</span>
        <span className="block text-xs font-normal mt-1">
          {language === 'en' ? '(U.S. & Israel donation options)' : '(מוכר לצורכי מס)'}
        </span>
      </span>
    </a>
  );
}
