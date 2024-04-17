import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      comments: '',
      topic: 'vue'
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleCommentscChangle = (event) => {
    this.setState({
      comments: event.target.value
    })
  }

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value
    })
  }

  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
  }
  render() {
    const {username, comments, topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='App'>
          <label>Username</label>
          <input type="text" value={username}
            onChange={this.handleUsernameChange} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments}
            onChange={this.handleCommentscChangle}></textarea>
        </div>
        <div>
          <lable>Topic</lable>
          <select value={topic}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type='submit'>submit</button>
      </form>
    )
  }
}

export default Form
