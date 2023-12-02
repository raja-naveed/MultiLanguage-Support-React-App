import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen py-6 w-full">
      <div className="absolute left-[-40px] top-[20%]">
        <img src="/images/element.svg" alt="" />
      </div>
      <div className="flex items-center justify-between">
        <div className="w-1/2 flex flex-col items-start space-y-4">
          {/* text  */}
          <h2 className="text-[48px] font-[700] mb-6">
          {t('heroheading')}
          </h2>
          <p className="text-[21px] mb-4 text-[#7D7987]">
          {t('herodescription')}

          </p>
          <button className="text-[18px] bg-blue-600  hover:bg-white hover:text-blue-600  rounded-full border font-bold p-4 text-white">{t('consult')}</button>
        </div>
        <div className="w-1/2">
          <img src="/images/heroimg.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
