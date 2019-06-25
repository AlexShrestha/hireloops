import * as React from 'react';
import s from './Mail.scss';

import { Container } from '../container/Container';


export const Mail = () => {
    return (
       <Container>
            <div className={s.container}>
                <p className={s.call__button}> 
                  Book Free Strategic Call
              </p> 
              
            </div>
            <form method="post" action="#">
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" className="special" />
                </li>
                
              </ul>
            </form>
            
        </Container>
     
    );
  };