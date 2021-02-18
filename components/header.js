import utilStyles from '../styles/utils.module.css'

export default function Header() {
  return (
    <header>
        <nav className={utilStyles.headerNav}>
            <a href="/">
                <img className={utilStyles.headerImg} src="/images/logo.svg" alt="Logo"/>
            </a>
            <div className={utilStyles.headerBlogConta}>
                <a className={utilStyles.blogContac} href="/contact">contact</a>
                <a className={utilStyles.blogContac} href="/blog">Blog</a>
            </div>
        </nav>
    </header>
  )
}
