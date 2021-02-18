import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

import utilStyles from '../styles/utils.module.css'

export default function Blog({ allPostsData }) {
  return (
    <div className={utilStyles.blogContainer}>
        <Header />
        <Layout>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                    </Link>
                    <br />
                    <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                    </small>
                    <div className={utilStyles.separator}></div>
                </li>
                ))}
              </ul>
            </section>
        </Layout>
    <Footer />
    </div>
  )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }