import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import debounce from 'lodash/debounce'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  handleInputChange = (event) => {
    this.props.filter(event.target.value)
  }

  render() {
    return (
      <div className='searchbar-container'>
        <Input
        icon='search'
        placeholder='Filter posts by keyword'
        className='searchbar center aligned'
        onChange={debounce(this.handleInputChange, 1000, {
            leading: true,
          })}
      />
      </div>
    )
  }
}