export enum Locales {
  EN = "en",
  ID = "id",
}

export type LanguageType = {
  value: string;
  label: string;
  icon?: string;
};

export const LANGUAGES: LanguageType[] = [
  {
    value: Locales.EN,
    label: "English",
  },
  {
    value: Locales.ID,
    label: "Indonesia",
  },
];

export const LOCALE_KEYS: string[] = [Locales.EN, Locales.ID];
