import Friend from "../Friend/Friend";

/* eslint-disable react/prop-types */
const Cousine = ({name}) => {
    return (
        <div>
            <h4>Cousine</h4>
            <p>{name}</p>
         {
            name === 'Tasin' && <Friend></Friend>
         }

        </div>
    );
};

export default Cousine;