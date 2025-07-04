// path: src/types/projectItem.ts

export interface ProjectItem {
  id: string;
  title: string;
  firmName: string;
  imageUrl: string;
  technologies: string[];
  description: string;
  myRole?: string[];
  toolsUsed?: { name: string; iconUrl: string }[];
  moreImages?: string[];
  codeLink?: string;
  websiteLink?: string;
}
