import React, { Component } from 'react';

class Bottom extends Component {
    state = {  }
    render() { 
        const h2 = {
            color: "white",
            fontSize: 36,
            marginLeft: 100,
            marginTop: 20
        }
        const p = {
            color: "white",
            fontSize: 18,
            marginLeft: 100
        }
        const Line = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 0.5,
                    width: 975
                }}
            />
        );
        return ( 
            <div>
                <div className="ui attached container">
                    <div className="ui attached segment" style={{
                        border: "none", 
                        backgroundImage: `url(${"https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg"})`, 
                        height: 300,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                        }}>

                        <div className="ui grid">
                            <div className="row">
                                <h2 className="centered column" style={h2}>
                                    Calling all creators
                                </h2>
                            </div>
                            <div className="row ">
                                    <p className="six wide column" style={p}>Get on SoundCloud to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
                            </div>
                            <div className="row">
                                <button style={{marginLeft: 100}} className="ui basic big inverted button">Find out more</button>
                            </div>
                        </div>
                    </div>

                    <div className="ui attached segment">
                        <div className="ui centered grid">
                            <div className="row h2">Thanks for listening. Now join in.</div>
                            <div  style={{fontSize: 24}} className="row">Save tracks, follow artist and build playlist. All for free.</div>
                            <div className="row"><button className="ui orange button">Create account</button></div>
                            <div className="row">Already have an account? <button style={{bottom: 10, marginLeft: 10, position: "relative"}} className="ui button">Sign in</button></div>
                        
                            <div className="row" style={{marginBottom: 0}}><Line color="#999"/></div>
                            <div className="row">
                                <h2 style={{fontSize: 12, right: 70, position: "relative"}}>Popular searches ⁃ Directory ⁃ About us ⁃ Creator Resources ⁃ Blog ⁃ Jobs ⁃ Developers ⁃ Help ⁃ Legal ⁃ Privacy ⁃ Cookies ⁃ Imprint ⁃ Charts</h2>
                                <h2 style={{fontSize: 12, right: 788, position: "relative"}}>Language: English (US)</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Bottom;