import axios from 'axios'
import React, {useEffect , useState} from 'react'
export default function ChuckNorrisSays(){
    const [joke, setjoke] = useState();
    const [loading, setLoading] = useState(false)
    const URL_API ="https://api.chucknorris.io/jokes/random"
    
    
    const getJoke = async () =>{
        // alert("GET JOKE")
        setLoading(true)
        const { data } = await axios.get(URL_API)
        setjoke(data.value)
        setLoading(false)
        
        
    }
    useEffect( () => {
        getJoke()
    },[] )
    
    // if(loading){
    //     return <h1>CARREGANDO....</h1>
    // }

    return(
        <div className="ChuckNorrisSays">
            <h1>CHUCK NORRIS SAYS....</h1>
            <h2>{joke}</h2>
            <h2>{loading ? <h4>CARREGANDO...</h4> : joke}</h2>
            <button 
             disabled={loading}
             onClick={getJoke} >
                Me conte uma piada!</button>
                {/* {loading ? "Carregando..." : "Me conte uma piada!"}   */}
        </div>

    )


}



