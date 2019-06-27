import React, { Component } from 'react'
import Post from './Post'

export default class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      posts: [],
      isLoading: false
    }
  }

  async componentDidMount() {
    const userData = await this.fetchUserData()
    const postData = await this.fetchPostData()
    this.setState({ users: userData, posts: postData})
    console.log(this.state.users)
    console.log(this.state.posts)
  }

  async fetchUserData() {
    // try catch
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
  }

  async fetchPostData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
  }

  getUserFromPost(userId) {
    const { users } = this.state
    const user = users.find((user) => user.id === userId)
    // console.log(user)
    return user
  }

  render() {
    const { users, posts } = this.state
    return (
      <div>
        Content
        {
          posts.map((post) => {
            return (
              <Post key={post.id} post={post} user={this.getUserFromPost(post.userId)}/>
            )
          })
        }
      </div>
    );
  }
}