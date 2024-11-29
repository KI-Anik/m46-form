import Cousine from "../Family/Cousine";

const Aunty = () => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className="flex">
            <Cousine name={'Tasin'}></Cousine>
            <Cousine name={'Shayan'}></Cousine>
            </section>
        </div>
    );
};

export default Aunty;