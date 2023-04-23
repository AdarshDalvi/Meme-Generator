import './styles/Header.css'
import TrollFace from './assets/images/TrollFace.png'

export default function Header(){
    return (
        <div className="Header">
            <div className='image-box'>
                <img style={{height:'26px', marginRight:'7px'}} src={TrollFace} alt="" />
                <p className='title'>Meme Generator</p>
            </div>
            <p className='sub-title'>React Course - Project 3</p>
        </div>
    )
}