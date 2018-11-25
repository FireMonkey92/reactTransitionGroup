import React,{Component} from 'react';
import {CSSTransitionGroup} from 'react-transition-group'

class Fade extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [99, 25]
        }
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

        this.setState({
            items: newArry
        })
        console.log(this.state.items)
    }

    addElements() {
        if (this.state.items)
            return this.state.items.map(function (item, i) {
                return <div className="item" key={i}>{item}</div>
            })
    }

    render() {
        return (
            <div>
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnter={true}
                    transitionEnterTimeout={500}
                >
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


export default Fade;
