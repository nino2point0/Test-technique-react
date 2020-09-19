import './index.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'components/Page';
import { Lottie } from '@alfonmga/react-lottie-light-ts';
import animation from 'assets/404.json'

const NotFound = () => {
  return (
    <Page className="NotFound">
      <h2>Désolé, cette page n'existe pas&nbsp;!</h2>
      <div className='container'>
        <Lottie 
          className='image' 
          config={{ animationData: animation, autoplay: true, loop: true }} 
        />
        <Link to='/home' className='btn not-found-btn'>Retour à l'accueil</Link>
      </div>
    </Page>
  );
};

export default NotFound;
