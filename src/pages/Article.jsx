import { useTranslation } from "react-i18next";

const Article = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-6 relative z-0">
      <div className="z-10 flex flex-col items-center">
          <h2 className=" text-[36px] font-[700] border-b-2">
          {t('Article')}
          </h2>
          <div className=" flex items-center justify-evenly gap-x-4 mt-8">
            <div className="flex flex-col items-center w-[300px] h-[450px] bg-white rounded-lg p-6 shadow-xl">
              <img
                src="/images/article1.svg"
                alt="Image 1"
                className=" rounded-md mb-4"
              />
              <h3 className="text-[20px] font-semibold mb-2">
              {t('article1')}
              </h3>
              <p className="text-center text-[16px]">
              {t('article1d')}
              </p>
              <button className="text-[12px] border-blue-600 mt-4 hover:bg-white hover:text-blue-600 rounded-full border font-bold p-4 text-blue-600">
              {t('readmore')}
              </button>
            </div>
            <div className="flex flex-col items-center w-[300px] h-[450px] bg-white rounded-lg p-6 shadow-xl">
              <img
                src="/images/article2.svg"
                alt="Image 1"
                className="  rounded-md mb-4"
              />
              <h3 className="text-[20px] font-semibold mb-2">
              {t('article2')}
              </h3>
              <p className="text-center text-[16px]">
              {t('article2d')}
              </p>
              <button className="text-[12px] border-blue-600 mt-4 hover:bg-white hover:text-blue-600 rounded-full border font-bold p-4 text-blue-600">
              {t('readmore')}
              </button>
            </div>
            <div className="flex flex-col items-center w-[300px] h-[450px] bg-white rounded-lg p-6 shadow-xl">
              <img
                src="/images/article3.svg"
                alt="Image 1"
                className=" rounded-md mb-4"
              />
              <h3 className="text-[20px] font-semibold mb-2">
              {t('article3')}
              </h3>
              <p className="text-center text-[16px]">
              {t('article3d')}
              </p>
              <button className="text-[12px] border-blue-600 mt-4 hover:bg-white hover:text-blue-600 rounded-full border font-bold p-4 text-blue-600">
              {t('readmore')}
              </button>
            </div>
          </div>
          <button className="text-[18px] border-blue-600 mt-10  hover:bg-white hover:text-blue-600  rounded-full border font-bold p-4 text-blue-600 ">
          {t('learnmore')}
          </button>
        </div>
      {/* <div className="absolute left-[-40px] top-[20%] z-0 ">
      <img src="/images/servicesbg.svg" alt="" className="max-w-[76%]" />
    </div> */}
    </div>
  );
};

export default Article;
