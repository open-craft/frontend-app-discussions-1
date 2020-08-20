import PropTypes from 'prop-types';

const postShape = PropTypes.shape({
  posted_on: PropTypes.string,
  abuse_flagged: PropTypes.bool,
  rendered_body: PropTypes.string,
  author: PropTypes.string,
});

export default postShape;
