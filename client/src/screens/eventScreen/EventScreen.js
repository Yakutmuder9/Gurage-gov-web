import './eventScreen.css'

const EventScreen = () => {
    return (
        <div className='EventScreen w-100  px-3 py-5'>
            <h2>MORE FROM THE GOVERNOR'S OFFICE</h2>
            <div className="container overflow-hiddenv mt-3">
                <div className="row gy-5">
                    <div className="col-12 shadow col-md-6 col-lg-4">
                        <div className="p-3 border bg-light"><h3>Gurage</h3> Gurage Rigional State</div>
                    </div>
                    <div className="col-12 shadow col-md-6 col-lg-4">
                        <div className="p-3 border bg-light"><h3>Tourism</h3> Tourism</div>
                    </div>
                    <div className="col-12 shadow col-md-6 col-lg-4">
                        <div className="p-3 border bg-light"><h3>Culture</h3> Culture</div>
                    </div>
                    <div className="col-12 shadow col-md-6 col-lg-4">
                        <div className="p-3 border bg-light"><h3>Documentary</h3> Documentary</div>
                    </div>
                    <div className="col-12 shadow col-md-6 col-lg-4">
                        <div className="p-3 border bg-light">
                            <div className="p-3 border bg-light"><h3> Our Legendary</h3></div> Our Legendary</div>
                    </div>
                    <div className="col-12 shadow col-md-6 col-lg-4">
                        <div className="p-3 border bg-light"><h3>Gallery</h3> Gallery</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventScreen

