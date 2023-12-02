import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="py-6 flex items-center justify-center mt-20 gap-20">
      <div className="w-1/2">
        <img src="/images/landingimg.svg" alt="" />
      </div>
      <div className="w-1/2 flex flex-col items-start space-y-4">
        {/* text  */}
        <h2 className="text-[48px] font-[600] mb-6">
        {t('leading')}
        </h2>
        <p className="text-[21px] mb-4 text-[#7D7987]">
        {t('leadingdescription')}
        </p>
        <button className="text-[18px] border-blue-600 mt-10  hover:bg-white hover:text-blue-600  rounded-full border font-bold p-4 text-blue-600 ">
        {t('learnmore')}
        </button>
      </div>
    </div>
  );
};

export default Landing;
