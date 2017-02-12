import DropDown from './drop-down'
import Icon from './icon'

export default () => (
  <div className='compose' v-if='active' style={{ display: 'none' }}>
    <div className='header section'>
      <a className='close'>×</a>
      <h2>New Message</h2>
    </div>
    <div className='section'>
      <div v-if='activeSection != "to"'>
        <input className='full' v-model='message.to' placeholder='Recipients' />
      </div>
      <div v-if='activeSection == "to"'>
        <div className='input'>
          <label for='message_to'>To</label>
          <div className='fit'>
            <input v-model='message.to' className='full' v-focus />
          </div>
        </div>
        <div className='input' v-if='ccActive'>
          <label for='message_cc'>Cc</label>
          <div className='fit'>
            <input v-model='message.cc' className='full' v-focus />
          </div>
        </div>
        <div className='input' v-if='bccActive'>
          <label for='message_bcc'>Bcc</label>
          <div className='fit'>
            <input v-model='message.bcc' className='full' v-focus />
          </div>
        </div>
        <div>
          <label>From</label>
          <a className='bcc' v-if='!bccActive'>Bcc</a>
          <a className='cc' v-if='!ccActive'>Cc</a>
          <DropDown className='from-address'>
            <span>message.from | nameAndEmail</span>
            <Icon name='down' />
            <ul className='align-right'>
              <li v-for='account in currentUser.accounts'>
                <a>account | nameAndEmail</a>
              </li>
            </ul>
          </DropDown>
        </div>
      </div>
    </div>
    <div className='section'>
      <input className='full' placeholder='Subject' />
    </div>
    <div className='section'>
      <textarea placeholder='Body' />
    </div>
    <div className='footer section'>
      <input type='submit' className='btn primary-btn' value='Send' />
    </div>
    <style jsx>{`
    .compose {
      background: #fff;
      box-shadow: 0 1px 2px rgba(0,0,0, .2);
      position: fixed;
      bottom: 0;
      right: 10px;
      width: 510px;
    }
    .header {
      background: #404040;
      border-color: #404040;
    }
    .close {
      float: right;
      color: #b2b2b2;
      font: 16px/27px sans-serif;
      height: 28px;
      width: 28px;
      margin-top: -6px;
      margin-right: -6px;
      text-align: center;
      text-decoration: none;
    }
    .close:hover {
      color: #fff;
      background: #737373;
    }
    h2 {
      font: inherit;
      color: #fff;
      margin: 0;
    }
    .section {
      border: 1px solid #CFCFCF;
      border-bottom: none;
      padding: 10px;
    }
    label {
      float: left;
      width: 40px;
    }
    .input {
      width: 100%;
      overflow: hidden;
      padding-bottom: 8px;
    }
    .cc, .bcc {
      float: right;
      margin-left: 5px;
    }
    .fit {
      overflow: hidden;
    }
    .from-address {
      display: inline-block;
      color: #777;
    }
    .from-address :hover {
      color: #222;
    }
    .footer {
      overflow: hidden;
      background: #F5F5F5;
    }
    `}</style>
  </div>
)
