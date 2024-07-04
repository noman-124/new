import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_en from "./components/locales/en/global.json";
import global_ar from "./components/locales/ar/global.json";
import { BrowserRouter } from "react-router-dom";

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: { translation: global_en },
    ar: { translation: global_ar },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
