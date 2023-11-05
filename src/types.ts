export type ProjectProps = {
  id: number;
  title: string;
  description: string;
  district: string;
  address: string;
  architect: string;
};

export type ProjectsProps = {
  projects: ProjectProps[];
};

export type GoogleMapProps = {
  projects: ProjectProps[];
};

export type SidebarProps = {
  projects: ProjectProps[];
};