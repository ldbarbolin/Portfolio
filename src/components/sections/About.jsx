import React from "react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="md:min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-500 to-purple-600 bg-clip-text text-transparent text-center">
          {t("about1.title")}
        </h2>
        <div className="rounded-xl p-8 border-white/10 border g-stone-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <p className="text-gray-300 mb-6">
            {t("about1.paragraph1")}
          </p>
          <p className="text-gray-300 mb-6">
            {t("about1.paragraph2")}
          </p>
        </div>
      </div>
    </section>
  );
};
