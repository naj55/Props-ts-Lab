import Programmer from './component/Programmers'
import Companies from './component/Companies'
import Services from './component/Services'
import Image from '../public/programmer.jpg'
import Image2 from '../public/company.jpg'
import Image3 from '../public/serves.jpg'
import './App.css'

function App() {


  return (
    <>
      {/* <nav>
        <a href="default.asp">Home</a>
        <a href="news.asp">News</a>
        <a href="contact.asp">Contact</a>
        <a href="about.asp">About</a>
      </nav> */}
      <div className='-d'>
        <Programmer img={Image} name="Saad" programmingLanguages="C++,Java,Javascript" Experance="9 years" company="Aramco"></Programmer>
        <Programmer img={Image} name="Fahad" programmingLanguages="Php,Javascript,Sql" Experance="5 years" company="University of Dammam"></Programmer>
        <Programmer img={Image} name="Hamad" programmingLanguages="C#,Javascript,Java" Experance="5 years" company="Tuwaiq"></Programmer>
      </div>
      <hr></hr>
      <div className='-d'>
        <Companies img={Image2} name="Mobily" empNum="70000" year="1990" ></Companies>
        <Companies img={Image2} name="STC" empNum="60000" year="1995" ></Companies>
        <Companies img={Image2} name="Zain" empNum="50000" year="2005" ></Companies>
      </div>
      <hr></hr>
      <div className='-d'>
        <Services img={Image3} serves="Training" price="2000SR" ></Services>
        <Services img={Image3} serves="Logistic" price="3000SR" ></Services>
        <Services img={Image3} serves="Educated" price="5000SR" ></Services>
      </div>
      <footer></footer>
    </>
  )
}

export default App
