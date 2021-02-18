import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

import utilStyles from '../styles/utils.module.css'

export default function Uses() {
  return (
    <div className={utilStyles.usesContainer}>
        <Header />
        <Layout>
            <section>
                <h3>👨‍💻 Programming</h3>        
                <ul>
                    <li>💛 JavaScript</li>
                    <li>💚 C#</li>
                    <li>💜 .Net Core</li>
                    <li>💙 React Js</li>
                    <li>💚 Node Js</li>
                    <li>🖤 Next Js</li>
                    <li>🧡 Git</li>
                </ul>      
            </section>
            <section>
                <h3>🔨 Editor & Console</h3>
                <ul>
                    <li>My favorite editor these days is <a href="https://code.visualstudio.com/"> VS Code</a> with the <a href="https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme">Palenight Theme</a>. I do all my coding in it.</li>
                    <li>My Terminal is the regular terminal from my mac.</li>
                </ul>
            </section>
            <section>
                <h3>📊 Apps & Productivity</h3>
                <ul>
                    <li>I use <a href="https://todoist.com/">Todoist</a> to keep track of my tasks and daily chores.</li>
                    <li>I use <a href="https://slack.com/">Slack</a> always to communicate with my colleagues</li>
                    <li><a href="https://macpaw.com/">CleanMyMac X</a> because it helps me to keep my machine clean.</li>
                    <li>I use <a href="https://www.npmjs.com/"> npm</a> as my package manager.</li>
                </ul>
            </section>
            <section>
                <h3>🖥️ Desk Setup</h3>
                <ul>
                    <li>My laptop is a <a href="https://www.amazon.com/dp/B08N5N6RSS/ref=fs_a_mbt2_us2">Macbook pro 16"</a></li>
                    <li>I use the <a href="https://www.amazon.com/Apple-Magic-Mouse-Wireless-Rechargable/dp/B016QO5YNG/?th=1">apple magic mouse 2</a></li>
                </ul>
            </section>
        </Layout>
        <Footer />
    </div>
  )
}