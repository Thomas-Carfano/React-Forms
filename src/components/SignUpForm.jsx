import {useState} from 'react'

const SignUpForm = ({setToken}) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
try{
    const getI = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
},
        body: JSON.stringify({ "username": username, "password": password })
})
            
    const response = await getI.json();
        setToken(response.token)
} catch (error) {
        setError(error.message)
}}
    return (
        <>
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label>Username: <input value={username} onChange={(event) => setUserName(event.target.value)} required/></label><br/>
                    <label>Password: <input value={password} onChange={(event) => setPassword(event.target.value)}required/></label><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default SignUpForm