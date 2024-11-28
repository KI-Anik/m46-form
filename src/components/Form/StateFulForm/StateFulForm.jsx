import { useState } from "react";

const StateFulForm = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if (pass.length < 6) {
            setError('passeword must be 6 character')
        }
        else {
            console.log('name : ', name, '/ email :', email, '/ password:', pass,)
            setError('')
        }
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePassChange = e => {
        setPass(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleNameChange}
                    type="text" name='name' />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name='email' />
                <br />
                <input
                    onChange={handlePassChange}
                    type="password" name='password' required />
                <br />
                <input type="submit" />
                {
                    error && <p>{error}</p>
                }

            </form>
        </div>
    );
};

export default StateFulForm;