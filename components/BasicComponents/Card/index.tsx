import React from 'react';

import {CardContainer} from './styles';
import {CardProps} from './types';

const Card: React.FC<CardProps> = (props) => {
  const {children} = props;
  
  return (
    <CardContainer>
      {children}
    </CardContainer>
  )
}

export default Card;
