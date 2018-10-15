/*
 *  title: 'example'
 */
import React, { Component } from 'react';
import { withRouter } from 'dva/router';
import router from 'umi/router';

class Example extends Component {
  state = {
    show: false,
  };
  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleChangeQuery = () => {
    const { location } = this.props;
    const { pathname, query } = location;
    router.push({ pathname, query: { a: !query.a } });
  };
  render() {
    return (
      <div>
        {this.state.show ? 'show' : 'hidden'}
        <button onClick={this.handleClick}>toggle</button>
        <button onClick={this.handleChangeQuery}>change location query</button>
      </div>
    );
  }
}

export default withRouter(Example);
