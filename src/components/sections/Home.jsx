import { Download, GitHub, Linkedin, Mail } from "react-feather";
import { Photo } from "../ui/Photo";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="md:min-h-screen flex items-center justify-center">
      <div className="container mx-auto h-full px-4 pt-20 md:pt-0">
        <div className="flex flex-col xl:flex-row items-center justify-center">
          <div className="text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-purple-600 bg-clip-text text-transparent">
          {t("home1.greeting")}
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-purple-600 bg-clip-text text-transparent leading-right">
              David Barbolin
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
              {t("home1.description")}
            </p>
            <div className="flex gap-6">
              <button className="h-11 rounded-full px-3 uppercase flex items-center gap-2 border-2 border-amber-500 bg-transparent text-amber-500 hover:bg-amber-500 hover:text-black transition-colors cursor-pointer">
                <a href="https://drive.google.com/file/d/1T65-sfZEhgC98yxDuUE8JErbFdFUobGS/view?usp=drive_link">
                  {t("home1.download")}
                </a>
                <Download />
              </button>
              <div className="mb-8 xl:mb-0 flex gap-6">
                <a href="https://github.com/ldbarbolin?tab=repositories">
                  <GitHub className="w-11 h-11 border border-amber-500 rounded-full px-2 flex justify-center items-center text-amber-500 text-3xl hover:bg-amber-500 hover:text-black hover:transition-all duration-500" />
                </a>
                <a href="https://www.linkedin.com/in/ldbarbolin/">
                  <Linkedin className="w-11 h-11 border border-amber-500 rounded-full px-2 flex justify-center items-center text-amber-500 text-base hover:bg-amber-500 hover:text-black hover:transition-all duration-500" />
                </a>
                <div className="h-11 gap-2 border border-amber-500 rounded-full px-3 flex items-center text-amber-500 text-base hover:bg-amber-500 hover:text-black hover:transition-all duration-500">
                  <Mail />
                  ldbarbolin@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
