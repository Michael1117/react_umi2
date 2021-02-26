import React, { Component } from 'react'
import {SearchBar} from 'antd-mobile'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (value) => {
    this.setState({
      value
    })
  }
  /* handleSubmit = () => {
    //alert('')
    this.props.dispatch({
      type: 'search/getLists',
      payload: this.state.value
    })
  } */
  handleSubmit = () => {
    //alert('')
    this.props.dispatch({
      type: 'search/getListsAsync',
      payload: this.state.value
    })
  }
  render() {
    return (
      <div>
        <SearchBar
          autoFocus
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        ></SearchBar>
      </div>
    )
  }
}
