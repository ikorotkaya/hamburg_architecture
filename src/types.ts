export type ProjectProps = {
  id: number;
  title: string;
  description: string;
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
};
