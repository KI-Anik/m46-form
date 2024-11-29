import MyBro from "./MyBro";
import Myself from "./Myself";
import MySis from "./MySis";

const Dad = () => {
    return (
        <div>
            <h3>Dad</h3>
            <section className="flex">
                <Myself></Myself>
                <MyBro></MyBro>
                <MySis></MySis>
            </section>
        </div>
    );
};

export default Dad;