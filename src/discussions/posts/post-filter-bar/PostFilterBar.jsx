import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import * as classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { Collapsible, Form, Icon } from '@edx/paragon';
import { Check, Sort } from '@edx/paragon/icons';

import { AllPostsFilter, PostsStatusFilter, ThreadOrdering } from '../../../data/constants';
import { setAllPostsTypeFilter, setSortedBy, setStatusFilter } from '../data';
import { selectThreadFilters, selectThreadSorting } from '../data/selectors';
import messages from './messages';

const ActionItem = ({
  id,
  label,
  value,
  selected,
}) => (
  <label htmlFor={id} className="focus border-bottom-0 d-flex p-1 m-2 align-items-center">
    <Icon src={Check} className={classNames('text-success mr-2', { invisible: value !== selected })} />
    <Form.Radio id={id} className="sr-only sr-only-focusable" value={value} tabIndex={0}>
      {label}
    </Form.Radio>
    {label}
  </label>
);

ActionItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
};

function PostFilterBar({
  filterSelfPosts,
  intl,
}) {
  const { authenticatedUser } = useContext(AppContext);
  const dispatch = useDispatch();
  const currentSorting = useSelector(selectThreadSorting());
  const currentFilters = useSelector(selectThreadFilters());
  const [isOpen, setOpen] = useState(false);

  const handleSortFilterChange = (event) => {
    const currentType = currentFilters.allPosts;
    const currentStatus = currentFilters.status;
    const {
      name,
      value,
    } = event.currentTarget;
    if (name === 'type') {
      dispatch(setAllPostsTypeFilter(value));
      if (
        (value === AllPostsFilter.ALL_DISCUSSIONS && currentStatus === PostsStatusFilter.UNANSWERED)
        || (value === AllPostsFilter.ALL_QUESTIONS && currentStatus === PostsStatusFilter.UNREAD)
      ) {
        // You can't filter discussions by unanswered or questions by unread
        dispatch(setStatusFilter(PostsStatusFilter.ALL));
      }
    }
    if (name === 'status') {
      dispatch(setStatusFilter(value));
      if (value === PostsStatusFilter.UNANSWERED && currentType !== AllPostsFilter.ALL_QUESTIONS) {
        // You can't filter discussions by unanswered so switch type to questions
        dispatch(setAllPostsTypeFilter(AllPostsFilter.ALL_QUESTIONS));
      }
      if (value === PostsStatusFilter.UNREAD && currentType !== AllPostsFilter.ALL_DISCUSSIONS) {
        // You can't filter questions by unread so switch type to discussion
        dispatch(setAllPostsTypeFilter(AllPostsFilter.ALL_DISCUSSIONS));
      }
    }
    if (name === 'sort') {
      dispatch(setSortedBy(value));
    }
    setOpen(false);
  };
  return (
    <Collapsible
      styling="card-lg"
      iconWhenOpen={<Icon src={Sort} />}
      iconWhenClosed={<Icon src={Sort} />}
      title={intl.formatMessage(messages.sortFilterStatus, {
        own: filterSelfPosts,
        type: currentFilters.allPosts,
        sort: currentSorting,
        status: currentFilters.status,
      })}
      open={isOpen}
      onToggle={setOpen}
    >
      <Form className="d-flex flex-row p-1 justify-content-between">
        <Form.RadioSet
          name="type"
          className="d-flex flex-column list-group list-group-flush"
          value={currentFilters.allPosts}
          onChange={handleSortFilterChange}
        >
          <ActionItem
            id="type-all"
            label={intl.formatMessage(messages.allPosts)}
            value={AllPostsFilter.ALL_POSTS}
            selected={currentFilters.allPosts}
          />
          <ActionItem
            id="type-discussions"
            label={intl.formatMessage(messages.filterDiscussions)}
            value={AllPostsFilter.ALL_DISCUSSIONS}
            selected={currentFilters.allPosts}
          />
          <ActionItem
            id="type-questions"
            label={intl.formatMessage(messages.filterQuestions)}
            value={AllPostsFilter.ALL_QUESTIONS}
            selected={currentFilters.allPosts}
          />
        </Form.RadioSet>
        <Form.RadioSet
          name="status"
          className="d-flex flex-column list-group list-group-flush"
          value={currentFilters.status}
          onChange={handleSortFilterChange}
        >
          <ActionItem
            id="status-any"
            label={intl.formatMessage(messages.filterAnyStatus)}
            value={PostsStatusFilter.ALL}
            selected={currentFilters.status}
          />
          <ActionItem
            id="status-unread"
            label={intl.formatMessage(messages.filterUnread)}
            value={PostsStatusFilter.UNREAD}
            selected={currentFilters.status}
          />
          <ActionItem
            id="status-following"
            label={intl.formatMessage(messages.filterFollowing)}
            value={PostsStatusFilter.FOLLOWING}
            selected={currentFilters.status}
          />
          {authenticatedUser.administrator
          && (
          <ActionItem
            id="status-reported"
            label={intl.formatMessage(messages.filterReported)}
            value={PostsStatusFilter.REPORTED}
            selected={currentFilters.status}
          />
          )}
          <ActionItem
            id="status-unanswered"
            label={intl.formatMessage(messages.filterUnanswered)}
            value={PostsStatusFilter.UNANSWERED}
            selected={currentFilters.status}
          />
        </Form.RadioSet>
        <Form.RadioSet
          name="sort"
          className="d-flex flex-column list-group list-group-flush"
          value={currentSorting}
          onChange={handleSortFilterChange}
        >
          <ActionItem
            id="sort-activity"
            label={intl.formatMessage(messages.lastActivityAt)}
            value={ThreadOrdering.BY_LAST_ACTIVITY}
            selected={currentSorting}
          />
          <ActionItem
            id="sort-comments"
            label={intl.formatMessage(messages.commentCount)}
            value={ThreadOrdering.BY_COMMENT_COUNT}
            selected={currentSorting}
          />
          <ActionItem
            id="sort-votes"
            label={intl.formatMessage(messages.voteCount)}
            value={ThreadOrdering.BY_VOTE_COUNT}
            selected={currentSorting}
          />
        </Form.RadioSet>
      </Form>
    </Collapsible>
  );
}

PostFilterBar.propTypes = {
  filterSelfPosts: PropTypes.bool,
  intl: intlShape.isRequired,
};

PostFilterBar.defaultProps = {
  filterSelfPosts: false,
};

export default injectIntl(PostFilterBar);
