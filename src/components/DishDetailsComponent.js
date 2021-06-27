import React from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';

function RenderDish({ dishdetail }) {
    return (
        <div>
            <Card>
                <CardImg top src={dishdetail.image} alt={dishdetail.name} />
                <CardBody>
                    <CardTitle><strong>{dishdetail.name}</strong></CardTitle>
                    <CardText>{dishdetail.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );

}
function RenderComments({comments}) {
    const commentlist = comments.map((comment) => {
        if (comment.id != null) {
            return (
                <div>
                    <h6 className="mt-4">{comment.comment}</h6>
                    <h6 className="mt-1">--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</h6>
                </div>
            );
        }

    });
    return (
        <div>
            <h4><strong>Comments</strong></h4>
            {commentlist}
        </div>
    );
}


const DishDetails = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dishdetail={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>

        );
    }
    else {
        return (
            <div></div>
        );
    }

}

export default DishDetails;