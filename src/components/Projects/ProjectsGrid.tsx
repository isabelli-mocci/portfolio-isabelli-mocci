import React from 'react';
import ProjectCard from './ProjectCard';
import type { ProjectItem } from '../../types/projectItem';

interface ProjectsGridProps {
  projects: ProjectItem[];
  onOpenModal: (project: ProjectItem) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, onOpenModal }) => (
  <>
    {projects.map((project) => (
      <ProjectCard
        key={project.id}
        {...project}
        onOpenModal={onOpenModal}
      />
    ))}
  </>
);

export default ProjectsGrid;