import styles from './Page5.module.css'
import contactIcon from '../../assets/phone.png';
import fbIcon from '../../assets/fbc.png';
import igIcon from '../../assets/igc.png';
import githubIcon from '../../assets/gitc.png';
import linkedinIcon from '../../assets/linkc.png';
import faqIcon from '../../assets/faq-icon.png';

function Page5() {
  return (
    <section className={styles.page5}>
        <div className={styles.mainDiv}>
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact
                <img className={styles.contactIcon} src={contactIcon} alt="icon6"></img>
            </h1>
            <h2>Let's talk</h2>

            <div className={styles.wrapper}>
                <input className={styles.nameInput} type="text" placeholder="Firstname" required=""/>
                <input className={styles.emailInput} type="text" placeholder="Email" required=""/>
                <input className={styles.msgInput} type="text" placeholder="Message" required=""/>
            </div>

            <button className={styles.submitBtn}>Submit</button>

            <p>+63 963 874 2315</p>
            <p>andrewcgarcia33@gmail.com</p> 
            <span>
              <a href="https://twitter.com/" target="_blank">
                <img className={styles.fbIcon} src={fbIcon} alt="Twitter icon" />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <img className={styles.igIcon} src={igIcon} alt="Twitter icon" />
              </a>
              <a href="https://linkedin.com/" target="_blank">
                <img className={styles.linkedinIcon} src={linkedinIcon} alt="Linkedin icon" />
              </a>
              <a href="https://github.com/" target="_blank">
                <img className={styles.githubIcon} src={githubIcon} alt="Github icon" />
              </a>
            </span>
        </div>
        <footer>
          <div className={styles.leftDiv}>
              <h1>Drew.</h1>
              <p>Let's collaborate to bring your vision to life. Feel free to reach out through any of the channels.</p>
              <button className={styles.footBtn}>LET'S CONNECT</button>
          </div>
          <div className={styles.rightDiv}>
            {/* <button className={styles.faqBtn}>Frequently Ask Questions</button> */}
            <button className={styles.faqBtn}>FAQS
              <img className={styles.faqIcon} src={faqIcon} alt="faqIcon"></img>
            </button>            
            <p className={styles.madeP}>Made with love</p>
            <p>&copy; 2024 Andrew Garcia. All rights reserved.</p>
          </div>
        </footer>
    </section>
  )
}

export default Page5
