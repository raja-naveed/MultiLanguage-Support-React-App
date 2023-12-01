import { useTranslation } from "react-i18next";
import Header from "./Header";

const SpotifyClone = () => {
    const { t } = useTranslation();
    return (
    <div className="bg-gray-400 text-black min-h-screen">
    {/* Header */}
        <Header />

    {/* Main content area */}
    <main className="px-4 py-8">
      {/* Search results */}
      <section>
        <h2 className="text-2xl font-bold mb-4">{t("searchresult")}</h2>
        {/* Display search results here */}
        <div className="grid grid-cols-3 gap-4">
          {/* Search result card */}
          <div className="bg-gray-800 rounded-md p-4">
            <img
              src="search_result_image.png"
              alt="Search Result"
              className="w-full rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold">{t("searchs")}</h3>
            <p className="text-sm">{t("artisitnamedesc")}</p>
          </div>
          {/* Add more search result cards here */}
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer className="text-center py-4">
      <p>&copy; 2023 Spotify Clone</p>
    </footer>
  </div>
);
}
export default SpotifyClone;
