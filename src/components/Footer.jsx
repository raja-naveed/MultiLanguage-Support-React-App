import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div
      className="w-full h-[245px] "
      style={{
        background: "linear-gradient(208deg, #67C3F3 9.05%, #5A98F2 76.74%)",
      }}
    >
      <div className="flex items-center justify-around text-white ">
        <div className="flex  flex-col items-start justify-between gap-y-8 w-1/4 mt-10">
          <img src="/images/logo.svg" alt="" />
          <p className="text-[14px] font-normal">{t("footerdescription")}</p>
          {/* copyright  */}
          <p className="text-[16px] font-normal"> {t("footercopyright")}</p>
        </div>
        {/* second  */}
        <div className="mt-10">
          <h2 className="text-[20px] font-semibold">{t("company")}</h2>
          <div className="flex flex-col gap-y-2">
            <span className="text-[16px]">{t("companyabout")}</span>
            <span className="text-[16px]">{t("companytest")}</span>
            <span className="text-[16px]">{t("companydoctor")}</span>
            <span className="text-[16px]">{t("companyapps")}</span>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-[20px] font-semibold">{t("region")}</h2>
          <div className="flex flex-col gap-y-2">
            <span className="text-[16px]">{t("indonesia")}</span>
            <span className="text-[16px]">{t("singapore")}</span>
            <span className="text-[16px]">{t("hongkong")}</span>
            <span className="text-[16px]">{t("canada")}</span>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-[20px] font-semibold">{t("help")}</h2>
          <div className="flex flex-col gap-y-2">
            <span className="text-[16px]">{t("helpcenter")}</span>
            <span className="text-[16px]">{t("support")}</span>
            <span className="text-[16px]">{t("instruct")}</span>
            <span className="text-[16px]">{t("works")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
