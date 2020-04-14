import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core'
import SearchBar from '../SearchBar'
import axios from 'axios'

const Home = (props) => {

    const [twitterData, changeTwitterData] = useState([]);

    const getPublicTweets = (data) => {
        let tweetData = [];
        data && data.forEach(element => {
            tweetData.push({
                screenName: element.user.screen_name,
                name: element.user.name,
                text: element.text,
                url: element.urls || ''
            })
        })
        changeTwitterData(tweetData);
    }

    const getSearchTweets = (data) => {
        let tweetData = [];
        data && data.forEach(element => {
            tweetData.push({
                screenName: element.user.screen_name,
                name: element.user.name,
                text: element.text,
                url: element.urls || ''
            })
        })
        changeTwitterData(tweetData);
    }

    const handleSearch = (searchString) => {
        axios.post('http://3e2ca857.ngrok.io/search?searchString=' + searchString)
            .then(function (response) {
                console.log(response);
                getSearchTweets(response.data.statuses);
            })
            .catch((error) => {
                console.log(error)
            })
        console.log(searchString);
    }


    useEffect(() => {
        axios.post('http://3e2ca857.ngrok.io/public')
            .then(function (response) {
                console.log(response);
                getPublicTweets(response.data);
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return (
        <div>
            <div>
                <div style={{
                    fontWeight: "bold",
                    padding: '10px',
                    fontSize: '23px'
                }}>Twitter Client</div>
                <SearchBar handleSearch={handleSearch} />
            </div>
            {twitterData.map(data => {
                return (
                    <Paper style={{ padding: '10px', margin: '10px' }}>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{data.name}</div>
                            <div>{'@' + data.screenName}</div>
                        </div>
                        <div style={{
                            textAlign: 'left',
                            marginLeft: '80px'
                        }}>{data.text}</div>
                        {data.url &&
                            <img src={data.url} />}
                    </Paper>
                )
            })


            }

        </div>
    );
}

export default Home;
