import Link from 'next/link'

export default () => (
  <div className='nav'>
    <a className='compose'>COMPOSE</a>
    <ul>
      <li className='active'>
        <Link href='/'><a>Inbox</a></Link>
      </li>
      <li><a>Sent Mail</a></li>
      <li><a>Drafts</a></li>
      <li><a>Trash</a></li>
    </ul>
    <style jsx>{`
    .nav {
      float: left;
      width: 150px;
      margin: 10px 20px 15px 30px;
    }
    ul {
      margin-left: -30px;
    }
    li.active a {
      border-left-color: var(--red);
      color: var(--red);
      font-weight: bold;
    }
    a {
      display: block;
      padding: 3px 3px 3px 27px;
      text-decoration: none;
      border-left: 3px solid #fff;
      color: inherit;
    }
    a:hover {
      background: #e5e5e5;
      border-left-color: #e5e5e5;
    }
    .compose {
      width: 100px;
      padding: 8px 10px 7px;
      margin-bottom: 15px;
      background: var(--red);
      background: linear-gradient(#d65b4b, var(--red));
      border: none;
      color: #fff;
      text-align: center;
      font-size: 11px;
      font-weight: bold;
      border-radius: 2px;
      text-shadow: 0 1px 1px rgba(#000, .2);
    }
    .compose:hover {
      background: linear-gradient(#c13e2c, #ad3727);
      box-shadow: 0 1px 1px rgba(#000, .2);
    }
    `}</style>
  </div>
)
