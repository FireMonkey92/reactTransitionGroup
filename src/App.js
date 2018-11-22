import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';

// Components
import Basic from './basic';
import Fade from './fade';
import Slide from './slide';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div className='navBar'>
                    <Link to='/basic'>Basic</Link>
                    <Link to='/fade'>Fade</Link>
                   <Link to='/slide'>Slide</Link>
                </div>
                <Route path='/basic' component={Basic}></Route>
                <Route path='/fade' component={Fade}></Route>
               <Route path='/slide' component={Slide}></Route>
            </div>
        </BrowserRouter>
    )
}
export default App;