import { useState , useEffect  } from 'react';
import '../styles/home.css'
import BackImage from '/public/back.png';
import BackRes from '/public/bk-res.png';
import { useWindowSize } from "@uidotdev/usehooks";

export default function Navigation(){

    const [image , setImage] = useState(BackImage);
    const windowSize = useWindowSize();

    useEffect(() => {
        windowSize.width < 1170 ? setImage(BackRes) : setImage(BackImage);

    } , [windowSize.width])


    return (
       <div className="nav" id='home'>
            <div className="details-container">
                <h1 className='title-container'>
                    What I do:
                </h1>
                <p className='skills-container'>
                I thrive on the marriage of design and development, ensuring that the user interface not only looks stunning but also functions intuitively. By collaborating closely with designers and leveraging my coding skills, I make sure that each pixel serves a purpose.
                </p>
                <img className='skills-image' src="skills.png" alt="" />
            </div>
                        
            <div className="image-container" style={{backgroundImage:`url(${image})`}}>
                
                <div className='content'>
                    <div className="links-container">
                        <a className='home' href="#">Home</a>
                        <a className='projects' href='#projects'>Projects</a>
                        <a className='contact' href="#contact">Contact</a>

                    </div>
                    <img className='profil' src="profil.png" alt="" />
                    <div className="intro-container">
                        <p>
                        Hello, world! I'm George Nechifor, a passionate front-end developer who thrives on crafting captivating digital experiences.

                        </p>
                    </div>
                </div>
            </div>
                    
       </div>
    );
}
