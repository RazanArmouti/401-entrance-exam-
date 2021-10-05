import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import HomeWatchCard from './HomeWatchCard';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            watchList: []
        }
    }
    componentDidMount = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/getAllAPI`).then(response => {
            response.data ? this.setState({
                watchList: Object.values(response.data)
            }) : this.setState({
                watchList: []
            })
        })
    }
    render() {
        return (
            <>
            <h1>Watches List</h1>
            <h1> Select your faviorites</h1>
            <div className="row">
                {
                    this.state.watchList.length !== 0 ? this.state.watchList.map(list => {
                        return list.map((item, idx) => {
                            return <HomeWatchCard key={idx} 
                            id={item.id } 
                            title={item.title } 
                            description={item.description } 
                            toUSD={item.toUSD } 
                            image_url={item.image_url } />
                        })
                    }):''
              }
            </div>
            </>
        )
    }
}

export default withAuth0(Home)
