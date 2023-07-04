import './Navbar.css'
import iconcat from './component/pics/catIcon.png'
const Navbar = () => {
    return ( 
        <div className="Navbar">
            <div className='elements'>
                <div className='icon'><img src={iconcat} alt='error'/></div>
                <div className='title'><h1>喵喵喵，你是哪种流浪猫？</h1></div>
                
            </div>
            
            


        </div>
     );
}
 
export default Navbar;