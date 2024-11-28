import { useState } from "react";

const StateFulForm = () => {
    const [name, setName] = useState(null)
    const [email, setEmail ] = useState(null)
    const [pass, setPass] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        console.log('name : ', name, '/ email :', email, '/ password:', pass, )
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
                type="password" name='password' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default StateFulForm;