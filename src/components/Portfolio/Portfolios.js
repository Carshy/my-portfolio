import React, { useContext } from 'react';
import Portfolio from './Portfolio';
import { ProjectContext } from './ProjectListContext';

const Portfolios = () => {
  const [projects] = useContext(ProjectContext);
  return (
    <div>
      {projects.map((project) => (
        <Portfolio
          key={project.id}
          img={project.img}
          title={project.title}
          description={project.description}
          see={project.see}
        />
      ))}
      ;
    </div>
  );
};

export default Portfolios;
