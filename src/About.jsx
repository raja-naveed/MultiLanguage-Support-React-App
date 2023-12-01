import { useTranslation } from "react-i18next";
import Header from "./Header";

function About() {
          const { t } = useTranslation();

  return (
    <div className="bg-gray-400 text-black min-h-screen">
    
    <Header />
      {/* Main content area */}
      <main className="px-4 py-8">
        {/* About page content */}
        <section>
          <h2 className="text-2xl font-bold mb-4">{t("aboutspot")}</h2>
          <p className="mb-4">
          {t("aboutdescription")}
          </p>
          {/* Add more content about the Spotify clone */}
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-4">
        <p>&copy; 2023 Spotify Clone</p>
      </footer>
    </div>
  );
}

export default About;
