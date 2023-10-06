
import './App.css';
import Navigation from './components/home';
import Projects from './components/projects';
import Connect from './components/connect';
export default function App(){
    
    return (
        <div className='Portofolio'>
            <Navigation></Navigation>
            <Projects></Projects>
            <Connect></Connect>
        </div>
    );
}