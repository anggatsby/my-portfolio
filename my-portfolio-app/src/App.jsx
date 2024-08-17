import Navbar from './section/navbar/Navbar';
import Home from './section/home/Home';
import Page1 from './section/page1/Page1';
import Page2 from './section/page2/Page2';
import Page3 from './section/page3/Page3';
import Page4 from './section/page4/Page4';
import Page5 from './section/page5/Page5';
import Footer from './section/footer/Footer';


function App() {
  return(
    <>
    {/* <Profile /> */}
      <nav><Navbar /></nav>
      {/* <section><Page1 /></section> */}
      <section><Home/></section>
      <section><Page2/></section>
      <section><Page3/></section>
      <section><Page4/></section>
      <section><Page5/></section>
      {/* <section><Footer/></section> */}
    </>
  );  
}

export default App
