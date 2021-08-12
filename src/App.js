import { Typography } from "@material-ui/core";
import { Router, Redirect } from "@reach/router";
import Homepage from "./views/Homepage";

function App() {
  return (
    <>
      <Router>
        <Homepage path="/" />
        {/* <Redirect from="/" to="/homepage" noThrow="true" /> */}


      </Router>
      
    </>  
  );
}

export default App;
