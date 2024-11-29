import { useContext } from "react";
import { AssetsContext } from "./Granpa";

const Special = () => {

    const gift = useContext(AssetsContext)
    return (
        <div>
            <h4>Special</h4>
            <p> get this value <b>by</b> context : {gift}</p>
        </div>
    );
};

export default Special;