import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';
 class UpdatedFormModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [],
            id:this.props.id,
            title:this.props.title,
            description:this.props.description,
            toUSD:this.props.toUSD,
            image_url:this.props.image_url   ,
            email:this.props.email
        }
    }

    handleFav= async ()=>{
        let RecordId= this.props.recordId;
        let config={
            method:"PUT",
            baseURL:`${process.env.REACT_APP_SERVER_URL}`,
            url:`/update/${RecordId}`,
            data:{
                id:this.state.id,
                title:this.state.title,
                description:this.state.description,
                toUSD:this.state.toUSD,
                image_url:this.state.image_url  ,
                email:this.state.email           

            }
        }
        await axios(config).then(response=>{
            response.data?this.setState({
                faList:response.data
            }):this.setState({
                List: []
            })
        })
    }
    render() {
        return (
            <Modal show={this.props.showModal} onClose={this.props.handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>update watch</Modal.Title>
            </Modal.Header>
          
            <Modal.Body>
             <form>

             </form>
            </Modal.Body>
          
            <Modal>
              <Button variant="secondary" onClick={this.props.handleCloseModal}>Close</Button>
              <Button variant="primary" onclick={this.handleupdate}>Save changes</Button>
            </Modal>
          </Modal>
        )
    }
}

export default withAuth0(UpdatedFormModal)
