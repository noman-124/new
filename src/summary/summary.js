import React, { useState, useEffect } from "react";
import { TbEdit } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Summary = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    user: "Auto hub",
    representative: "Noman",
    contactNo: "0300-0000000",
    email: "Autohub123@gmail.com",
    address: "Lower Canal road Faisalabad",
    officeNo: "048736",
    packageType: "Normal",
    isActive: "Yes",
    city: "Faisalabad",
    noOfProducts: "7",
  });

  useEffect(() => {
    setFormData({
      ...formData,
    });
  }, []);
  const [originalData, setOriginalData] = useState(formData);

  const handleEdit = () => {
    setOriginalData(formData);
    setIsEditable(true);
  };

  const handleCancel = () => {
    setFormData(originalData);
    setIsEditable(false);
  };

  const handleSave = () => {
    setIsEditable(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <br />

      {/* <div className="flex justify-center gap-4">
        <button
          onClick={() => changeLang("en")}
          className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
        >
          English
        </button>
        <button
          onClick={() => changeLang("ar")}
          className="bg-blue-500 px-4 py-1 rounded text-white hover:bg-blue-600"
        >
          Arabic
        </button>
      </div> */}
      <br />

      <div className="w-[90%] m-auto">
        <a href="" className="flex justify-center items-center text-blue-500">
          <u>{t("loginAsAutohub")}</u>
        </a>
        <div className="flex justify-between items-center m-2 ">
          <p className="font-bold text-blue-900 text-2xl">{t("summary")}</p>
          <button
            className="flex bg-blue-500 px-4 py-1 rounded text-white gap-1 hover:bg-blue-600"
            onClick={handleEdit}
          >
            {t("edit")}
            <TbEdit className="translate-y-1" />
          </button>
        </div>
        <hr className="border-t border-black" />
        <div className="grid grid-cols-2  m-2 gap-[2%]">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex flex-col  border-gray-400">
              <h1 className="font-bold ">{t(key)}</h1>
              <div
                key={key}
                className={`   
            ${
              isEditable
                ? "border border-black  hover:border-blue-500 p-2 "
                : "border-b border-gray-500"
            }`}
              >
                <input
                  name={key}
                  value={value}
                  className=" bg-transparent  w-full border-none outline-none  "
                  readOnly={!isEditable}
                  disabled={!isEditable}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />

        <div className="flex justify-center gap-4">
          <button
            className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
            onClick={handleCancel}
          >
            {t("cancel")}
          </button>
          <button
            className="bg-blue-500 px-4 py-1 rounded text-white hover:bg-blue-600"
            onClick={handleSave}
          >
            {t("save")}
          </button>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Summary;
