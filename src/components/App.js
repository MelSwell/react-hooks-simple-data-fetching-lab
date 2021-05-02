// create your App component here
import React, {useState, useEffect} from 'react';

function App(){
  const [dogImg, setDogImg] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json())
    .then(data => {
      setDogImg(data.message)
      setIsLoaded(true)
    })
  }, [])

  if (!isLoaded) return <h3>Loading...</h3>

  return (
    <div>
      <img src={dogImg} alt="A Random Dog"/>
    </div>
  )
}

export default App;