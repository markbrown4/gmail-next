import Icon from './icon'
import DropDown from './drop-down'
import CheckBox from './check-box'

export default () => (
  <div className='sub-header'>
    <h1 className='app-name'><span>▲</span>mail</h1>
    <div className='paging'>
      <strong>1-3</strong>
      {' '}
      of
      {' '}
      <strong>3</strong>
      <div className='split-btn'>
        <a href className='btn btn-mini' title='Previous'><Icon name='prev' /></a>
        <a href className='btn btn-mini' title='Next'><Icon name='next' /></a>
      </div>
    </div>
    <a href='/' className='btn' title='Back to Inbox'><Icon name='back' /></a>
    <DropDown className='btn'>
      <CheckBox />
      <Icon name='down' />
      <ul>
        <li><a>All</a></li>
        <li><a>None</a></li>
        <li><a>Read</a></li>
        <li><a>Unread</a></li>
      </ul>
    </DropDown>
    <div className='split-btn'>
      <a href className='btn' title='Archive'><Icon name='archive' /></a>
      <a href className='btn' title='Report Spam'><Icon name='spam' /></a>
      <a href className='btn' title='Delete'><Icon name='delete' /></a>
    </div>
    <a href className='btn'><Icon name='refresh' /></a>
    <style jsx>{`
    .sub-header {
      padding: 8px 30px 8px 200px;
      border-bottom: 1px solid #e5e5e5;
      height: 30px;
    }
    .app-name {
      margin: 0 0 0 -170px;
      line-height: 32px;
      color: var(--red);
      float: left;
    }
    .paging {
      float: right;
      line-height: 32px;
    }
    .paging .split-btn {
      float: right;
      margin: 0 0 0 10px;
      line-height: 1.2;
    }
    .paging .btn .icon {
      opacity: .5
    }
    .paging .btn:hover .icon {
      opacity: .9;
    }
    .inactive {
      cursor: default;
    }
    .inactive .icon { opacity: .3 }
    .inactive:hover .icon {
      opacity: .3;
    }
    `}</style>
  </div>
)
