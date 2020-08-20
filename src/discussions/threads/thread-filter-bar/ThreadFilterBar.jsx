import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { buildIntlSelectionList } from '../../utils';
import { SelectableDropdown } from '../../../components/selectable-dropdown';
import {
  MyThreadsFilter,
  AllThreadsFilter,
  ThreadsStatusFilter,
  ThreadOrdering,
} from '../../../data/constants';
import messages from './messages';

function ThreadFilterBar({ filterSelfThreads, intl }) {
  let threadsFilterOptions = buildIntlSelectionList(AllThreadsFilter, intl, messages);
  let defaultThreadFilter = AllThreadsFilter.ALL_THREADS;
  if (filterSelfThreads) {
    threadsFilterOptions = buildIntlSelectionList(MyThreadsFilter, intl, messages);
    defaultThreadFilter = MyThreadsFilter.MY_THREADS;
  }
  const [currentThreadFilter, setThreadFilter] = useState(defaultThreadFilter);

  useEffect(() => {
    setThreadFilter(defaultThreadFilter);
  }, [filterSelfThreads]);

  const threadsStatusFilterOptions = buildIntlSelectionList(ThreadsStatusFilter, intl, messages);
  const threadOrderingOptions = buildIntlSelectionList(ThreadOrdering, intl, messages);

  const [currentThreadStatus, setThreadStatus] = useState(ThreadsStatusFilter.ALL);
  const [currentThreadOrder, setThreadOrder] = useState(ThreadOrdering.BY_LAST_ACTIVITY);

  return (
    <div className="d-flex flex-row card-header p-1">
      <div className="m-1">
        <SelectableDropdown
          defaultOption={defaultThreadFilter}
          options={threadsFilterOptions}
          onChange={(option) => setThreadFilter(option.value)}
          label={
            intl.formatMessage(
              messages[currentThreadFilter],
            )
          }
        />
      </div>
      <div className="flex-fill m-1">
        <SelectableDropdown
          defaultOption={ThreadsStatusFilter.ALL}
          options={threadsStatusFilterOptions}
          onChange={(option) => setThreadStatus(option.value)}
          label={
            intl.formatMessage(
              messages.filter_by,
              { filterBy: intl.formatMessage(messages[currentThreadStatus]) },
            )
          }
        />
      </div>
      <div className="justify-content-end m-1">
        <SelectableDropdown
          defaultOption={ThreadOrdering.BY_LAST_ACTIVITY}
          options={threadOrderingOptions}
          onChange={(option) => setThreadOrder(option.value)}
          label={
            intl.formatMessage(
              messages.sorted_by,
              { sortBy: intl.formatMessage(messages[currentThreadOrder]) },
            )
          }
        />
      </div>
    </div>
  );
}

ThreadFilterBar.propTypes = {
  filterSelfThreads: PropTypes.bool,
  intl: intlShape.isRequired,
};

ThreadFilterBar.defaultProps = {
  filterSelfThreads: false,
};

export default injectIntl(ThreadFilterBar);
