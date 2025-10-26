import { ck2_builder } from "../scripts/builders/ck2_builder";
import { ck3_builder } from "../scripts/builders/ck3_builder";
import { eu4_builder } from "../scripts/builders/eu4_builder";
import { hoi4_builder } from "../scripts/builders/hoi4_builder";
import { ir_builder } from "../scripts/builders/ir_builder";
import { vic3_builder } from "../scripts/builders/vic3_builder";
import { Game } from "../scripts/util/types";

export const games: Game[] = [
  {
    title: "Europa Universalis IV",
    tag: "EU4",
    color: "#8a7753",
    isSupported: true,
    builder: eu4_builder,
  },
  {
    title: "Crusader Kings III",
    tag: "CK3",
    color: "#720e13",
    isSupported: true,
    builder: ck3_builder,
  },
  {
    title: "Crusader Kings II",
    tag: "CK2",
    color: "#23415d",
    isSupported: true,
    builder: ck2_builder,
  },
  {
    title: "Hearts of Iron IV",
    tag: "HOI4",
    color: "#515c50",
    isSupported: true,
    builder: hoi4_builder,
  },
  {
    title: "Imperator: Rome",
    tag: "IR",
    color: "#99662e",
    isSupported: true,
    builder: ir_builder,
  },
  {
    title: "Victoria 3",
    tag: "VIC3",
    color: "#8e5164",
    isSupported: true,
    builder: vic3_builder,
  },
  {
    title: "Cities: Skylines 1 & 2",
    tag: "CS",
    color: "#4fb8ee",
    isSupported: false,
  },
  {
    title: "Stellaris",
    tag: "STL",
    color: "#cf7149",
    isSupported: false,
  },
];
