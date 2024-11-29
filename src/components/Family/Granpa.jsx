/* eslint-disable react-refresh/only-export-components */
import Dad from './Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import { createContext } from 'react';

export const AssetsContext = createContext('gold')

const Granpa = () => {
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2> 

           <AssetsContext.Provider value='gold'>
           <section className='flex'>
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </section>
           </AssetsContext.Provider>
        </div>
    );
};

export default Granpa;