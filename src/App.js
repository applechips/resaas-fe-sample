import React, { Component } from 'react'
import './App.scss'
import FilterablePostsTable from './FilterablePostsTable'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  render() {
    return (
      <div className="app">
        <h1>RESAAS FE Sample</h1>
        <FilterablePostsTable />
      </div>
    );
  }
}