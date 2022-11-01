import Head from 'next/head'
import { HomeUi } from '../components'


export default function Home() {
  return (
    <div >
      <Head>
        <title>African market</title>
        <meta name="description" content="the african market web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <HomeUi/> 
      </main>

     
    </div>
  )
}
