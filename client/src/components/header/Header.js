import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './header.css'

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='Header'>
            <nav className="NavHeader navbar fixed-top navbar-expand-lg px-2 shadow-lg pt-1 d-flex align-items-center justify-content-between">

                <div className='px-4 d-flex align-items-center '>
                    <Button variant="primary" onClick={handleShow} className="d-lg-none text-light bg-light">
                        <span className="navbar-toggler-icon text-light"></span>
                    </Button>
                   
                    <div className='d-flex align-items-center '>
                        <h5 className='px-1 py-2 Navlogo bolder' style={{color: "#e74680"}}> ░▒▓█►─═  𝙶𝚞𝚛𝚊𝚐𝚎 ═─◄█▓▒░</h5>
                    </div>
                </div>


                <div className='d-none d-md-flex align-items-center  text-light'>
                    <h6 className='px-2 py-2'>Call</h6>
                    <h6 className='px-2 py-2'>Jobs</h6>
                    <h6 className='px-2 py-2'>Language</h6>
                </div>


            </nav>


            <Offcanvas show={show} onHide={handleClose} className="offcanvasBg">
                <Offcanvas.Header closeButton >
                    <Offcanvas.Title><h5 className='px-1 py-2 Navlogo bolder'  style={{color: "#e74680"}}> ░▒▓█►─═  𝙶𝚞𝚛𝚊𝚐𝚎 ═─◄█▓▒░</h5></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <ul className=" d-flex flex-column align-items-center justify-content-between w-100  py-2 pe-2 list-none" >
                            <li className="nav-item d-none d-md-flex">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                </form>
                            </li>
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
                </Offcanvas.Body>
            </Offcanvas>


        </div>
    )
}

export default Header
