import React, { Component } from 'react'
import PostRow from './PostRow'
import { Loader, Dimmer } from 'semantic-ui-react'

export default class PostTable extends Component {
  constructor(props) {
    super(props)


    this.state = {
      isLoading: false,
      users: [],
      postsWithUser: [],
    }
  }

  async componentDidMount() {
    const { filter } = this.props
    const userData = await this.fetchUserData()
    const postData = await this.fetchPostData()
    this.setState({users: userData, postsWithUser: postData})

    await this.getPostWithUser()

    if(filter.length > 0) {
      await this.getFilteredPosts(filter)
    }
  }

  async fetchUserData() {
    // try catch
    try {
      this.setState({isLoading: true})
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      return data
    } catch(err) {
      // should add some error handling
    } finally {
      this.setState({isLoading: false})
    }
  }

  async fetchPostData() {
    try {
      this.setState({isLoading: true})
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      return data
    } catch(err) {
      // should add some error handling
    } finally {
      this.setState({isLoading: false})
    }
  }

  getUserFromPost(userId) {
    const { users } = this.state
    const user = users.find((user) => user.id === userId)
    return user
  }

  // this is to add the user obj into the post so i was hopefully able to search through both posts & users
  async getPostWithUser() {
    const { postsWithUser } = this.state

    postsWithUser.forEach((post) => {
      Object.assign(post, {user: this.getUserFromPost(post.userId)})
    })

    this.setState({postsWithUser})

  }

  // this right now can only filter by posts keywords, not any user info. i would like to be able to do that. 
  getFilteredPosts(filter) {
    // filter by post
    const filteredPosts = this.state.postsWithUser.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toLowerCase())
      );
    });

    return filteredPosts
  }

  render() {
    const { filter } = this.props
    const { isLoading } = this.state
    const { postsWithUser } = this.state
    let filteredPosts = postsWithUser

    if (filter.length > 0) {
      filteredPosts = this.getFilteredPosts(filter)
    }

    return (
      <div className="content">
        { 
        isLoading && 
        <Dimmer active inverted>
          < Loader inverted>Loading...</Loader>
        </Dimmer>
        }
        {
          !isLoading && filteredPosts.map((post) => {
            return (
              <PostRow key={post.id} post={post} user={this.getUserFromPost(post.userId)}/>
            )
          })
        }
      </div>
    );
  }
}