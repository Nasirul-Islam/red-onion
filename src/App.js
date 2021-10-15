import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Breakfast from './Pages/Meals/Breakfast/Breakfast';
import Dinner from './Pages/Meals/Dinner/Dinner';
import Lunch from './Pages/Meals/Lunch/Lunch';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route path="/details/:detailsId">
            <Details></Details>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
