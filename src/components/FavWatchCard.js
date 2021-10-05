import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import UpdatedFormModal from './UpdatedFormModal';
import {Col,Card,Button} from 'react-bootstrap';
import axios from 'axios';
 class FavWatchCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wList: [],
            showModal:false
        }
    }

    handleDelete= async ()=>{
        let RecordId= this.props.recordId;
        let config={
           
            method:"DELETE",
            baseURL:`${process.env.REACT_APP_SERVER_URL}`,
            url:`/delete/${RecordId}`
        }
        await axios(config).then(response=>{
            response.data?this.setState({
                wList:response.data
            }):this.setState({
                wList: []
            })
        })
    }
    handleOpenModal=()=>{
        this.setState({
            showModal:true
        })
    }
    handleCloseModal=()=>{
        this.setState({
            showModal:false
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
                        <Button variant="success" onClick={this.handleOpenModal}>Update</Button>{' '}
                        {this.state.showModal?<UpdatedFormModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal}/>:''}
                        <Button variant="danger" onClick={this.handleDelete}>Delete</Button> 
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default withAuth0(FavWatchCard)
