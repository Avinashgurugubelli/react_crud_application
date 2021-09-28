
import './App.css';
import AppNavBar from './modules/app-layouts/app-nav-bar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomeComponent from './modules/home/home-component';
import AboutComponent from './modules/about/about-component';
import EmployeeContainer from './modules/employee/components/employee-container';
import EmployeeForm from './modules/employee/components/employee-form';
import routes from './routes';
import PageNotFound from './modules/app-layouts/page-not-found';
import ArticleContainer from './modules/articles/components/article-container';
import ArticleForm from './modules/articles/components/article-form';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeComponent />
        </Route>
        <Route path="/home">
          <HomeComponent />
        </Route>
        <Route path="/about">
          <AboutComponent />
        </Route>
        <Route path="/employee">
          <EmployeeContainer />
        </Route>
        <Route path="/add/employee">
          <EmployeeForm />
        </Route>
        <Route path="/articles">
          <ArticleContainer />
        </Route>
        <Route path="/add/article">
          <ArticleForm />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
