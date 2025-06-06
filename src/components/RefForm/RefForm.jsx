import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()

    useEffect(() =>{
        nameRef.current.focus()
    } ,[])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name='name' />
                <br />
                <input ref={emailRef} type="email" name='email' />
                <br />
                <input ref={passRef} type="password" name='password ' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default RefForm;