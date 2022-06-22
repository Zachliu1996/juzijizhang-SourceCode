import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Tags from './views/Tags'
import Money from './views/Money'
import Statistics from './views/Statistic'
import NoMatch from './views/NoMatch'
import styled from 'styled-components'
import {Tag} from './views/Tag'

const AppWrapper = styled.div`
  color:#333;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

function App() {
  return (
    <AppWrapper>
    <Router>
      <Switch>
        <Route path="/tags" exact>
          <Tags/>
        </Route>
        <Route path="/tags/:id" exact={true}>
          <Tag/>
        </Route>
        <Route path="/money" exact>
          <Money/>
        </Route>
        <Route path="/statistics" exact>
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
    </AppWrapper>
  );
}

export default App;