import styles from './Page1.module.css'

import { animate, delay, motion } from "framer-motion" 

const textVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.1, 
    },
  }, 
  scrollButton: {
    opacity: 0,
    y: 10,
    transition:{
      duration: 2,
      delay: 1,
      repeat: Infinity
    }
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    }
  }
};

function Page1() {
  return (
    <section className={styles.page1}>

      <div className={styles.Mdiv}>
        <motion.div 
          className={styles.div1} 
          variants={textVariants}
          initial="initial"
          animate="animate"
          >
            <motion.h1 variants={textVariants}>
                Andrew
            </motion.h1>
            <motion.h2 variants={textVariants}>
                Frontend Developer
            </motion.h2>
            <motion.span variants={textVariants}>
            <a href="https://twitter.com/" target="_blank">
                <img className={styles.twitter} src={twitterIcon} alt="Twitter icon" />
              </a>
              <a href="https://github.com/" target="_blank">
                <img src={githubIcon} alt="Github icon" />
              </a>
              <a href="https://linkedin.com/" target="_blank">
                <img src={linkedinIcon} alt="Linkedin icon" />
              </a>
            </motion.span>
            <motion.p variants={textVariants}>
              With a passion for developing modern React web apps for commercial
              businesses.
            </motion.p>
            <motion.div className={styles.buttondiv} variants={textVariants}>
              <button  className={styles.button1} variants={textVariants}>See the Latest Works</button>
              <button  className={styles.button2} variants={textVariants}>Contact Me</button>
            </motion.div>
            <motion.img className={styles.scrollIcon} src={scrollDown} alt="ScrollDown icon" variants={textVariants} animate="scrollButton"/>
        </motion.div>
        

        <div className={styles.picDiv}>
          <img
          src={profilePic}
          className={styles.pic}
          alt="Profile Picture"
          />
        </div>
        
      </div>        
{/* -------------------------ANDREW GARCIA ANIMATION------------------------------- */}
        <motion.div 
          className={styles.item1}
          variants={sliderVariants}
          initial="initial"
          animate="animate"  
          >FRONTEND DEVELOPER
        </motion.div>
        
      
    </section>
  )
}

export default Page1
