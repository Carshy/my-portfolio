/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, createContext } from 'react';
import animalia from '../../assets/animalia.PNG';

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      img: animalia,
      title: 'Zoo Metric',
      description: 'This project is based on an eCommerce website built with React. The user can add items to the cart, increase or decrease the number of items on the cart, or even empty the cart. The user can also click on checkout from the cart and pay by entering his/her credit card number.',
      see: 'See Project',
    },
    {
      id: 2,
      img: animalia,
      title: 'Zoo Metric',
      description: 'This project is based on an eCommerce website built with React. The user can add items to the cart, increase or decrease the number of items on the cart, or even empty the cart. The user can also click on checkout from the cart and pay by entering his/her credit card number.',
      see: 'See Project',
    },
    {
      id: 3,
      img: animalia,
      title: 'Zoo Metric',
      description: 'This project is based on an eCommerce website built with React. The user can add items to the cart, increase or decrease the number of items on the cart, or even empty the cart. The user can also click on checkout from the cart and pay by entering his/her credit card number.',
      see: 'See Project',
    },
    {
      id: 4,
      img: animalia,
      title: 'Zoo Metric',
      description: 'This project is based on an eCommerce website built with React. The user can add items to the cart, increase or decrease the number of items on the cart, or even empty the cart. The user can also click on checkout from the cart and pay by entering his/her credit card number.',
      see: 'See Project',
    },
    {
      id: 5,
      img: animalia,
      title: 'Zoo Metric',
      description: 'This project is based on an eCommerce website built with React. The user can add items to the cart, increase or decrease the number of items on the cart, or even empty the cart. The user can also click on checkout from the cart and pay by entering his/her credit card number.',
      see: 'See Project',
    },
  ]);

  return (
    <div>
      <ProjectContext.Provider value={[projects, setProjects]}>
        {props.children}
      </ProjectContext.Provider>
    </div>
  );
};
