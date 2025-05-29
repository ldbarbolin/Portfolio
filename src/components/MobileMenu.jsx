import { useTranslation } from "react-i18next";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const { t, i18n } = useTranslation();
   const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-3xl text-white focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {t("home")}
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {t("about")}
      </a>

      <a
        href="#skills"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {t("skills")}
      </a>

      <a
        href="#experience"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {t("experience")}
      </a>

      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {t("projects")}
      </a>
      {/* Selector de idioma */}
            <div className="ml-4 space-x-2">
              <button
                onClick={() => changeLanguage("es")}
                className="text-sm text-white hover:text-amber-500"
              >
                ES
              </button>
              <span className="text-white">|</span>
              <button
                onClick={() => changeLanguage("en")}
                className="text-sm text-white hover:text-amber-500"
              >
                EN
              </button>
            </div>
    </div>
  );
};
