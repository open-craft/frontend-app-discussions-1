import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import Button from '@edx/paragon/dist/Button';
import SearchField from '@edx/paragon/dist/SearchField';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../data/constants';
import messages from '../../data/messages';

function NavigationBar({ intl, courseId }) {
  return (
    <div className="navigation-bar d-flex flex-row my-2">
      <ul className="nav flex-fill">
        <li className="nav-item">
          <NavLink activeClassName="text-white bg-primary-500 border-primary-300" className="nav-link rounded-lg" to={Routes.POSTS.MY_POSTS.replace(':courseId', courseId)}>
            { intl.formatMessage(messages.my_posts) }
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="text-white bg-primary-500 border-primary-300" className="nav-link rounded-lg" to={Routes.POSTS.ALL_POSTS.replace(':courseId', courseId)}>
            { intl.formatMessage(messages.all_posts) }
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="text-white bg-primary-500 border-primary-300" className="nav-link rounded-lg" to={Routes.TOPICS.ALL.replace(':courseId', courseId)}>
            { intl.formatMessage(messages.all_topics) }
          </NavLink>
        </li>
      </ul>
      <div className="d-flex justify-content-end">
        <SearchField
          lable=""
          placeholder="Search all posts"
          onSubmit={() => null}
        />
        <Button variant="outline-primary" className="ml-2 rounded-lg">
          Add Post
        </Button>
      </div>
    </div>
  );
}

NavigationBar.propTypes = {
  courseId: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(NavigationBar);
