import * as React from 'react';
import s from './Mail.scss';

import { Container } from '../container/Container';



export const Mail = () => {
    return (
       <Container>

<Container>
      <div className={s.intro}>
        
        <div className={s.container}>
              <p className={s.call__button}> 
                  Book Free Strategic Call
              </p> 
              
         </div>
       
      </div>
    </Container>
            
         

          

            {/* <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="bot-field" />

                <input type="hidden" name="form-name" value="contact" />
                


                <div className="field half first">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name"  className={s.input} />
                </div>

                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" className={s.input} />
                </div>
                
              

                 
                    <input type="submit" value="Submit" className="special" />
                  
                 
               
              </form> */}
            
        </Container>
     
    );
  };