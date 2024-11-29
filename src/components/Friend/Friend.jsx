import { useContext } from "react";
import { AssetsContext } from "../Family/Granpa";

const Friend = () => {
    const gift = useContext(AssetsContext)
    return (
        <div>
            <h3>Friend</h3>
            <p>has gift:  <b>{gift}</b></p>
        </div>
    );
};

export default Friend;