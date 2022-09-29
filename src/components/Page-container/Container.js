import React from 'react';
import Cards from '../All-Cards/Cards';
import Activity from '../Activity/Activity'
import './Container.css'

const Container = () => {
        return(
            <div className='containers'>
            <Cards/>
            <Activity/>
                
        </div>
        );
};

export default Container;