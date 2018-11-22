import React,{Component} from 'react';

class Slide extends Component{
    constructor(props){
        super(props);

        this.state = {
            items:[99,25]
        }
    }

    

    render(){
        return(
            <div className="btns">
                    <div className="btn-add">Add Elements</div>
                    <div className="btn-remove">Remove Elements</div>
            </div>
        )
    }
}


export default Slide;
