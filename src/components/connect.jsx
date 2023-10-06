
import '../styles/connect.css';
export default function Connect(){

    return (
        <div className="connect" id='contact'>
            <div className="final">Let's Connect</div>
            <div className="links-cont">
                    <a href="https://www.linkedin.com/in/george-nechifor-9406ba239/" className='rel-link' target='_blank'>
                        <div className="text">Linkedin</div>
                        <img className="logo"src="linkedin.png" alt="" />
                    </a>
                    <a href="https://github.com/GeorgeNechifor" className='rel-link' target='_blank'>
                        <div className="text">GitHub</div>
                        <img className='logo' src="github.png" alt="" />
                    </a>
                    
                </div>

                <div className="send" onClick={() => {
                     window.open(`mailto:georgenechifor01@gmail.com?subject=I have a job for you&body=`);
                }}>Send me an Email</div>
            <img className='conect' src="conectBox.png" alt="" />
        </div>
    );
}