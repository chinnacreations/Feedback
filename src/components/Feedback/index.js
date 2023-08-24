import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedBack: true,
  }

  onClickEmoji = () => {
    this.setState({isFeedBack: false})
  }

  renderFeedBack() {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="card-con">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-con">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button type="button" className="btn" onClick={this.onClickEmoji}>
                <img
                  className="emoji-img"
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                />
                <br />
                <span className="name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYou() {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thankyou-con">
        <img className="img" alt="love emoji" src={loveEmojiUrl} />
        <h1 className="heading">Thank you!</h1>
        <p className="desc">
          We will use your feedback to improve our customer support
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBack} = this.state
    return (
      <div className="bg-con">
        <div className="card-con">
          {isFeedBack ? this.renderFeedBack() : this.renderThankYou()}
        </div>
      </div>
    )
  }
}

export default Feedback
