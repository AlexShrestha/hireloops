import * as React from 'react';

import s from './Highlight.scss';

interface IHighlightProps {
  children: string;
}

export const Highlight = ({ children }: IHighlightProps) => {
  return (
    <>
      <span className={s.highlight}>
        <span className={s.highlight__text}>{children}</span>
        <span className={s.highlight__color} />
      </span>
    </>
  );
};
