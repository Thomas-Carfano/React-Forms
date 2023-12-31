import {useState} from 'react'

const Authenticate = ({token}) => {
    const [successMessage, setSuccessMessage] = useState([null]);
    const [error, setError] = useState(null);


    const handleClick = async () => {
      
        const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/authenticate",  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
    }})      
        const data = await response.json();
        if(data.success === true){
        setSuccessMessage(`Welcome ${data.data.username} ${data.message}`)
        console.log(data)
        } else {
            setError(`Please Submit a valid username/password. Error Message: ${data.message}`)
        }
       
    }
    return(
        <>
        <div>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
        </div>
        </>
    )
}

export default Authenticate