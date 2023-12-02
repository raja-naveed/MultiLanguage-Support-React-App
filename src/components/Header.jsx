import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const languages = [
  { value: 'en', text: 'English' },
  { value: 'hi', text: 'Hindi' },
  { value: 'ur', text: 'Urdu' },
  { value: 'nl', text: 'Dutch' },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const storedLang = localStorage.getItem('selectedLanguage') || 'en';
  const [lang, setLang] = useState(storedLang);

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
    localStorage.setItem('selectedLanguage', selectedLang); 
  };
  

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <header className="flex items-center justify-between py-4 px-6 ">
      <Link to="/" className="">
        <img src="/images/logo.svg" alt="logo" />
      </Link>
      <nav className="space-x-6 flex items-center text-gray-900 font-semibold">
       <div className='space-x-6 '>
       <Link to="/home" className="text-gray-700 hover:border-b-2 border-gray-800 transition-opacity duration-500 hover:text-blue-500">
       {t('navhome')}
        </Link>
        <Link to="/find-doctor" className="text-gray-700 hover:border-b-2 border-gray-800 transition-opacity duration-500 hover:text-blue-500">
        {t('finddoctor')}
        </Link>
        <Link to="/apps" className="text-gray-700 hover:text-blue-500 hover:border-b-2 border-gray-800 transition-opacity duration-500">
        {t('navapps')}
        </Link>
        <Link to="/testimonials" className="text-gray-700 hover:text-blue-500 hover:border-b-2 border-gray-800 transition-opacity duration-500">
        {t('navtestinomails')}
        </Link>
        <Link to="/about-us" className="text-gray-700 hover:text-blue-500 hover:border-b-2 border-gray-800 transition-opacity duration-500">
        {t('about')}
                </Link>
       </div>
        <div className="">
        <label htmlFor="language">{t('selectlanguage')}:</label>
        <select
          id="language"
          value={lang}
          onChange={handleChange}
          className="px-2 py-1 border rounded-md ml-2 text-black"
        >
          {languages.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
      </div>

     
      </nav>

      
    </header>
  );
};

export default Header;
