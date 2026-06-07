export interface ProjectCategory {
  title: string;
  slug: string;
  description: string;
  thumbnail: { url: string };
  icon?: { url: string };
}

export interface ProjectDetails {
  year: number;
  client: string;
  skills: string[];
}

export interface ProjectImage {
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: ProjectImage;
  heroBanner: ProjectImage;
  category: ProjectCategory;
  details: ProjectDetails;
}
