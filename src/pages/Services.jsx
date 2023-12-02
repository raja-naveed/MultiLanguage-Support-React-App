import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen py-6 relative z-0">
      {/* <div className="absolute left-[-40px] top-[20%] z-0 ">
        <img src="/images/servicesbg.svg" alt="" className="max-w-[76%]" />
      </div> */}
      <div className="z-10 flex items-center">
        <div className="text-center">
          <h2 className=" text-[36px] font-[700] border-b-2">{t('services')}</h2>
          <p className="text-[18px] font-[300] text-[#7D7987]">
          {t('servicesdescription')}
          </p>
          <div className=" flex flex-col items-center space-y-6 mt-8">
            <div className="flex space-x-4">
              <div className="w-[256px] h-[250px] shadow-xl border rounded-[20px] flex items-center justify-end p-5 flex-col">
                <img src="/images/search.svg" className="w-[60px]" alt="" />
                <h3 className="font-semibold text-[24px]">{t('servicedoctor')}</h3>
                <p className="text-[15px]">
                {t('doctordescritpion')}
                </p>
              </div>

              <div className="w-[256px] h-[250px] shadow-xl border rounded-[20px] flex items-center justify-end p-5 flex-col">
                <img src="/images/med.svg" className="w-[60px]" alt="" />
                <h3 className="font-semibold text-[24px]">{t('servicepharmacy')}</h3>
                <p className="text-[15px]">
                {t('pharmacydescription')}
                </p>
              </div>
              <div className="w-[256px] h-[250px] shadow-xl border rounded-[20px] flex items-center justify-end p-5 flex-col">
                <img src="/images/consultant.svg" className="w-[60px]" alt="" />
                <h3 className="font-semibold text-[24px]">{t('serviceconsult')}</h3>
                <p className="text-[15px]">
                {t('consultdescription')}
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-[256px] h-[250px] shadow-xl border rounded-[20px] flex items-center justify-end p-5 flex-col">
                <img src="/images/detailicon.svg" className="w-[60px]" alt="" />
                <h3 className="font-semibold text-[24px]">{t('servicedetail')}</h3>
                <p className="text-[15px]">
                {t('detaildescription')}
                </p>
              </div>
              <div className="w-[256px] h-[250px] shadow-xl border rounded-[20px] flex items-center justify-end p-5 flex-col">
                <img src="/images/kit.svg" className="w-[60px]" alt="" />
                <h3 className="font-semibold text-[24px]">{t('servicecare')}</h3>
                <p className="text-[15px]">
                {t('caredescription')}
                </p>
              </div>
              <div className="w-[256px] h-[250px] shadow-xl border rounded-[20px] flex items-center justify-end p-5 flex-col">
                <img src="/images/track.svg" className="w-[60px]" alt="" />
                <h3 className="font-semibold text-[24px]">{t('servicetrack')}</h3>
                <p className="text-[15px]">
                {t('trackdescription')}
                </p>
              </div>
            </div>
          </div>
          <button className="text-[18px] border-blue-600 mt-10  hover:bg-white hover:text-blue-600  rounded-full border font-bold p-4 text-blue-600 ">
          {t('learnmore')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
