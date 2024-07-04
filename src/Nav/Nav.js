import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [change, setChange] = useState(false);
  const handleLang = () => {
    setChange(!change);
    if (change) {
      changeLang("en");
    } else {
      changeLang("ar");
    }
  };
  return (
    <div className="flex justify-between container items-center h-[6vh] border mx-auto gap-2 p-2 bg-teal-200 m-2 rounded-xl">
      <div className="flex gap-4">
        <Link to={"/arabic"}>
          <u> Summary</u>
        </Link>
        <Link to={"/signup"}>
          <u>Signup</u>
        </Link>
      </div>
      <div>
        <button
          onClick={handleLang}
          className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
        >
          {change ? "English" : "العربية"}
        </button>
      </div>
    </div>
  );
};

export default Nav;
