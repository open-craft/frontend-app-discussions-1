import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  all_threads: {
    id: 'discussions.navigation-bar.filter.all-threads',
    defaultMessage: 'All threads',
    description: 'Option in dropdown to filter to all threads',
  },
  all_topics: {
    id: 'discussions.navigation-bar.filter.all-topics',
    defaultMessage: 'All topics',
    description: 'Option in dropdown to view all topics',
  },
  my_threads: {
    id: 'discussions.navigation-bar.filter.my-threads',
    defaultMessage: 'My threads',
    description: 'Option in dropdown to filter to all a user\'s threads',
  },
  search_results: {
    id: 'discussions.navigation-bar.filter.search-results',
    defaultMessage: '{resultCount} results',
  },
  sorted_by: {
    id: 'discussions.navigation-bar.sort.message',
    defaultMessage: 'Sorted by {sortBy}',
  },
  sort_by_last_activity: {
    id: 'discussions.navigation-bar.sort.last-activity',
    defaultMessage: 'Recent activity',
  },
  sort_by_comment_count: {
    id: 'discussions.navigation-bar.sort.comment-count',
    defaultMessage: 'Most activity',
  },
  sort_by_vote_count: {
    id: 'discussions.navigation-bar.sort.vote--count',
    defaultMessage: 'Most votes',
  },
});

export default messages;
