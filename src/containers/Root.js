import React from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
class Root extends React.Component {
	static propTypes = {
		routes:PropTypes.object,
		store:PropTypes.object
	}
  render() {

    return (
      <Provider store={this.props.store}>
      	<BrowserRouter>
          {this.props.routes}
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
