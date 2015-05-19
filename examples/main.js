import { Tabs, Tab }  from '@vesparny/react-tabs';
import React from 'react';

class App extends React.Component {

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

        <Tabs active={1}>
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
};

React.render(<App />, document.getElementById('root'));
