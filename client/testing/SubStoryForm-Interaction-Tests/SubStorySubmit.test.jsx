import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubStorySubmit from '../../components/SubStoryForm-Interactions/SubStorySubmit';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<SubStorySubmit />);
    expect(wrapper).toBeTruthy();
  });
});
