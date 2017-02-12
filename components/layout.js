import Head from 'next/head'

import Header from '../components/header'
import SubHeader from '../components/sub-header'
import Nav from '../components/nav'
import Compose from '../components/compose'
import Flash from './flash'

export default ({
  children,
  title = '▲Mail'
}) => (
  <div id='wrapper'>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' href='/static/global.css' />
    </Head>
    <Header />
    <SubHeader />
    <Nav />
    <div className='content'>
      { children }
    </div>
    <Compose />
    <Flash />
    <style jsx>{`
    .content {
      overflow: auto;
      overflow-x: hidden;
      margin: 0 15px 0 185px;
    }
    `}</style>
  </div>
)
