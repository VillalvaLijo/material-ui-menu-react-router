import Profile from "./profile";
import Account from "./account";
import Logout from "./logout";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/account">
            <Account />
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
