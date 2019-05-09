import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { GlobalStyle } from './global-styles';
// import styled from 'styled-components';
import axios from 'axios';

import Heading from './Heading';
import SearchBar from './SearchBar';
import WordList from './WordList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      lang: 'python',
      wordError: false,
      searchable: false,
      variables: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { word, wordError, searchable } = this.state;

    // FIXME: Word validation
    const regExp = /[^가-힣\s]/g;
    if (word === '' || regExp.test(word)) {
      this.setState((prevState) => { 
        return { wordError: prevState.wordError || true } 
      });
      console.log('완전한 한글이 아니네요.. wordError', wordError);
    } 
    else {
      this.setState((prevState) => { 
        return { wordError: prevState.wordError && false } 
      });
      console.log('좋아요.. wordError', wordError);
    }

    if (!wordError) {
      this.setState((prevState) => {
        return { searchable: prevState.searchable || true }
      })

      // TODO - Search logic, Render WordList
      axios.get(`http://127.0.0.1:8000/test/${word}`)
      .then(response => {
        console.log(response.data.variables)
        this.setState({
          variables: response.data.variables
        })
      })
      .catch(error => {
        console.log(error);
      });
    } 
    else {
      this.setState((prevState) => {
        return { searchable: prevState.searchable && false }
      })
    }

    console.log('searchable', searchable);
  }

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Heading/>
        <SearchBar 
          word={this.state.word}
          lang={this.state.lang}
          wordError={this.state.wordError}
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        />
        {/* FIXME - 검색 결과 반환 시 렌더링 */}
        { this.state.searchable && 
          <WordList 
            variables={this.state.variables}
            lang={this.state.lang}
          />
        }
      </Container>
    );
  }
}
export default App;
