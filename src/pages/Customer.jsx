import { useTranslation } from "react-i18next";

const Customer = () => {
  const { t } = useTranslation();


  return (
    <div className="py-6 flex items-center my-40 flex-col">
      <div
        className="w-[1000px] h-[300px] shadow-xl border rounded-[20px] flex flex-col items-center  p-5"
        style={{
          background: "linear-gradient(208deg, #67C3F3 9.05%, #5A98F2 76.74%)",
        }}
      >
        <div className="text-white mt-4">
          <h2 className="text-[30px] font-normal">{t("customer")}</h2>
        </div>
        {/* second section  */}
        <div className="flex items-center justify-around text-white">
          <div className="flex items-center gap-x-4 ">
            {/* img  */}
            <img src="/images/customerr.svg" alt="" className="rounded-full border-white border-[px]" />
            <div>
              <h3 className="font-bold">Edward Newgate</h3>
              <p>{t("founder")}</p>
            </div>
          </div>
          <div className="w-1/2">
            {/* text  */}
            {t("customerbrief")}
          </div>
        </div>
      </div>
      <div>{/* arrows for next previous and slider dots  */}</div>
    </div>
  );
};

export default Customer;
