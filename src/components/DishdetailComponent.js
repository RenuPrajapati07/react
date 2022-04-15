import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {

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

    function RenderComments({comments}) {
      const cmt = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </li>
        )
    })
        if (comments != null) {
            return (
            <div className='col-12 col-md-5 m-1'>
              <h4> Comments </h4>
              <ul className='list-unstyled'>
                {cmt}
              </ul>
            </div>)
        }
        return (
            <div></div>
        )
    }
    
    const DishDetail = (props) =>{
        const dish = props.dish
        if (dish == null) {
            return (<div></div>)
        }
        const cmt = <RenderComments comments={props.dish.comments} />
        return (
            <div className="container">
                <div className='row'>
                <div className="col-md-5 col-sm-12 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                {cmt}
            </div>
            </div>
        )
    }


export default DishDetail;