

import React from 'react';
import { Navv } from '../Navv';
import { Footr } from './Footr';


const Layout = ({ children }) => {
  return (
    <div>
   <Navv/>
      <main>
    
        {children}
        </main> 
     <Footr/>
    </div>
  );
};

export default Layout;

