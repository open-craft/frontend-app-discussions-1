import { getConfig } from '@edx/frontend-platform';

export const API_BASE_URL = getConfig().LMS_BASE_URL;

export const LoadingStatus = {
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
  DENIED: 'denied',
};

export const ThreadOrdering = {
  BY_LAST_ACTIVITY: 'sort_by_last_activity',
  BY_COMMENT_COUNT: 'sort_by_comment_count',
  BY_VOTE_COUNT: 'sort_by_vote_count',
};

export const ThreadView = {
  UNREAD: 'unread',
  UNANSWERED: 'unanswered',
};

export const MyThreadsFilter = {
  MY_THREADS: 'my_threads',
  MY_DISCUSSIONS: 'my_discussions',
  MY_QUESTIONS: 'my_questions',
};

export const AllThreadsFilter = {
  ALL_THREADS: 'all_threads',
  ALL_DISCUSSIONS: 'all_discussions',
  ALL_QUESTIONS: 'all_questions',
};

export const ThreadsStatusFilter = {
  ALL: 'filter_all',
  UNREAD: 'filter_unread',
  FOLLOWING: 'filter_following',
  FLAGGED: 'filter_flagged',
};

export const TopicsFilter = {
  ALL: 'all_topics',
  COURSE_SECTION: 'course_section_topics',
  GENERAL: 'general_topics',
};

export const Routes = {
  DISCUSSIONS: {
    PATH: '/discussions/:courseId?',
  },
  THREADS: {
    PATH: '/discussions/:courseId/threads/:discussionId?',
    MY_THREADS: '/discussions/:courseId/threads/mine',
    ALL_THREADS: '/discussions/:courseId/threads/all',
  },
  POSTS: {
    PATH: '/discussions/:courseId/threads/:discussionId/:threadId',
  },
  TOPICS: {
    PATH: '/discussions/:courseId/topics/:category?',
    ALL: '/discussions/:courseId/topics',
  },
};
