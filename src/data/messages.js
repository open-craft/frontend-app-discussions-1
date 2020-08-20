import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  all_posts: {
    id: 'discussions.navigation-bar.filter.all-posts',
    defaultMessage: 'All posts',
    description: 'Option in dropdown to filter to all posts',
  },
  all_topics: {
    id: 'discussions.navigation-bar.filter.all-topics',
    defaultMessage: 'All topics',
    description: 'Option in dropdown to view all topics',
  },
  my_posts: {
    id: 'discussions.navigation-bar.filter.my-posts',
    defaultMessage: 'My posts',
    description: 'Option in dropdown to filter to all a user\'s posts',
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
