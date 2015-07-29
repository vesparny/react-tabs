import { Tabs, Tab, style }  from '@vesparny/react-tabs';
import React from 'react';

const App = React.createClass({

  onSelect(event, index) {
    alert(`Tab with index#${index} has been selected!`);
  },

  render() {
    return (
      <div>
        <Tabs alignLeft>
          <Tab heading="Tab 1">
            <div>tab 1 content</div>
          </Tab>
          <Tab heading="Tab 2">
            <div>tab 2 content</div>
          </Tab>
        </Tabs>

        <Tabs active={1} onSelect={this.onSelect}>
          <Tab heading="Tab 1">
            <div>tab 1 content</div>
          </Tab>
          <Tab heading="Tab 2">
            <div>tab 2 content</div>
          </Tab>
        </Tabs>
      </div>
    );
  }
});

export default App;

React.render(<App />, document.getElementById('root'));
