import './footer.css'
import { FaFacebookF, FaFacebookMessenger, FaTelegram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer d-lg-flex text-light text-center'>
            <div className='footerleft   w-100 px-5 pt-4 '>
                <div className='d-flex align-items-center justify-content-between px-5 overflow-hidden' >
                    <div className=''>
                        <ul>
                            <li>Posts</li>
                            <li>News</li>
                            <li>Sport</li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul>
                            <li>Education</li>
                            <li>Finance</li>
                            <li>Sience</li>
                        </ul></div>
                    <div className=''>
                        <ul>
                            <li>Culture</li>
                            <li>
                                {/* <span class="material-symbols-outlined">
accessible_forward
</span>  */}
                                Accesability</li>
                            <li>Contact</li>
                        </ul></div>
                </div>
                <div className=''>
                    <p>The Gurage (Gurage: ጉራጌ) are a Semitic-speaking ethnic group inhabiting Ethiopia. They inhabit the Gurage regional State, a fertile, semi-mountainous region in central Ethiopia, about 125 kilometers southwest of Addis Ababa.</p>
                    <p>© Gurage People Privacy Policy Terms</p>
                    <p>Created with  by Yakut Ahmedin</p>
                </div>
            </div>
            <div className='footerright d-flex flex-column align-items-center justify-content-between w-100  py-3 '>
                <div className='h-100 d-flex flex-column align-items-center justify-content-between w-100  py-3'>
                    <h4 className='overflow-hidden'>WEEKLY WISDOM IN YOUR INBOX</h4>
                    <h6 className='overflow-hidden'>The newsletter that elevates your life. Get your weekly dose of well-being.</h6>
                    <form>
                        <label className='formConatainer'>
                            <input placeholder='First Name' className='ps-2 me-2 h-100' />
                            <input placeholder='Email ' className='ps-2 me-2 h-100' />
                            <button type='submit' className='btn text-light h-100 ' style={{background:"#e74680"}}>Submit</button></label>
                    </form>
                    <p>Please enter both first name and email to continue.</p>
                    <div className='d-flex w-100  align-items-center justify-content-center '>
                        <h5 className='px-1  overflow-hidden bolder pe-3'>Contact us</h5>
                        <FaFacebookF className='mx-2 footerIcon' />
                        <FaFacebookMessenger className='mx-2 footerIcon' />
                        <FaTelegram className='mx-2 footerIcon' />
                        <FaYoutube className='mx-2 footerIcon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
