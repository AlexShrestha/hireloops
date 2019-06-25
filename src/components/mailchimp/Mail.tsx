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
         

          3rd form

          <form name="contact" method="POST" action="#" netlify-honeypot="bot-field" data-netlify="true">
            <p class="hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <p>
              <label>Email: <input type="text" name="email" className={s.input}  /></label>
            </p>
            <p>
              <label>Name: <input type="text" name="text" className={s.input}  /></label>
            </p>
          
            <p>
              <button type="submit" className={s.input} >Send</button>
            </p>
          </form>
            
        </Container>
     
    );
  };