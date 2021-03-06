import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubStoryRender from '../components/SubStoryRender';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const subStory = {
      id: 0,
      storyid: 0,
      sublocation: 'REDACTED',
      subheard: 'REDACTED',
      subseen: 'REDACTED',
      subname: 'REDACTED',
      substory: 'REDACTED',
      sublikes: 0,
    };
    const wrapper = shallow(<SubStoryRender subStory={subStory} />);
    expect(wrapper).toBeTruthy();
  });
});
