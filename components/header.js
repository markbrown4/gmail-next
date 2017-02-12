import DropDown from './drop-down'
import Icon from './icon'

export default () => (
  <div className='header'>
    <span className='logo'><img src='/static/logo.png' /></span>
    <DropDown style={{ float: 'right' }}>
      <img className='avatar' src='/static/avatars/me.jpg' />
      <ul className='align-right'>
        <li><a href>Mark Brown &lt;markbrown4@gmail.com&gt;</a></li>
        <li><a href>Mark Brown &lt;mark@inspire9.com&gt;</a></li>
        <li><a href>Mark Brown &lt;mark@adioso.com&gt;</a></li>
      </ul>
    </DropDown>
    <form className='search'>
      <input className='search-input' name='query' />
      <button type='submit' className='search-btn primary-btn'>
        <Icon name='search' />
      </button>
    </form>
    <style jsx>{`
    .header {
      height: 32px;
      background: #f1f1f1;
      border-bottom: 1px solid #e5e5e5;
      padding: 14px 30px 12px;
    }
    .logo {
      float: left;
      width: 150px;
      margin: 0 20px 0 0;
    }
    .logo img {
      display: block;
      width: 90px;
    }
    .avatar {
      display: block;
      width: 32px;
      height: 32px;
      border-radius: 32px;
      overflow: hidden;
    }
    .search-input {
      float: left;
      width: 510px;
      padding: 5px 7px 4px;
      border: 1px solid #d9d9d9;
      border-top-color: #c0c0c0;
      font-size: 16px;
    }
    .search-input:focus {
      border-color: #4d90fe;
    }
    .search-btn {
      float: left;
      margin-left: -1px;
      border-radius: 0 3px 3px 0;
    }
    .icon-search {
      margin-top: -3px;
    }
    `}</style>
  </div>
)
