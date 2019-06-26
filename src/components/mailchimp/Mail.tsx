import * as React from 'react';
import s from './Mail.scss';
import { Link } from 'gatsby'

export const Mail = () => {
    return (
        <div className={s.container}>
          <p className={s.button}> 
                <Link className={s.link}  to="/form">Book Free Strategy Call</Link>
          </p> 
        </div>
      

    );
  };