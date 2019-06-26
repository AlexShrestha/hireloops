import * as React from 'react';
import s from './form.scss';
import { Link } from 'gatsby'
import close from "../assets/images/close-button.png";

export default () => (
  <>
    <div className={s.container}>
        
          <div className={s.close}>
               <Link  to="/">

                 <img className={s.img}  src={close}/>
               </Link>
          </div>

          
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="thankyou"
            className={s.form}
          >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <input className={s.input} type="text" name="name" id="name" placeholder="Name" required />
                <input className={s.input} type="email" name="email" id="email" placeholder="Email" required />
                <input className={s.submit}  type="submit" value="Submit" />
                    
           </form>
         
              

       
    </div>

    
  </>
);
