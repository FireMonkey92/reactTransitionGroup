import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import  {SlideAnimation} from './Animations'; 

class Slide extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [99, 25]
        }
    }
    
    addElements() {
        if (this.state.items)
            return this.state.items.map(function (item, i) {
                return <div className="item" key={i}>{item}</div>
            })
    }

    generateNumber() {
        const number = Math.floor(Math.random() * 100);
        const newArray = this.state.items;
        newArray.push(number);
        this.setState({
            items: newArray
        });
        console.log(number);
    }
    deleteNumber = () => {
        const newArry = this.state.items;
        newArry.pop();
        console.log(newArry);
        this.setState({
            items: newArry
        });
    }

    render() {
        return (
            <div>
                <CSSTransitionGroup {...SlideAnimation}>
                {this.addElements()}
                </CSSTransitionGroup>
                <div className="btns">
                    <div className="btn-add" onClick={() => this.generateNumber()}>Add Elements</div>
                    <div className="btn-remove" onClick={() => this.deleteNumber()}>Remove Elements</div>
                </div>
            </div>
        )
    }
}

export default Slide;
