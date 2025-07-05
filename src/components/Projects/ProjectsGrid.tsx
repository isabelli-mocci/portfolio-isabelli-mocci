import React from 'react';
import ProjectCard from './ProjectCard';
import type { ProjectItem } from '../../types/projectItem';

interface ProjectsGridProps {
  projects: ProjectItem[];
  onOpenModal: (project: ProjectItem) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, onOpenModal }) => (
  <div className="w-full overflow-x-auto py-8 hide-scrollbar px-6 md:px-0">
    <div className="flex flex-row space-x-8 md:space-x-12 lg:space-x-16 justify-start min-w-max">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          {...project}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  </div>
);

export default ProjectsGrid;