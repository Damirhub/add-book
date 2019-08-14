import React from "react"
import Mockup from "./containers/Mockup"
import { Router, Route, Switch, Redirect } from "react-router"
import { createBrowserHistory } from "history"
import Header from "./containers/Header"
import Steps from "./containers/Steps"

const ExampleRoute = () => <h2>ExampleRoute</h2>
const ExampleRoute2 = props => {
  console.log("ROUTER PROPS: ", props)
  return <h2>ExampleRoute2 {props.match.params.id}</h2>
}

const App = () => {
  return (
    <>
      {/* <Router history={createBrowserHistory()}>
        <Header />
        <Switch>
          <Route exact path="/" component={Mockup} />
          <Route exact path="/test" component={ExampleRoute} />
          <Route exact path="/test/:id" component={ExampleRoute2} />
        </Switch>
      </Router> */}
      <Steps />
      {/* <Mockup /> */}
    </>
  )
}

export default App
