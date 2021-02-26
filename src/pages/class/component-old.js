import React, { Component, PureComponent } from 'react';

export default class ComponentOld extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      //text: 'demo'
      text: {id: 1}
    };
    console.log('constructor')
    //this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  /* handleClick() {
    alert(111)
  } */
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  /* shouldComponentUpdate(props, state) {
    console.log('shouldComponentUpdate');
    console.log(props, state);
    if (state.text === 'demo-new' && this.state.text !== state.text) {
      return true;
    }
    return false;
  } */

  handleClick = () => {
    //alert(111)
    this.setState({
      //text: 'demo2'
      text: {id: 2}
    })
  }
  render() {
    console.log('render')
    return (
      <div onClick={this.handleClick}>
        component-Old--{this.state.text.id}
      </div>
    )
  }
}