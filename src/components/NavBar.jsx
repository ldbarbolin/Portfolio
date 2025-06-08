import { useEffect } from "react";
import { Menu } from "react-feather";
import { useTranslation } from "react-i18next";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            David <span className="text-amber-500">INZA</span>
          </a>

          {/* Botón para menú en mobile */}
          <div
            className="relative cursor-pointer z-40 md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <Menu className="w-6 h-6 text-white"/>
          </div>

          {/* Links de navegación */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-amber-500 transition-colors hover:border-b-2 hover:border-b-amber-500">
              {t("home")}
            </a>
            <a href="#about" className="text-gray-300 hover:text-amber-500 transition-colors hover:border-b-2 hover:border-b-amber-500">
              {t("about")}
            </a>
            <a href="#skills" className="text-gray-300 hover:text-amber-500 transition-colors hover:border-b-2 hover:border-b-amber-500">
              {t("skills")}
            </a>
            <a href="#experience" className="text-gray-300 hover:text-amber-500 transition-colors hover:border-b-2 hover:border-b-amber-500">
              {t("experience")}
            </a>
            <a href="#projects" className="text-gray-300 hover:text-amber-500 transition-colors hover:border-b-2 hover:border-b-amber-500">
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
        </div>
      </div>
    </nav>
  );
};
