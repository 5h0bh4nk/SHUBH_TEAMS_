import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Jtron from '../../Components/Jumbotron/jumbotron';

function Homepage(props) {
    return (
        <div>
            <Navbar />
            <Jtron auth={props.auth} />
        </div>
    )
}

export default Homepage
