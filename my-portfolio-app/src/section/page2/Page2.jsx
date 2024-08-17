import styles from './Page2.module.css'
import page2Pic from '../../assets/about-pic1.png';
import aboutEmoji from '../../assets/me.png';
import arrowUp from '../../assets/arrow-up.png';
import Icon1 from '../../assets/html-icon.png';
import Icon2 from '../../assets/css-icon.png';
import Icon3 from '../../assets/java-icon.png';
import Icon4 from '../../assets/react-icon.png';
import Icon5 from '../../assets/ionic-icon.png';
import Icon6 from '../../assets/tailwind-icon.png';
import Icon7 from '../../assets/bootstrap-icon.png';
import Icon8 from '../../assets/mysql-icon.png';
import Icon9 from '../../assets/mongodb-icon.png';
import Icon10 from '../../assets/git-icon.png';
import Icon11 from '../../assets/github-icon.png';
import Icon12 from '../../assets/webflow-icon.png';
import Icon13 from '../../assets/figma-icon.png';
import Icon14 from '../../assets/ps-icon.png';

function Page2() { 
  return (
    <section className={styles.page2css}>
      <div className={styles.container1}>
          {/* <h1 className={styles.h1css}>Things you need to know</h1> */}

            <div className={styles.container2}>
              <div className={styles.divpic}>
                <img src={page2Pic} className={styles.page2pic} alt="Profile Picture"/>
              </div>
              <div className={styles.aboutdiv}>
                <h1>About Me
                  <img src={aboutEmoji} className={styles.aboutEmoji} alt="Profile Picture"/>
                </h1>
                <p className={styles.pcss}>Hi! I’m Andrew Garcia. I specialize in designing and maintaining responsive websites that deliver a seamless user experience. My strength lies in creating dynamic and engaging interfaces by writing clean, optimized code and leveraging the latest development tools and techniques. Additionally, I excel at collaborating with cross-functional teams to build exceptional web applications.</p>
                {/* <h2>Technologies</h2>
                <ul>
                  <li><img src={Icon1}></img><p>HTML</p></li>
                  <li><img src={Icon2}></img><p>CSS</p></li>
                  <li><img src={Icon3}></img><p>JavaScript</p></li>
                  <li><img src={Icon4}></img><p>ReactJS</p></li>
                  <li><img src={Icon5}></img><p>Ionic</p></li>
                  <li><img src={Icon6}></img><p>Tailwind CSS</p></li>
                  <li><img src={Icon7}></img><p>Bootstrap</p></li>
                  <li><img src={Icon8}></img><p>MySQL</p></li>
                  <li><img src={Icon9}></img><p>MongoDB</p></li>
                  <li><img src={Icon10}></img><p>Git</p></li>
                  <li><img src={Icon11}></img><p>Github</p></li>
                  <li><img src={Icon12}></img><p>Webflow</p></li>
                  <li><img src={Icon13}></img><p>Figma</p></li>
                  <li><img src={Icon14}></img><p>Photoshop</p></li>
                </ul> */}
                <button className={styles.viewMore}>View More<img src={arrowUp} className={styles.arrowUp} alt="arrowUp"/></button>
              </div>
            </div>
          {/* <h3>"DO WHAT YOU LOVE</h3>
          <h4>LOVE WHAT YOU DO"</h4> */}
      </div> 
    </section>
  )
}

export default Page2
