import Cousine from "../Family/Cousine";

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className="flex">
               <Cousine name={'Rahul'}></Cousine>
               <Cousine name={'Laboni'}></Cousine>
            </section>
        </div>
    );
};

export default Uncle;