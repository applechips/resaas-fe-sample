import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class Post extends Component {

  render() {
    const { post, user} = this.props

    return (
      <Card className='post-card centered'>
        <Card.Content>
          <Image className='user-image' floated='left' size='tiny' src='https://via.placeholder.com/120' />
          <Card.Header className='user-name-header'>{user.name}</Card.Header>
          <Card.Meta>{user.email} | {user.address.city}</Card.Meta>
          <Card.Description><strong>{post.title}</strong></Card.Description>
          <Card.Description>{post.body}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}