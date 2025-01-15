import garden from '../assets/garden.png';
import crafting from '../assets/crafting.png';
import { useNavigate } from 'react-router-dom';


const SplashPage = () => {
    const navigate = useNavigate();

    const handleSignUpButton = () => {
        navigate('/register/')
    }
    return (
<div className='splash-container'>
    <div className= 'splashRow'>
        <div className="splashColumn">
            <div className='splashText'>
                <h2> The world's largest online community of homesteaders</h2>
            </div>
            <div className='splashImgDiv' id='tony'>
                <img src={garden} alt="community" className='splashImg' />
            </div>
        </div>
        
        <div className="splashColumn">
            <div className='splashImgDiv'>
                <img src={crafting} alt="crafting" className='splashImg'/>
                </div>
            <div className='splashText'>
                <h2>Cultivate Skills</h2>
                <h2>Share Wisdom</h2>
                <h2>Inspire Others</h2>
            </div>
        </div>
    </div>

    <div className="splashButton">
        <button onClick={handleSignUpButton}>Sign Up Today</button>
    </div>
</div>

    );
};

export default SplashPage;