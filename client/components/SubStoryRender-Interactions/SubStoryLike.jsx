import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const SubStoryLike = (props) => {
  const { user, isAuthenticated } = useAuth0();

  const likeClick = () => {
    const { subStory, like } = props;
    if (isAuthenticated) {
      Axios.put('/subLike', {
        id: subStory.id,
        user: user.email,
      })
        .then((result) => {
          console.log(result);
          like();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('Please log in to like a story.');
    }
  };

  return (
    <Button
      onClick={likeClick}
    >
      Like
    </Button>
  );
};
SubStoryLike.propTypes = {
  subStory: PropTypes.isRequired,
  like: PropTypes.isRequired,
};

export default SubStoryLike;