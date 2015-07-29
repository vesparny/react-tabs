import test from 'tape';
import React from 'react/addons';
import Tabs from '../../src/components/Tabs';
import Tab from '../../src/components/Tab';
import * as utils from '../utils';

test('Tabs', (t) => {
  t.plan(5);
  const component = utils.shallowlyRenderedOutput(
    <Tabs alignLeft>
      <Tab heading="Tab 1">
        <div>tab 1 content</div>
      </Tab>
      <Tab heading="Tab 2">
        <div>tab 2 content</div>
      </Tab>
    </Tabs>
  );
  const tab = component.props.children[1];

  t.equal(component.type, 'div', 'it should be wrapped by a <div>');
  t.equal(component.props.children[0].type, 'ul', 'it should have a <ul> element as first child');
  t.equal(tab.type.displayName, 'Tab', 'it should contain <Tab> elements');
  t.equal(tab.props.heading, 'Tab 1', 'it should have proper heading');
  t.equal(tab.props.children.props.children, 'tab 1 content', 'it should have proper content');
});
