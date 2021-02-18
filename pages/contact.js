import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'


import utilStyles from '../styles/utils.module.css'


export default function Contact() {
  return (
    <div className={utilStyles.container}>
        <Header />
        <Layout>
            <section>
              <h1>Let's talk about coding and business</h1>
              <h3>You can find me in</h3>
              <img className={utilStyles.contactSVG} src="/images/arrow.svg" alt=""/>
              <ul className={utilStyles.contactUl}>
                  <li>
                      <a href="https://twitter.com/mvrcoreyez">Twitter</a>
                  </li>
                  <li>
                      <a href="https://github.com/Batusai1291">GitHub</a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/in/mreyez1291/">LinkedIn</a>
                  </li>
              </ul>
            </section>
        </Layout>
        <Footer />
    </div>
  )
}