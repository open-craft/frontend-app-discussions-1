import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { buildIntlSelectionList } from '../../utils';
import { SelectableDropdown } from '../../../components/selectable-dropdown';
import {
  MyPostsFilter,
  AllPostsFilter,
  PostsStatusFilter,
  ThreadOrdering,
} from '../../../data/constants';
import messages from './messages';

function PostFilterBar({ filterSelfPosts, intl }) {
  let postsFilterOptions = buildIntlSelectionList(AllPostsFilter, intl, messages);
  let defaultPostFilter = AllPostsFilter.ALL_POSTS;
  if (filterSelfPosts) {
    postsFilterOptions = buildIntlSelectionList(MyPostsFilter, intl, messages);
    defaultPostFilter = MyPostsFilter.MY_POSTS;
  }
  const [currentPostFilter, setPostFilter] = useState(defaultPostFilter);

  useEffect(() => {
    setPostFilter(defaultPostFilter);
  }, [filterSelfPosts]);

  const postsStatusFilterOptions = buildIntlSelectionList(PostsStatusFilter, intl, messages);
  const threadOrderingOptions = buildIntlSelectionList(ThreadOrdering, intl, messages);

  const [currentPostStatus, setPostStatus] = useState(PostsStatusFilter.ALL);
  const [currentThreadOrder, setThreadOrder] = useState(ThreadOrdering.BY_LAST_ACTIVITY);

  return (
    <div className="d-flex flex-row card-header p-1">
      <div className="m-1">
        <SelectableDropdown
          defaultOption={defaultPostFilter}
          options={postsFilterOptions}
          onChange={(option) => setPostFilter(option.value)}
          label={intl.formatMessage(messages[currentPostFilter])}
        />
      </div>
      <div className="flex-fill m-1">
        <SelectableDropdown
          defaultOption={PostsStatusFilter.ALL}
          options={postsStatusFilterOptions}
          onChange={(option) => setPostStatus(option.value)}
          label={intl.formatMessage(messages.filter_by, { filterBy: intl.formatMessage(messages[currentPostStatus]) })}
        />
      </div>
      <div className="justify-content-end m-1">
        <SelectableDropdown
          defaultOption={ThreadOrdering.BY_LAST_ACTIVITY}
          options={threadOrderingOptions}
          onChange={(option) => setThreadOrder(option.value)}
          label={intl.formatMessage(messages.sorted_by, { sortBy: intl.formatMessage(messages[currentThreadOrder]) })}
        />
      </div>
    </div>
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
