import React from 'react';
import PropTypes from 'prop-types';
import SubStoryForm from './SubStoryForm';
import SubStoryList from './SubStoryList';
import ShowSubForm from './SubStory-Interactions/ShowSubForm';
import ShowSubStories from './SubStory-Interactions/ShowSubStories';

const SubStory = (props) => {
  const {
    subNum,
    subs,
    currentStory,
    handleSort,
    subStoryList,
    subStoryListButtonFlex,
    subStoryListZone,
    subStoryButton,
    subStoryForm,
    subStorySubList,
    subStoryRenderZone,
    onShowSubStories,
    onShowSubForm,
    onSubStoryListItemClick,
    onGoBack,
    subStoryFormSubmit,
  } = props;
  return (
    <div>
      <div id="substory-list-flex">
        {subStoryList
          ? (
            <div className="white-text" id="substory-list">
              { subNum === 1
                ? <p>There is 1 addendum file associated with this file</p>
                : (
                  <p>
                    There are
                    { ' ' }
                    { subNum }
                    { ' ' }
                    addendum files associated with this file
                  </p>
                ) }
            </div>
          ) : <div /> }
      </div>
      <div id="substory-list-button-flex">
        {subStoryListButtonFlex
          ? (
            <div id="substory-list-button-flex-zone">
              <ShowSubStories onShowSubStories={onShowSubStories} />
            </div>
          ) : <div />}
      </div>
      <div>
        <div>
          {subStoryListZone
            ? (
              <div id="substory-list-zone">
                <ol id="substory-list-zone-list">
                  <SubStoryList
                    subs={subs}
                    currentStory={currentStory}
                    subStorySubList={subStorySubList}
                    subStoryRenderZone={subStoryRenderZone}
                    handleSort={handleSort}
                    onSubStoryListItemClick={onSubStoryListItemClick}
                    onGoBack={onGoBack}
                  />
                </ol>
              </div>
            ) : null}
        </div>
      </div>
      <div id="substory-story-button-flex">
        {subStoryButton
          ? (
            <div id="sub-story-button">
              <ShowSubForm onShowSubForm={onShowSubForm} />
            </div>
          ) : <div />}
      </div>
      {subStoryForm
        ? (
          <div id="sub-story-form">
            <SubStoryForm subStoryFormSubmit={subStoryFormSubmit} />
          </div>
        ) : null}
    </div>
  );
};
SubStory.propTypes = {
  subNum: PropTypes.number,
  subs: PropTypes.arrayOf(PropTypes.object),
  currentStory: PropTypes.shape({
    storyid: PropTypes.number,
    story: PropTypes.string,
    storylocation: PropTypes.string,
    storyname: PropTypes.string,
    thingsseen: PropTypes.string,
    thingsheard: PropTypes.string,
  }),
  subStoryList: PropTypes.bool,
  subStoryListButtonFlex: PropTypes.bool,
  subStoryListZone: PropTypes.bool,
  subStoryButton: PropTypes.bool,
  subStoryForm: PropTypes.bool,
  subStorySubList: PropTypes.bool,
  subStoryRenderZone: PropTypes.bool,
  handleSort: PropTypes.func,
  onShowSubStories: PropTypes.func,
  onShowSubForm: PropTypes.func,
  onSubStoryListItemClick: PropTypes.func,
  onGoBack: PropTypes.func,
  subStoryFormSubmit: PropTypes.func,
};
SubStory.defaultProps = {
  subNum: undefined,
  subs: undefined,
  currentStory: {
    storyId: 'REDACTED',
    story: 'REDACTED',
    storylocation: 'REDACTED',
    storyname: 'REDACTED',
    thingsseen: 'REDACTED',
    thingsheard: 'REDACTED',
  },
  subStoryList: undefined,
  subStoryListButtonFlex: undefined,
  subStoryListZone: undefined,
  subStoryButton: undefined,
  subStoryForm: undefined,
  subStorySubList: undefined,
  subStoryRenderZone: undefined,
  handleSort: undefined,
  onShowSubStories: undefined,
  onShowSubForm: undefined,
  onSubStoryListItemClick: undefined,
  onGoBack: undefined,
  subStoryFormSubmit: undefined,
};

export default SubStory;
