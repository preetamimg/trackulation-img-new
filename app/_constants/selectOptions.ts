import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface LanguageOption {
  label: string;
  value: string;
  icon: string | StaticImport;
}

export const languageOptions = [
  {
    icon: "/img/English.png",
    value: "en",
    label: "English",
  },
  {
    icon: "/img/German.png",
    value: "ge",
    label: "German",
  },
  {
    icon: "/img/Spanish.png",
    value: "sp",
    label: "Spanish",
  },
  {
    icon: "/img/French.png",
    value: "fr",
    label: "French",
  },
  {
    icon: "/img/Portuguese.png",
    value: "po",
    label: "Portuguese",
  },
  {
    icon: "/img/Italian.png",
    value: "it",
    label: "Italian",
  },
  {
    icon: "/img/Russian.png",
    value: "ru",
    label: "Russian",
  },
  {
    icon: "/img/Chinese.png",
    value: "ch",
    label: "Chinese",
  },
  {
    icon: "/img/Vietnamese.png",
    value: "vi",
    label: "Vietnamese",
  },
  {
    icon: "/img/Arabic.png",
    value: "ar",
    label: "Arabic",
  },
  {
    icon: "/img/Bangla.png",
    value: "ba",
    label: "Bangla",
  },
  {
    icon: "/img/Ukrainian.png",
    value: "uk",
    label: "Ukrainian",
  },
];

export const companyTypes = [
  {
    label : 'Advertiser',
    value : 'ADVERTISER'
  },
  {
    label : 'Agency',
    value : 'AGENCY'
  },
  {
    label : 'Other',
    value : 'OTHER'
  },
]

export const companySize = [
  {
    label : '1 employee',
    value : '1 employee'
  },
  {
    label : '2 - 5 employees',
    value : '2 - 5 employees'
  },
  {
    label : '6 - 15 employees',
    value : '6 - 15 employees'
  },
  {
    label : '16 - 50 employees',
    value : '16 - 50 employees'
  },
  {
    label : '51 - 100 employees',
    value : '51 - 100 employees'
  },
  {
    label : '101 - 250 employees',
    value : '101 - 250 employees'
  },
  {
    label : '250+ employees',
    value : '250+ employees'
  }
]