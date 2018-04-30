import React  from 'react';
import { compose, withState, withHandlers, mapProps } from "recompose";

const starWarsChars = [
  { name:'Luke', side:'light' },
  { name:'Darth Vader', side:'dark' },
  { name:'Obi-wan Kenobi', side:'light'},
  { name:'Palpatine', side:'dark'},
]

const enhance = compose(
  withState('stateValue', 'stateHandler', 'dark'),
  mapProps(({list, stateValue, stateHandler}) => {
    const otherSide = stateValue === 'dark' ? 'light' : 'dark'
    return {
      stateHandler,
      otherSide,
      list: list.filter(char => char.side === stateValue),
    }
  }),
  withHandlers({
    handleSetState: ({stateHandler, otherSide}) => () => stateHandler(otherSide)
  })
)

const renderDisplayList = ({ list, handleSetState }) => (
   <div>
      <button onClick={handleSetState}>Switch</button>
      {list.map(char =>
        <div key={char.name}>
          <div>Character: {char.name}</div>
          <div>Side: {char.side}</div>
        </div>
      )}
   </div>
)

const DisplayListHOC = enhance(renderDisplayList);

const renderDisplay = () => (
  <div>
     <DisplayListHOC list={starWarsChars} />
  </div>
)

export default renderDisplay;
