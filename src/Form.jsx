import React from 'react'
import './styles/Form.css'

export default function Form(){ 

    const [allMemes, setAllMemes]= React.useState([])

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        url:"https://i.imgflip.com/1ur9b0.jpg"
    })

    React.useEffect(()=>{
        async function getMemes(){
            try{
                const res = await fetch(`https://api.imgflip.com/get_memes`)
                const resData= await res.json()
                setAllMemes(resData.data.memes)
            }catch(e){
                console.log(e.message)
            }
        }
        getMemes();
    },[])
    
    const getMemeImage=()=>{
        event.preventDefault()
        const randomMeme = Math.floor(Math.random() * allMemes.length)
        const memeUrl = allMemes[randomMeme].url
        setMeme((oldMeme)=>({
            ...oldMeme,
            url: memeUrl
        }))
    }

    function handleChange(event){
        const name= event.target.name
        setMeme((oldMeme)=>{
            return {
                ...oldMeme,
                [name]: event.target.value
            }
        })
    }

    return (
        <div className="Form">
            <form className='Form-Container' onSubmit={getMemeImage}>
                <div className='Input-Container '> 
                    <input onChange={handleChange} className='meme-text-input' type="text" placeholder='hi' name='topText' value={meme.topText}/>
                    <input onChange={handleChange} className='meme-text-input' type="text" placeholder='hi' name='bottomText' value={meme.bottomText}/>
                    <button type='submit' className='meme-button'>Get a new meme image  🖼</button>
                </div>
                <div className='meme'>
                    <img className='meme-image' src={meme.url} alt="" />
                    <h1 className='meme-image-text top'>{meme.topText}</h1>
                    <h1 className='meme-image-text bottom'>{meme.bottomText}</h1>
                </div>
            </form>

        </div>
    )
}