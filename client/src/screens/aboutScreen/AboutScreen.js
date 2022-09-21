import './about.css'
import GoogleMap from './GoogleMap';

const AboutScreen = () => {
  return (
    <div className='AboutScreen p-3'>
      <div><h1 className='text-light'>Geographical Location</h1></div>
      <div className="container overflow-hidden my-4">
        <div className="row gy-5">
          <div className="col-12 col-md-6" >
            <div className="border bg-light " style={{height: "50vh"}}>
              <GoogleMap /> 
              </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="p-3  text-light" style={{height: "50vh"}}>
              <h4>Gurage Regional State</h4>
              <p className='pt-3'>The Gurage people traditionally inhabit a fertile, semi-mountainous region in southwest Ethiopia, about 125 kilometers southwest of Addis Ababa, bordering the Awash River in the north, the Gibe River (a tributary of the Omo River) to the southwest, and Lake Zway in the east. In addition, according to the 2007 Ethiopian national census the Gurage can also be found in large numbers in Addis Ababa, Oromia Region, Dire Dawa, Harari Region, Somali Region, Amhara Region, Gambela Region, Benishangul-Gumuz Region, and Tigray Region.</p>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutScreen
