import Layout from '../components/layout'
import Icon from '../components/icon'

export default () => (
  <Layout>
    <div className='thread'>
      <h1>Kiddo</h1>
      <ul className='messages'>
        <li className='message active'>
          <div className='thread-tools'>
            <time>Aug 27 (4 days ago)</time>
            <div className='split-btn'>
              <a href className='btn'><Icon name='reply' /></a>
              <div className='drop-down btn btn-mini'>
                <Icon name='down' />
                <ul className='align-right'>
                  <li><a href>Reply</a></li>
                  <li><a href>Reply all</a></li>
                  <li><a href>Forward</a></li>
                </ul>
              </div>
            </div>
          </div>
          <img className='avatar' src='/static/avatars/budd.jpg' />
          <div className='from'>
            <span className='name'>Budd </span>
            <span className='email'>&lt;budlight@gmail.com&gt;</span>
          </div>
          <div className='to'>
            to
            {' '}
            <span>me</span>
          </div>
          <div className='body'>I don't dodge guilt and I don't Jew out of paying my comeuppance.</div>
        </li>
      </ul>
      <div className='reply'>
        <img src='/static/avatars/me.jpg' className='avatar' />
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
