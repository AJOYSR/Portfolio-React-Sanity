import React from 'react';
// import { NavigationDots, SocialMedia } from '../components';
import { NavigationDots,SocialMedia } from '../../components';

const FooterLink = (Component, idName, classNames) =>{
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
      </div> 
      <div className="copyright">
        <p className="p-text">@2023 AJOYSR</p>
        <p className="p-text">All rights reserved</p>
      </div>
      
      <NavigationDots active={idName} />
    </div>
  );
};

export default FooterLink;
