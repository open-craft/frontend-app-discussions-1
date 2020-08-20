import { defineMessages } from '@edx/frontend-platform/i18n';
import globalMessages from '../../../data/messages';

const messages = defineMessages({
  all_threads: globalMessages.all_threads,
  all_discussions: {
    id: 'discussions.navigation-bar.filter.all-discussions',
    defaultMessage: 'All discussions',
    description: 'Option in dropdown to filter to all discussions',
  },
  all_questions: {
    id: 'discussions.navigation-bar.filter.all-questions',
    defaultMessage: 'All questions',
    description: 'Option in dropdown to filter to all questions',
  },
  filter_by: {
    id: 'discussions.navigation-bar.filter.message',
    defaultMessage: 'Status: {filterBy}',
  },
  filter_all: {
    id: 'discussions.navigation-bar.filter.all',
    defaultMessage: 'All',
  },
  filter_unread: {
    id: 'discussions.navigation-bar.filter.unread',
    defaultMessage: 'Unread',
  },
  filter_following: {
    id: 'discussions.navigation-bar.filter.following',
    defaultMessage: 'Following',
  },
  filter_flagged: {
    id: 'discussions.navigation-bar.filter.flagged',
    defaultMessage: 'Flagged',
  },
  my_threads: globalMessages.my_threads,
  my_discussions: {
    id: 'discussions.navigation-bar.filter.my-discussions',
    defaultMessage: 'My discussions',
    description: 'Option in dropdown to filter to all a user\'s discussions',
  },
  my_questions: {
    id: 'discussions.navigation-bar.filter.my-questions',
    defaultMessage: 'My questions',
    description: 'Option in dropdown to filter to all a user\'s questions',
  },
  sorted_by: globalMessages.sorted_by,
  sort_by_last_activity: globalMessages.sort_by_last_activity,
  sort_by_comment_count: globalMessages.sort_by_comment_count,
  sort_by_vote_count: globalMessages.sort_by_vote_count,
});

export default messages;
