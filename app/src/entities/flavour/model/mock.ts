import cardPersikVerbena from "../assets/card-persik-verbena-overlay.jpg";
import cardMangoChili from "../assets/card-mango-chili.jpg";
import cardArbuzMelissa from "../assets/card-arbuz-melissa.jpg";
import cardAnanasLichi from "../assets/card-ananas-lichi.jpg";
import cardDynyaMyata from "../assets/card-dynya-myata.jpg";
import cardPersikVerbena2 from "../assets/card-persik-verbena-2.jpg";
import type { Flavour } from "./types";

export const flavours: Flavour[] = [
  {
    id: "persik-verbena",
    name: "Персик + Вербена",
    image: cardPersikVerbena,
    description: "Сочный персик оттеняет свежая вербена — лёгкий летний вкус для тёплых дней.",
  },
  {
    id: "mango-chili",
    name: "Манго + Чили",
    image: cardMangoChili,
    description: "Сладость спелого манго со жгучей ноткой перца чили. Для тех, кто любит контрасты.",
  },
  {
    id: "arbuz-melissa",
    name: "Арбуз + Мелисса",
    image: cardArbuzMelissa,
    description: "Освежающий арбуз в дуэте с мелиссой — самый летний вкус в линейке lapochka.",
  },
  {
    id: "ananas-lichi",
    name: "Ананас + Личи",
    image: cardAnanasLichi,
    description: "Тропический микс ананаса и личи с яркой цветочной ноткой.",
  },
  {
    id: "dynya-myata",
    name: "Дыня + Мята",
    image: cardDynyaMyata,
    description: "Медовая дыня и прохладная мята — освежает даже в самый жаркий день.",
  },
  {
    id: "persik-verbena-limited",
    name: "Персик + Вербена",
    image: cardPersikVerbena2,
    description: "Лимитированная банка вкуса «Персик + Вербена» с новым дизайном.",
  },
];
