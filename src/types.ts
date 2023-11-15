export type ProjectProps = {
  id: number;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  district: string;
  address: string;
  architect?: string;
  lat: number;
  lng: number;
};

export type ProjectsProps = {
  projects: ProjectProps[];
};

export type SidebarProps = {
  projects: ProjectProps[];
};

export type ProjectPopUpProps = {
  project: ProjectProps;
  locale: string;
};

export type GoogleMapsComponentProps = {
  projects: ProjectProps[];
  locale: string;
};

export type LanguageSwitcherProps = {
  language: string;
  setLanguage: (language: string) => void;
};

export type LanguageDropDownMenuProps = {
  setMenuOpen: (open: boolean) => void;
};