import * as React from 'react';
import s from './Mail.scss';

import { Container } from '../container/Container';
import { Row } from '../row/Row';

export const Mail = () => {
    return (
       <Container>
            <div className={s.container}>
                <p className={s.call__button}> 
                  Book Free Strategic Call
              </p> 
              
            </div>
          
            
        </Container>
     
    );
  };