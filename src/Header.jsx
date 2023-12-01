import { useState } from 'react';
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
  const [lang, setLang] = useState('en');

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-gray-800 text-white">
      {/* Spotify logo */}
      <div className="w-20 text-gray-100">
        {/* Your SVG or image code for the Spotify logo */}
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <Link to="/">
            <li className="uppercase">{t('home')}</li>
          </Link>
          <Link to="/search">
            <li className="uppercase">{t('search')}</li>
          </Link>
          <Link to="/about">
            <li className="uppercase">{t('library')}</li>
          </Link>
        </ul>
      </nav>

      {/* Language selector */}
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
    </header>
  );
};

export default Header;
