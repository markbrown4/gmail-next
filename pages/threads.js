import React, {Component} from 'react'
import 'isomorphic-fetch'
import Link from 'next/link'

import Layout from '../components/layout'

export default class extends Component {
  static async getInitialProps () {
    const res = await global.fetch('http://localhost:3000/static/api/threads/index.json')
    const threads = await res.json()

    return { threads }
  }
  render () {
    return (
      <Layout>
        <ul className='threads'>
          { this.props.threads.map(thread => {
            const lastMessage = thread.lastMessage
            return (
              <li className='thread unread'>
                <Link href={`/thread?id=${thread.id}`}>
                  <a>
                    <time>{ lastMessage.createdAt }</time>
                    <span className='check' />
                    <span className='people'>
                      { thread.participants.map(person => (
                        <span className='name unread'>
                          { person.firstName } { person.lastName }
                        </span>
                      ))}
                    </span>
                    <span className='subject'>{ lastMessage.subject }</span>
                    <span className='body'>- { lastMessage.snippet }</span>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
        <style jsx>{`
        .threads {
          border-top: 1px solid #e5e5e5;
          margin-top: 10px;
        }
        time {
          float: right;
          width: 55px;
          text-align: right;
          padding: 0 20px;
          background: #f5f5f5;
          position: relative;
        }
        .people {
          float: left;
          width: 180px;
        }
        .body {
          color: #777;
        }
        a {
          display: block;
          padding: 8px 0 8px 10px;
          color: inherit;
          text-decoration: none;
        }
        .thread {
          background: #f5f5f5;
          border-bottom: 1px solid #e5e5e5;
          white-space: nowrap;
        }
        .unread {
          background: #fff;
        }
        .unread time {
          background: #fff;
        }
        .unread .subject,
        .unread .name.unread,
        .unread time {
          font-weight: bold;
        }
        .selected {
          background: #ffc;
        }
        .selected time {
          background: #ffc;
        }
        `}</style>
      </Layout>
    )
  }
}
