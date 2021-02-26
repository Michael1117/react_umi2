import React, { Component, PureComponent } from 'react';

export default class ComponentNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'demo'
    };
    console.log('constructor')
    //this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    console.log(props, state)

    return state
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return 'getSnapshotBeforeUpdate---'
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  
  componentDidUpdate(props, state, snapshot) {

    console.log(props, state, snapshot)
  }
  

  handleClick = () => {
    //alert(111)
    this.setState({
      text: 'demo2'
    })
  }
  render() {
    console.log('render')
    return (
      <div onClick={this.handleClick}>
        component-new--{this.state.text}
      </div>
    )
  }
}