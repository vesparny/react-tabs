import React from 'react';

class Tab extends React.Component  {

  render() {
    return (
      <div className="Tabs-tabContent">
        <div className="Tabs-pane">
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Tab;
