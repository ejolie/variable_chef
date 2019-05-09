import React, { Component } from 'react';
import { Grid, Segment, Label, Popup } from 'semantic-ui-react';
import styled from 'styled-components';

import WordItem from './WordItem';

const cases = {
  snake: 'Snake case 🐍',
  pascal: 'Pascal case 🐫',
  camel: 'Camel case 🐪',
}

const langToCase = {
  javascript: 'camel',
  python: 'snake',
  java: '',
  c: '',
  cpp: '',
}

const StyledPopup = styled(Popup)`
  border-radius: 0;
  opacity: 0.9;
  padding: '2em';
`;

const aStyle = {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
}

const timeoutLength = 2000

class WordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      isOpen: false,
    }
  }

  handleOpen = () => {
    this.setState({
      like: this.state.like + 1,
      isOpen: true
    })

    this.timeout = setTimeout(() => {
      this.setState({
        isOpen: false
      })
    }, timeoutLength)
  }

  handleClose = () => {
    this.setState({
      isOpen: false
    })
    clearTimeout(this.timeout)
  }

  render() {
    const { variables, lang } = this.props;
    const caseKey = langToCase[lang];
    const caseName = cases[caseKey];

    return (
      <Grid centered>
          <Segment padded size='huge'>
            <Label size='huge' attached='top left'>{caseName}</Label> {/*{langCase}*/}
            <Segment.Group>
              {variables.map(variable => 
                <StyledPopup
                  key={variable.id}
                  trigger={
                    <a style={aStyle}>
                      <WordItem name={variable[caseKey]} like={this.state.like}/>
                    </a>
                  }
                  content='Copy 완료!'
                  inverted
                  on='click'
                  open={this.state.isOpen}
                  onOpen={this.handleOpen}
                  onClose={this.handleClose}
                  hideOnScroll
                />
              )}
            </Segment.Group>
          </Segment>
      </Grid>
    );
  }
};

export default WordList;