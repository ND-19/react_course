import { React, Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';

class DishDetails extends Component {

    renderDish(dishdetail) {
        dishdetail = this.props.dish;
        if (dishdetail != null)
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
        else
            return (
                <div></div>
            );
            
    }
    renderComments(comments) {
        if (comments != null) {
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
        else {
            return (
                <div></div>
            );
        }

    }
    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            </div>

        );
        
    }

}
export default DishDetails;