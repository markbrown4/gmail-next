export default () => (
  <div className='flash' v-if='flashes.length > 0' style={{ display: 'none' }}>
    <div v-for='flash in flashes' className='inner'>flash</div>
    <style jsx>{`
    .flash {
      position: fixed;
      top: 46px;
      left: 50%;
    }
    .inner {
      position: relative;
      left: -50%;
      white-space: nowrap;
      background: #F9EDBE;
      border: 1px solid #f0c36d;
      color: #222;
      padding: 5px 10px;
      margin-bottom: 5px;
      border-radius: 3px;
      box-shadow: 0 2px 2px rgba(0,0,0, .1);
    }
    `}</style>
  </div>
)
