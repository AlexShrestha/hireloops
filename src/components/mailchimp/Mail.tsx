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

            Form 2

            <form name="contact" netlify>
            <p>
              <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
            
        </Container>
     
    );
  };