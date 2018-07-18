import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.id,
    };
    this.onClickTabItem = this.onClickTabItem.bind(this);
  }

  onClickTabItem(id) {
    this.setState({ activeTab: id });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
        handleChangeData,
      },
      state: {
        activeTab,
      },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label, id } = child.props;

            return (
              <Tab
                id={id}
                activeTab={activeTab}
                key={id}
                label={label}
                onClick={onClickTabItem}
                onChange={handleChangeData}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.id !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
  handleChangeData: PropTypes.func,
};

Tabs.defaultProps = {
  handleChangeData: undefined,
};

export default Tabs;
