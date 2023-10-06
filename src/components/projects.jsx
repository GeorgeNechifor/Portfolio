
import { useEffect } from 'react';
import '../styles/projects.css';

export default function Projects(){

    

    function Project(props){

        return (
            <div className="project">
                <div className="title-project">{props.name}</div>
                <div className="info">
                    
                      <a href={props.link} className='link' target='_blank'>
                            <img  className='img-project' src={props.image} alt="mot found"
                                   
                            />                            
                      </a>
                    
                    <div className="tools-used">
                        <div className="tools-p">
                            {
                               props.tools.map(tools => {
                                    return <div className='tol'>{tools}</div>
                               })
                            }
                        </div>
                    </div>
                    <div className="desc-project">
                        {props.desc}
                    </div>
                </div>
            </div>
        );
    }

    const tools = {
        first:["HTML" , "CSS" , "REACT"],
        second:["HTML" , "CSS" , "REACT"],
        third:["HTML" , "CSS" , "REACT"]
    }

    const desc = [
        "A typing speed test application where you can measure your words per minute (WPM) speed.",
        "A game through which you can test your knowledge of geography.",
        "You have five attempts to guess a word with feedback given for each guess in the form of colored tiles."
    ]

    return (
        <div className="projects-container" id="projects">
            <h2>Explore my projects:</h2>
          <div className="pro">
            <Project link="https://playwordle12.netlify.app/" desc = {desc[2]}  name="Wordle" tools={tools.first} image="wordle.png"></Project>
            <Project link="https://flagle-game.netlify.app/" desc= {desc[1]} name="Flagle" tools={tools.second} image="flagle.png"></Project>
            <Project link="https://typemaster1.netlify.app/" desc={desc[0]} name="TypeMaster" tools={tools.third} image="typemaster.png"></Project>
          </div>

        </div>
    );
}