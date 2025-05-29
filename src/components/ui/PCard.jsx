import { GitHub } from "react-feather";
import { listPro } from "../hooks/listPro";
import { useTranslation } from "react-i18next";

const CardProject = ({ id, title, img, tecnologia, description, link }) => {
  const { t } = useTranslation();

  return (
    <div className="border-2 border-white/10 px-3 py-3 w-auto rounded-xl mb-6 bg-stone-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <img src={img} />
      <h2
        name={id}
        className="text-2xl font-bold mb-1 text-amber-500 bg-clip-text text-left"
      >
        {t(title)}
      </h2>
      <p className="text-gray-300 text-lg mb-4">{t(description)}</p>
      <div className="flex gap-3 mb-4">
        {tecnologia.map((className, index) => (
          <i key={index} className={`${className} !text-4xl`}></i>
        ))}
      </div>
      <div className="h-11 gap-2 w-35 border border-amber-500 rounded-full px-3 flex items-center text-amber-500 text-base hover:bg-amber-500 hover:text-black hover:transition-all duration-500">
        <a href={link}>{t("readMore")}</a>
        <GitHub />
      </div>
    </div>
  );
};

export const PCard = () => {
  const listProjects = listPro();
  return (
    <>
      {listProjects.map((item) => (
        <CardProject
          key={item.id}
          title={item.title}
          img={item.img}
          tecnologia={item.tecnologia}
          description={item.description}
          link={item.link}
        />
      ))}
    </>
  );
};
