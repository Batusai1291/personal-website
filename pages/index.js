import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={utilStyles.container}>
      <Header />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <h1>Hello there, I'm Marco 😁</h1>
            <p>A software engineer who enjoys programming and having good times</p>
            <p>I make web applications 👨‍💻</p>
            <h3>Other cool things that I enjoy</h3>
            <p>
              💚 Open Source
              <br/>
              👩‍🔬 Science
              <br/>
              🎸 Music
              <br/>
              🤓 Read
            </p>
            <p><a href="/uses">Here</a> are some of things that I use on a daily basis.</p>
            <p>You can check out my blog ✍️ , or contact me to talk about your projects in <a href="https://www.linkedin.com/in/mreyez1291/">LinkedIn</a></p>
        </section>
    </Layout>
    <Footer />
    </div>
  )
}
