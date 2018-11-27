import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Basic extends Component { 
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
        let number = Math.floor(Math.random() * 100);
        let newArray = this.state.items;
        newArray.push(number);
        this.setState({
            items: newArray
        });
        console.log(number);
    }
    deleteNumber = () => {
        let newArray = this.state.items;
        newArray.pop();
        console.log(newArray);
        this.setState({
            items: newArray
        });
    }

    render() {
        return (
            <div>
                <div>
                <CSSTransitionGroup
                    transitionName="basic"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={true}
                    transitionEnterTimeout={500}
                    transitionLeave={true}
                    transitionLeaveTimeout={500}
                >
                {this.addElements()}
                </CSSTransitionGroup>
                </div>
                
                <div className="btns">
                    <div className="btn-add" onClick={() => this.generateNumber()}>Add Elements</div>
                    <div className="btn-remove" onClick={() => this.deleteNumber()}>Remove Elements</div>
                </div>
            </div>
        )
    }
}

export default Basic;
