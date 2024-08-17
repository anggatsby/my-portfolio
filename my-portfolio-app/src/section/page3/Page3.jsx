import styles from './Page3.module.css'
import PeopleIcon from '../../assets/people.png';
import s1 from '../../assets/s1.png';
import s2 from '../../assets/s2.png';
import s3 from '../../assets/s3.png';
import s4 from '../../assets/s4.png';
import s5 from '../../assets/s5.png';
import s6 from '../../assets/s6.png';

function Page3() {
  return (
    <section className={styles.page3}> 
      
      <div className={styles.Wrapper}>
        <div className={styles.h1Wrapper}>
            <img className={styles.peopleCss} src={PeopleIcon} alt="People Icon"></img>
            <h1>Unique </h1>
            <p> Ideas</p>
        </div>
        <div className={styles.h2Wrapper}>
            <h2>For Your</h2>
            <p> Business.</p>
            <h3>What I Do?</h3>
        </div>
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper1}>
                <h1>01</h1>
                <p>Initial Meeting</p>
                <img className={styles.s1} src={s1} alt="icon6"></img>
            </div>
            <div className={styles.wrapper4}>
                <h1>04</h1>
                <p>Domain & Hosting Setup</p>
                <img className={styles.s4} src={s4} alt="icon6"></img>
            </div>
            <div className={styles.wrapper2}>
                <h1>02</h1>
                <p>Agreement & Planning</p>
                <img className={styles.s2} src={s2} alt="icon6"></img>
            </div>
            <div className={styles.wrapper5}>
                <h1>05</h1>
                <p>Website Development</p>
                <img className={styles.s5} src={s5} alt="icon6"></img>
            </div>
            <div className={styles.wrapper3}>
                <h1>03</h1>
                <p>Website Design</p>
                <img className={styles.s3} src={s3} alt="icon6"></img>
            </div>
            <div className={styles.wrapper6}>
                <h1>06</h1>
                <p>Finalization & Turnover</p>
                <img className={styles.s6} src={s6} alt="icon6"></img>
            </div>
        </div>
      </div>
      <div className={styles.Navbar}>
        <p>I focus on helping your brand grow
            <br></br>
           and move forward</p>
           <div className={styles.line}/>
      </div>
    </section>
  )
}

export default Page3
