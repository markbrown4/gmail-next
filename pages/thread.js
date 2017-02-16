import React, {Component} from 'react'
import 'isomorphic-fetch'

import Layout from '../components/layout'
import Icon from '../components/icon'
import DropDown from '../components/drop-down'

export default class extends Component {
  static async getInitialProps (props) {
    const id = props.query.id
    const res = await global.fetch(`http://localhost:3000/static/api/threads/${id}.json`)
    const thread = await res.json()

    return { thread }
  }
  render () {
    const messages = this.props.thread.messages

    return (
      <Layout>
        <div className='thread'>
          <h1>{ messages[0].subject }</h1>
          <ul className='messages'>
            { messages.map(message => (
              <li className='message active'>
                <div className='thread-tools'>
                  <time>{message.createdAt} (4 days ago)</time>
                  <div className='split-btn'>
                    <a href className='btn'><Icon name='reply' /></a>
                    <DropDown className='btn btn-mini'>
                      <Icon name='down' />
                      <ul className='align-right'>
                        <li><a href>Reply</a></li>
                        <li><a href>Reply all</a></li>
                        <li><a href>Forward</a></li>
                      </ul>
                    </DropDown>
                  </div>
                </div>
                <img className='avatar' src={message.from.avatarUrl} />
                <div className='from'>
                  <span className='name'>{message.from.firstName} {message.from.lastName}</span>
                  <span className='email'>&lt;{message.from.email}&gt;</span>
                </div>
                <div className='to'>
                  to
                  {' '}
                  <span>{ message.to.map(person => person.firstName).join(', ') }</span>
                </div>
                <div className='body' dangerouslySetInnerHTML={{__html: message.body}} />
              </li>
            ))}
          </ul>
          <div className='reply'>
            <img className='avatar' src='/static/avatars/me.jpg' />
            <div className='reply-box'>
              <p>Click here to <a href>Reply</a>, <a href>Reply to all</a> or <a href>Forward</a></p>
            </div>
          </div>
        </div>
        <style jsx>{`
        h1 {
          padding-left: 10px;
        }
        .avatar {
          float: left;
          margin-left: -42px;
          width: 32px;
          height: 32px;
          margin-right: 10px;
        }
        .from {
          margin: 0 5px 5px 0;
        }
        .to {
          color: #777;
          padding: 0 0 10px;
        }
        .name {
          color: #222;
          font-weight: bold;
        }
        .body {
          color: #555;
        }
        .email {
          color: #555
        }
        .message {
          white-space: nowrap;
          padding: 10px 20px 10px 52px;
          border-top: 1px solid #e5e5e5;
          background: #f5f5f5;
          cursor: pointer;
        }
        time {
          margin-right: -20px;
          padding-right: 20px;
        }
        .active {
          background: #fff;
          padding-bottom: 30px;
          white-space: normal;
          cursor: default;
        }
        .active time {
          width: auto;
          background: inherit;
          padding: 0;
          margin: 0;
        }
        .active .body {
          color: #222;
        }
        .thread-tools {
          float: right;
        }
        .thread-tools .split-btn {
          float: none;
          display: inline-block;
          vertical-align: middle;
          margin: 0 0 0 10px;
        }
        .reply {
          border-top: 1px solid #e5e5e5;
          padding: 10px 10px 10px 52px;
          color: #999;
        }
        .reply a { color: inherit }
        .reply-box {
          height: 64px;
          padding: 10px;
          border: 1px solid #e5e5e5;
        }
        `}</style>
      </Layout>
    )
  }
}
