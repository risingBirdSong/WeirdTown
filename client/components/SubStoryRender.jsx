import React from 'react';
import PropTypes from 'prop-types';
import SubStoryLike from './SubStoryRender-Interactions/SubStoryLike';
import SubStoryDislike from './SubStoryRender-Interactions/SubStoryDislike';

const SubStoryRender = (props) => {
  const { subStory, likeGoDown, likeGoUp } = props;
  return (
    <div>
      <div id="story-header">
        <div>
          <h5>Department of Weird Stuff</h5>
          <h5>
            Case No°
            { ' ' }
            {10000 + subStory.storyid}
            =
            {subStory.id}
          </h5>
        </div>
      </div>
      <div id="story-classified">
        <div>
          <h1>CLASSIFIED</h1>
        </div>
      </div>
      <div id="substory-likes">
        <h4>
          likes:
          { ' ' }
          {subStory.sublikes}
        </h4>
        <SubStoryLike subStory={subStory} like={likeGoUp} />
        <SubStoryDislike subStory={subStory} dislike={likeGoDown} />
      </div>
      <div>
        <h3 className="underlined">INCIDENT NAME:</h3>
        {subStory.subname}
      </div>
      <div>
        <h3 className="underlined">INCIDENT LOCATION:</h3>
        {subStory.sublocation}
      </div>
      <div>
        <h3 className="underlined">WITNESS DESCRIPTION:</h3>
        {subStory.subseen}
        {subStory.subheard}
      </div>
      <div>
        <h3 className="underlined">TIMELINE OF EVENTS:</h3>
        {subStory.substory}
      </div>
      <div id="secret-footer">
        <h5 className="top-secret">TOP SECRET</h5>
      </div>
    </div>
  );
};

SubStoryRender.propTypes = {
  subStory: PropTypes.shape({
    id: PropTypes.number,
    storyid: PropTypes.number,
    sublocation: PropTypes.string,
    subheard: PropTypes.string,
    subseen: PropTypes.string,
    subname: PropTypes.string,
    substory: PropTypes.string,
    sublikes: PropTypes.number,
  }),
  likeGoUp: PropTypes.func,
  likeGoDown: PropTypes.func,
};

SubStoryRender.defaultProps = {
  subStory: {
    id: 0,
    storyid: 0,
    sublocation: 'REDACTED',
    subheard: 'REDACTED',
    subseen: 'REDACTED',
    subname: 'REDACTED',
    substory: 'REDACTED',
    sublikes: 0,
  },
  likeGoUp: undefined,
  likeGoDown: undefined,
};

export default SubStoryRender;
