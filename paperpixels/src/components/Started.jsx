import './started.css';
import logo from "../assets/logo.png";  

export default function Started() {
  
    return(
<>
<div>
<img src={logo} alt="paperpixels" className='logoo'></img>
<input type="file" onChange={changing}></input>

</div>
</>


    );


}