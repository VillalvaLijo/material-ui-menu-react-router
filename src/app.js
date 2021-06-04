import Profile from "./profile";
import Account from "./account";
import Logout from "./logout";
import Demo from "./demo";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Demo />
        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
