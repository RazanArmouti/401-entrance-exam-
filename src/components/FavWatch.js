import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import FavWatchCard from './FavWatchCard';
import axios from 'axios';
 class FavWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favWatchList: []
        }
    }
    componentDidMount = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/getAll`).then(response => {
            response.data ? this.setState({
                favWatchList: response.data
            }) : this.setState({
                favWatchList: []
            })
        })
    }
    render() {
        return (
            <>
            <h1>Fav List</h1>
           
            <div className="row">
                {
                    this.state.favWatchList.length !== 0 ? this.state.favWatchList.map((list,idx) => {
                      
                            return <FavWatchCard key={idx} 
                            id={list.id } 
                            title={list.title } 
                            description={list.description } 
                            toUSD={list.toUSD } 
                            image_url={list.image_url } 
                            recordId={list._id}/>
                       
                    }):''
              }
            </div>
            </>
        )
    }
}

export default withAuth0(FavWatch)
