import React, { Component } from 'react';
import '../styles/context.css';

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;

export default class LanguageProvider extends Component {
  state = { language: "vn"}
  updateLanguage = e => this.setState({ language : e.target.value })

  render() {
    return (
      <LanguageContext.Provider
        value={{
          language: this.state.language,
          updateLanguage: this.updateLanguage
        }}
      >
        <div>
          <Header />
          <h1>
            <TranslatableText
              dictionary={{
                vn: "Xin chao",
                en: "Hello",
                jp: "Ohaio Ogiaimasta"
              }}
            />
          </h1>
        </div>
      </LanguageContext.Provider>
    );
  }
}

const Header = () => {
  return (
    <LanguageConsumer>
      {({ updateLanguage }) => (
        <header>
          See this site in
          <select onChange={updateLanguage}>
            <option value="vn">Vietnam</option>
            <option value="en">English</option>
            <option value="jp">Japans</option>
          </select>
        </header>
      )}
    </LanguageConsumer>
  );
}

const TranslatableText = props => (
  <LanguageConsumer>
    {({ language }) => props.dictionary[language]}
  </LanguageConsumer>
);
