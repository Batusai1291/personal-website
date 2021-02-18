import utilStyles from '../styles/utils.module.css'

const name = 'Marco Reyes Robleto'

export default function Footer() {
  return (
    <footer className={utilStyles.footerContainer}>
        <p className={utilStyles.footerP}>{name}</p>
        <div className={utilStyles.footerIconContainer}>
          <a href="">
              <img className={utilStyles.footerIcon} src="/images/twitter.svg" alt="Twitter"/>
          </a>
          <a href="">
              <img className={utilStyles.footerIcon} src="/images/github.svg" alt="GitHub"/>
          </a>
          <a href="">
              <img className={utilStyles.footerIcon} src="/images/linkedin.svg" alt="LinkedIn"/>
          </a>
      </div>
    </footer>
  )
}
