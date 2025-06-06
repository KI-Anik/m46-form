/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
const ReUsableForm = ({formTitle, handleSubmit, submitBtnText = 'Submit', children}) => {

    const localSubmit = e => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data)
    }

    return (
        <div>
            {/* <h1>{formTitle}</h1> */}
            {children}
              <form onSubmit={localSubmit}>
                <input type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="password" name='password' />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReUsableForm;