import * as React from 'react';
import s from './form.scss';
import { Link } from 'gatsby'

export default () => (
  <>
    <div className={s.container}>
        Thank you. We will contact you soon.
          <div className="close">
               <Link  to="/">Home page</Link>
          </div>
          

       
    </div>

    
  </>
);
