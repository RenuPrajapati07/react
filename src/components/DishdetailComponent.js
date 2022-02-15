import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';
import { DISHES } from '../shared/dishes';

class DishDetail extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            dish: DISHES
        }

        this.state = {
            selectedDish: null
        }

}

onDishSelect(dish) {
    this.setState({ selectedDish: dish});
}

renderDish(dish) {
    
    if (dish != null) {
        return (
            <div>
                <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle><h4>{dish.name}</h4></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            );
    }
    
    else {
        return(
        <div></div>
        );
    } 
}

renderComments(dish) {
    if (dish!=null) {
    return (
        <div >
            <h4>Comments</h4>
            <ul class="list-unstyled">
                {dish.comments.map((sub) => 
                <li>
                    <br></br>
                        <h6>{sub.comment}</h6>
                   <li>
                       <br></br>
                        <h6>-- {sub.author} , {sub.date}</h6>
                    </li>
                </li>
                )}
            </ul>
        </div>
    );}

    else {
        return(
        <div></div>
        );
    }
}

render () {
     const Detail = this.props.dish.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle><h4>{dish.name}</h4></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div class="container">
            <div className='row'>
                {Detail}
            </div>

            <div className="row">
               <div className="col-12 col-md-5 m-1"> 
                    {this.renderDish(this.state.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.state.selectedDish)}
                </div>
            </div>
            </div> 
        );
    }
}

export default DishDetail;   
