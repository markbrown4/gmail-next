import Layout from '../components/layout'

export default () => (
  <Layout>
    <ul className='threads'>
      <li className='thread unread'>
        <a>
          <time>Aug 30</time>
          <span className='check' />
          <span className='people'>
            <span className='name unread'>Beatrix Kiddo</span>
          </span>
          <span className='subject'>My fox force five joke</span>
          <span className='body'>- Vincent, You still wanna hear it?</span>
        </a>
      </li>
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
