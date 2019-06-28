import React, { Component } from 'react'
import PostTable from './PostTable'
import SearchBar from './SearchBar'
import './App.scss'

export default class FilterablePostsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  render() {
    const { filter } = this.state

    return (
      <div className="filterable-posts-table">
          <SearchBar filter={(filter) => this.setState({filter})}/>
          <PostTable filter={filter}/>
      </div>
    );
  }
}