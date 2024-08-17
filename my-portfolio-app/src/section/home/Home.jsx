import styles from './Home.module.css'
import profilePic from '../../assets/home-pic.png';
import hiIcon from '../../assets/hi.png';
import pinIcon from '../../assets/pin.png';
import fbIcon from '../../assets/fb-colored.png';
import igIcon from '../../assets/ig-colored.png';
import githubIcon from '../../assets/github-colored.png';
import linkedinIcon from '../../assets/linkedin-colored.png';
import skillIcon from '../../assets/skills-icon.png';
import port1 from '../../assets/port-border1.png';
import port2 from '../../assets/port-border2.png';
import port3 from '../../assets/port-border3.png';
import port4 from '../../assets/port-border4.png';
import port5 from '../../assets/port-border5.png';
import { animate, delay, motion } from "framer-motion" 

// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: "-100%",
//     transition: {
//       repeat: Infinity,
//       repeatType: "mirror",
//       duration: 10,
//     }
//   }
// };

function Home() {
  return (
    <section className={styles.sectionHome}>

        <div className={styles.maindiv}>
            <h1><img className={styles.hiIcon} src={hiIcon} alt="Hi icon" />
              Hi, I'm Andrew Garcia.
            </h1>         
            <h2>Frontend React Developer</h2>
            <p>A passionate Frontend React Developer based in Cavite, Philippines.
              <img className={styles.pinIcon} src={pinIcon} alt="pin icon" />
            </p>
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
            <div className={styles.buttonDiv}>
                <button className={styles.button1}>See Latest Works</button>
                <button className={styles.button2}>Contact Me</button>
            </div>
            <img className={styles.skillIcon} src={skillIcon} alt="skills icon" />
            
            

          <div className={styles.wrapper}>
            <motion.div 
              className={styles.item1}
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 200,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
              }}
              >
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port1} src={port1} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port2} src={port2} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port3} src={port3} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port4} src={port4} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port5} src={port5} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port1} src={port1} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port2} src={port2} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port3} src={port3} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port4} src={port4} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port5} src={port5} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port1} src={port1} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port2} src={port2} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port3} src={port3} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port4} src={port4} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port5} src={port5} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port1} src={port1} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port2} src={port2} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port3} src={port3} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port4} src={port4} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port5} src={port5} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port1} src={port1} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port2} src={port2} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port3} src={port3} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port4} src={port4} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port5} src={port5} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port1} src={port1} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port2} src={port2} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port3} src={port3} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port4} src={port4} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <img className={styles.port5} src={port5} alt="Linkedin icon" />
                </a>
            </motion.div>
          </div>

        </div>

       
    </section>
  )
}

export default Home
