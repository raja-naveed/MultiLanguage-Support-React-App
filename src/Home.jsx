import { useTranslation } from "react-i18next";
import Header from "./Header";

function Home() {
          const { t } = useTranslation();


   

  return (
    <div className="bg-gray-400 text-black min-h-screen">
      {/* Header */}
      <Header />
    

      {/* Main content area */}
      <main className="px-4 py-8">
        {/* Featured playlist */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("featured")}</h2>
          {/* Playlist cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Playlist card */}
            <div className="bg-gray-800 rounded-md p-4">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fplaylist&psig=AOvVaw0RsuIVQKfwima19JZRy_29&ust=1701501296903000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCOCq67XY7YIDFQAAAAAdAAAAABAE"
                alt="Playlist 1"
                className="w-full rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">{t("playlist1")}</h3>
              <p className="text-sm">{t("curated")}</p>
            </div>
            {/* Add more playlist cards here */}
          </div>
        </section>

        {/* Recently Played */}
        <section>
          <h2 className="text-2xl font-bold mb-4">{t("recent")}</h2>
          {/* Track cards */}
          <div className="grid grid-cols-3 gap-4">
            {/* Track card */}
            <div className="bg-gray-800 rounded-md p-4">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gq.com%2Fstory%2Froad-trip-playlist-advice&psig=AOvVaw0RsuIVQKfwima19JZRy_29&ust=1701501296903000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCOCq67XY7YIDFQAAAAAdAAAAABAI"
                alt="Track 1"
                className="w-full rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">{t("track1")}</h3>
              <p className="text-sm">  {t("artistname")} </p>
            </div>
            {/* Add more track cards here */}
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

export default Home;
