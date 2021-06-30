import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />

          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          {/* <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          /> */}
          {/* <Route
            exact
            path="/resetpassword/:resetToken"
            component={ResetPasswordScreen}
          /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
