import React, {Component} from 'react';
import { DISHES } from '../shared/dishes';
import  DishDetail  from './DishdetailComponent';

class Menu extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            dish: DISHES
        }

    console.log('Menu Component constructor is invoked');
}

componentDidMount() {
    console.log('Menu Component componentDidMount is invoked');
}

render() {

    console.log('Menu Component render is invoked');

    return(
         <div className="container">
            <div className='row'>
             <DishDetail dish={this.state.dish} />
            </div>
         </div>
    );
}
}
export default Menu;