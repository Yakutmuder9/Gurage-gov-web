import G10 from "../../../assets/gurageGirl.png"
import './main.css'
const MainScreen = () => {
    return (
        <div className="MainScreen " >
            <div>
                <ul className="MainScreenList d-flex align-items-center justify-content-between  py-2 pe-2 list-none" >
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Language
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Contact</a>
                    </li>
                    <li className="">
                        <a className="nav-link disabled"></a>
                    </li>
                </ul>
            </div>
            <div className="mainbg w-100 h-100 d-md-flex d-block" >
                <div className="clipSide p w-50 h-100  d-none d-md-flex align-items-center justify-content-end" >
                    <div className="textContainer text-light text-center">
                        <p className="ptext ">Dream big dream ?</p>
                    <h1 className="welcometxt text-light text-center overflow-hidden ">WELLCOME TO <span style={{color:"#e74680"}}>GURAGE <br /> REGIONAL</span>  STATE </h1>
                    <p className="pdreamtxt text-center pt-3">I sat in a Gurage and invented the future..</p>
                    <button className="btn btn-outline-danger text-light px-4  py-2 mt-3" style={{background:"#e74680"}}> Watch more</button>
                    </div>
                    
                </div>
                <div className="ImgSide px-4 py-5 w-100 h-100 d-block d-md-flex align-items-center justify-content-end">
                    <h1 className="text-light text-center overflow-hidden d-md-none">WELLCOME TO <span style={{color:"#e74680"}}>GURAGE <br /> REGIONAL</span>  STATE </h1>
                </div>
            </div>
        </div>
    )
}

export default MainScreen;
