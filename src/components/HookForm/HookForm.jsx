import useInputState from "../../hooks/UseInputState";

const HookForm = () => {

    const [name, handleChange] = useInputState('khairul ')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleChange} type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="password" name='password' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default HookForm;