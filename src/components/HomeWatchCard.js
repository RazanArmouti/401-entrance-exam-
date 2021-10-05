import React, { Component } from 'react'
import {Col,Card,Button} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
class HomeWatchCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favList: []
        }
    }
    handleFav= async ()=>{
        let config={
            method:"POST",
            baseURL:`${process.env.REACT_APP_SERVER_URL}`,
            url:'/create',
            data:{
                id:this.props.id,
                title:this.props.title,
                description:this.props.description,
                toUSD:this.props.toUSD,
                image_url:this.props.image_url  ,
                email:this.props.auth0.user.email           

            }
        }
        await axios(config).then(response=>{
            response.data?this.setState({
                favList:response.data
            }):this.setState({
                favList: []
            })
        })
    }
    render() {
        return (
            <Col>     
                       
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                           <p>ID: {this.props.id}</p>
                           <p>Price: {this.props.toUSD}</p>
                           <p>Description: {this.props.description}</p>
                        </Card.Text>
                        <Button variant="primary" onClick={this.handleFav}>Add To Watch List</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default withAuth0(HomeWatchCard)

