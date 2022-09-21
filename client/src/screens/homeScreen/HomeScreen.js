import Header from "../../components/header/Header";
import Main from "./main/Main"
import './homeScreen.css'
import Footer from "../../components/footer/Footer";
import EventScreen from "../eventScreen/EventScreen";
import AboutScreen from "../aboutScreen/AboutScreen";
import MembersScreen from "../memberScreen/MembersScreen";

const HomeScreen = () => {
  return (
    <div className="HomeScreen  pt-5">
        <Header />
        <Main />

        <div className="MainBootom w-100 py-3 d-flex align-items-center justifiy-content-center px-5" style={{ height: "auto" }}>
          <div className="d-md-flex align-items-center justify-content-center w-100 h-100 text-light">
            <div>
              <h2 className="pe-3" style={{color:"#e74680"}}>Gurage Regional State!</h2>
              <h6 className="mx-2 text-dark">I sat in a Gurage and invented the future..</h6>
            </div>

            <form className="d-md-flex align-items-center justify-content-center ms-3 h-100">

              <input placeholder='First Name' className='ps-2 me-2 h-100 py-2 my-2 w-100 rounded' />
              <input placeholder='Email ' className='ps-2 me-2 h-100 py-2 rounded my-2 w-100' />
              <button type='submit' className='btn h-100 px-5  text-light' style={{background:"#e74680"}}>Join</button>
            </form>

          </div>

        </div>
        <EventScreen />
        <AboutScreen />
        <div className="footertoping w-100  bg-warning d-flex align-items-center justifiy-content-center px-5" style={{ height: "15vh" }}>
          <div className="d-flex align-items-center justify-content-center w-100 h-100 text-light">

            <h2 className="pe-3 text-danger" style={{color:"#e74680"}}>logo</h2>
            <h6 className="mx-2">Take my new quiz to discover your deeper purpose. The right path for you is only a few steps away.</h6>
            <button className="btn  px-4 text-light" style={{background:"#e74680"}}>Join</button>

          </div>

        </div>
        {/* <MembersScreen /> */}
        <Footer />
      </div>
  )
}

export default HomeScreen
