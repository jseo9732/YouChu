import React, { useContext } from 'react';
import { UserContext } from 'lib/UserContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import PrivateRoute from 'components/PrivateRoute';
import {
  Home,
  List,
  Youtuber,
  ReviewWrite,
  Login,
  EmptyPage,
  Signup,
  YoutuberAllReview,
  Profile,
  MyAllReview,
  Search,
  ModifyNickName,
  ModifyCategory,
} from 'pages/pageIndex';

export default function AppRouter() {
  const { isShowHeader } = useContext(UserContext);
  return (
    <Router>
      <Header />
      <div id="wrap">
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route exact path="/youtubers" component={List} />
            <Route
              exact
              path="/youtubers/review/:channel_id"
              component={Youtuber}
            />
            <Route
              path="/youtubers/review/detail/:channel_id"
              component={YoutuberAllReview}
            />
            <PrivateRoute
              path="/youtubers/reviewWrite/:channel_id"
              component={ReviewWrite}
            />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/signup" component={Signup} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute path="/profile/allReview" component={MyAllReview} />
            <PrivateRoute path="/modifyNickName" component={ModifyNickName} />
            <PrivateRoute path="/modifyCategory" component={ModifyCategory} />
            <Route component={EmptyPage} />
          </Switch>
        </ScrollToTop>
        <div id="footer">{isShowHeader && <Footer />}</div>
      </div>
    </Router>
  );
}
