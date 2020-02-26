import React, { Component } from 'react';

class Mid extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="ui container">
                    <div className="ui attached segment" style={{backgroundColor: "#f2f2f2", border: "none"}}>
                        <div className="ui grid">
                            <div className="row">
                                <div className="ten wide column">
                                    <img src="https://a-v2.sndcdn.com/assets/images/never_stop_listening@1x-9c5264ff.jpg" className="ui image m-2"/>
                                </div>
                                <div className="right floated six wide column">
                                    <div style={{marginTop: 72}} className="row ml-5"><h1 style={{fontSize: 40}}>Never stop listening</h1></div>
                                    <div className="row"></div>
                                    <div className="row  mt-5 ml-5"><h2>Soundcloud is available on Web, IOS, Android, Sonos, Chromecast, and Xbox One</h2></div>
                                    <div className="row">
                                            
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Mid;