import React from 'react';

import { IoMail } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export const IoMailIcon = () => {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
    <div className="icon-container">
    <IoMail/>
    </div>
    </IconContext.Provider>
  );
};


