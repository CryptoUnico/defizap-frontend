import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import autobind from 'react-autobind';
import { connect } from 'react-redux';

import './App.css';

import ZapsPage from './components/Zaps';
import ZapListContainer from './components/ZapList/ZapListContainer';
import LandingPage from './components/LandingPage';

class App extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      location: PropTypes.shape({ search: PropTypes.string }),
      listen: PropTypes.func,
      replace: PropTypes.func
    }).isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
    autobind(this);
  }

  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/apps" component={ZapListContainer} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
