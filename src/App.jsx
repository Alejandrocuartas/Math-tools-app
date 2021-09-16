import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import CalculatorContainer from './pages/CalculatorContainer';
import FactsContainer from './pages/FactsContainer';

const App = (props) => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/calculator" component={CalculatorContainer} />
                    <Route exact path="/" component={Home} />
                    <Route exact path='/facts' component={FactsContainer} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;