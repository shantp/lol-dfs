import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionCreators from './actions/tabs';

class App extends React.Component {
  render() {
    const {tabs, dispatch} = this.props;
    const actions = bindActionCreators(ActionCreators, dispatch);

    return (
      <div>
      </div>
    );
  }
}

App.propTypes = {
  tabs: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  };
}

export default connect(mapStateToProps)(App);
