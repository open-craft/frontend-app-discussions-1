import PropTypes from 'prop-types';
import React from 'react';
import ThreadFilterBar from './thread-filter-bar/ThreadFilterBar';
import Thread, { threadShape } from './thread/Thread';

function ThreadsView({ threads, filterSelfThreads }) {
  return (
    <div className="discussion-threads d-flex flex-column card">
      <ThreadFilterBar filterSelfThreads={filterSelfThreads} />
      <div className="list-group list-group-flush">
        { threads.map(thread => <Thread thread={thread} key={thread.id} />) }
      </div>
    </div>
  );
}

ThreadsView.propTypes = {
  filterSelfThreads: PropTypes.bool,
  threads: PropTypes.arrayOf(threadShape).isRequired,
};

ThreadsView.defaultProps = {
  filterSelfThreads: false,
};

export default ThreadsView;
