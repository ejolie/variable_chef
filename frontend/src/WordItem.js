import React from 'react';
import { Segment, Header, Popup, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Like = styled.span`
  margin-left: 5rem;
`;

const Variable = styled.span`
  
`

const WordItem = (props) => {
  return (
    <Segment
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
      size='huge'
    >
      <Variable>{props.name}</Variable>
      <Like>{props.like}</Like>
    </Segment>
  );
};


export default WordItem;