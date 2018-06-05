import React, { Component } from 'react'
import '../styles/Modal.css';
const ModalContext = React.createContext();
const Consumer = ModalContext.Consumer;

export default class ContextModal extends Component {
  showModal = (content, props = {}) => {
    this.setState({
      content,
      props
    });
  };

  hideModal = () =>
    this.setState({
      content: null,
      props: {}
    });

  state = {
    content: null,
    props: {},
    showModal: this.showModal,
    hideModal: this.hideModal
  };

  render() {
    const ModalContent = this.state.content;
    return (
      <ModalContext.Provider value={this.state}>
        <div>
          <h1>Modal Demo</h1>
          <Consumer>
          {({ showModal }) =>
            <button onClick={() => showModal(TextModalContent)}>
              Open Modal
            </button>
          }
          </Consumer>
          <Consumer>
          {({ showModal }) =>
            <button onClick={() => showModal(ImageModalContent)}>
              Open Image Modal
            </button>
          }
          </Consumer>
        </div>
        {ModalContent ? <Modal content={ModalContent} /> : ""}
      </ModalContext.Provider>
    );
  }
}

const Modal = props => {
  const Content = props.content;
  return (
    <div className="modal">
      <div className="modal-content">
        <Content />
      </div>
    </div>
  );
};

const CloseButton = () => (
  <Consumer>
    {({ hideModal }) => <button onClick={hideModal}>Close It</button>}
  </Consumer>
);

const TextModalContent = () => (
  <div>
    <h1>Text modal</h1>
    <p>Some next here !</p>
    <CloseButton />
  </div>
);

const ImageModalContent = () => (
  <div>
    <img src="http://storage.js-craft.io/examples/react-context-usecases/cool-cat.jpg" />
    <CloseButton />
  </div>
);
