import electrobol from "../../assets/img/electrobol.png";
import competize from "../../assets/img/competize.png";
import { listIcon } from "./listIcon";

export const listPro = () => {
  return [
    {
      id: 1,
      title: "projects1.1.title",
      img: electrobol,
      tecnologia: [
        listIcon()[0].icon,
        listIcon()[2].icon,
        listIcon()[3].icon,
        listIcon()[4].icon,
      ],
      description: "projects1.1.description",
      link: "https://github.com/ldbarbolin/system-electrobol",
    },
    {
      id: 2,
      title: "projects1.2.title",
      img: competize,
      tecnologia: [
        listIcon()[0].icon,
        listIcon()[2].icon,
        listIcon()[3].icon,
        listIcon()[4].icon,
      ],
      description: "projects1.2.description",
      link: "https://github.com/ldbarbolin/System-Soccer",
    },
  ];
};
