import styles from './Navbar.module.css'



function Navbar() {

  return (

<nav>
  <label className={styles.logo}>Drew.</label>
  {/* <label className={styles.logo1}>DREW</label> */}
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Service</a></li> 
    <li><a href="#">Project</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
  )
}

export default Navbar
