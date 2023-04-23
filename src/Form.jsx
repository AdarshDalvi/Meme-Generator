import React from 'react'
import './styles/Form.css'
import memeData from './assets/data.jsx'

export default function Form(){

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        url:"https://i.imgflip.com/1ur9b0.jpg"
    })
    // const [MemeData, setMemeData] = React.useState(data)


    const getMemeImage=()=>{
        const randomMeme = Math.floor(Math.random() * memeData.data.memes.length)
        const memeArray= memeData.data.memes
        const memeUrl = memeArray[randomMeme].url
        setMeme((oldMeme)=>({
            ...oldMeme,
            url: memeUrl
        }))
        
    }


    return (
        <div className="Form">
            <div className='Form-Container'>
                <div className='Input-Container '> 
                    <input className='meme-text-input' type="text" placeholder='hi'/>
                    <input className='meme-text-input' type="text" placeholder='hi'/>
                    <button className='meme-button' onClick={getMemeImage} >Get a new meme image  🖼</button>
                </div>
                <img className='meme-image' src={meme.url} alt="" />
            </div>

        </div>
    )
}