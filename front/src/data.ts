import { PaperActionItem, SidebarItem } from "./types";

const APPLICATION_NAME = "Istos%20App";

// URL to 37x37px logo of your application (URI encoded)
const APPLICATION_LOGO_URL = "https://nfid.one/icons/favicon-96x96.png";

const AUTH_PATH =
  "/authenticate/?applicationName=" +
  APPLICATION_NAME +
  "&applicationLogo=" +
  APPLICATION_LOGO_URL +
  "#authorize";

const canistersIds = {
  istos: {
    ic: "dq4y3-vqaaa-aaaan-qejwq-cai",
  },
};

const actionsPapers: PaperActionItem[] = [
  {
    id: 0,
    title: "Camineria en mal estado",
    image:
      "https://images.freeimages.com/images/large-previews/9fc/rua-rachada-1228037.jpg",
    address: "Propatria, Parroquia Sucre, Municipio libertador",
    amount: "$2000",
    contributors: 5,
  },
  {
    id: 1,
    title: "Lijar y pintar pared",
    image:
      "https://www.arqhys.com/wp-content/fotos/2014/02/Ideas-para-pintar-paredes-h%C3%BAmedas..jpg",
    address: "Baruta, La Trinidad",
    amount: "$100",
    contributors: 2,
  },
  {
    id: 2,
    title: "Fuga de agua, principal de chacao, chacao, chacao, chacao, chacao",
    image:
      "https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2023/03/23/2923602.jpg",
    address: "Chacao, Chacap",
    amount: "$1000",
    contributors: 20,
  },
];

const dataForCarrousel: string[] = [
  "https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2023/03/23/2923602.jpg",
  "https://www.arqhys.com/wp-content/fotos/2014/02/Ideas-para-pintar-paredes-h%C3%BAmedas..jpg",
  "https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2023/03/23/2923602.jpg",
];

export const data = {
  APPLICATION_NAME,
  APPLICATION_LOGO_URL,
  AUTH_PATH,
  canistersIds,
  actionsPapers,
  dataForCarrousel,
};
