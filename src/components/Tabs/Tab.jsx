import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onClick, id, onChange } = this.props;
    onClick(id);
    onChange(id);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        id,
        label,
      },
    } = this;

    let className = 'tab-list__item';

    if (activeTab === id) {
      className += ' tab-list__item__btn--active';
    }

    return (
      <li className={className}>
        <button
          className={`tab-list__item__btn ${activeTab === id ? 'tab-list__item__btn--active' : ''} `}
          onClick={onClick}
        >
          {label}
        </button>
      </li>
    );
  }
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

Tab.defaultProps = {
  onChange: undefined,
};

export default Tab;
