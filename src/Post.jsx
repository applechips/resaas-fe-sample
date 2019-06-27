import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class Post extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { user, post } = this.props

    return (
      <Card className='post-card centered'>
        <Card.Content>
          <Image floated='left' size='tiny' src='https://via.placeholder.com/120' />
          <Card.Header>{user.name}</Card.Header>
          <Card.Meta>{user.email} | {user.address.city}</Card.Meta>
          <Card.Description><strong>{post.title}</strong></Card.Description>
          <Card.Description>{post.body}</Card.Description>
        </Card.Content>
      </Card>
      //   <div>
      //     <img src="https://via.placeholder.com/120"/>
      //     <p>{user.name}</p>
      //     <p>{user.email} | {user.address.city}</p>
      //   </div>
      //   <p><strong>{post.title}</strong></p>
      //   <p>{post.body}</p>
      // </div>
    );
  }
}