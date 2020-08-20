import React from 'react';
import { Route, Switch } from 'react-router';
import { Routes } from '../../data/constants';
import CommentsViewContainer from '../comments/CommentsViewContainer';
import { NavigationBar } from '../navigation-bar';
import PostsViewContainer from '../posts/PostsViewContainer';
import { TopicsViewContainer } from '../topics';

export default function DiscussionsHome() {
  return (
    <main className="container-fluid mb-2">
      <div className="d-flex flex-column">
        <Switch>
          <Route path={Routes.DISCUSSIONS.PATH} component={NavigationBar} />
        </Switch>
        <div className="d-flex flex-row">
          <div className="d-flex flex-column w-50 pr-1">
            <Switch>
              <Route path={Routes.POSTS.PATH} component={PostsViewContainer} />
              <Route path={Routes.TOPICS.PATH} component={TopicsViewContainer} />
            </Switch>
          </div>
          <div className="d-flex w-50 pl-1">
            <Switch>
              <Route path={Routes.THREADS.PATH}>
                <CommentsViewContainer />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </main>
  );
}
