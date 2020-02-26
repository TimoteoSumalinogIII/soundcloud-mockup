import React, { Component } from 'react';
import './top.css'
import Track from './Track';

class Top extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            <div className="ui container">
                <div className="ui grid" style={{zIndex: 4, position: "absolute"}}>
                   <div className="row">
                        <div className="ten wide column">
                            <i className="large soundcloud icon ml-5 mt-3" style={{color: "white", fontSize: 50, position: "relative"}}></i>
                            <h2 style={{position: "relative", color: "white", left: 110, bottom: 60}}>Soundcloud</h2>
                       </div>
                        
                        <div className="right floated ten wide column ">
                            <button className="ui basic inverted button" style={{position: "relative", left: 645, bottom: 100}}>Sign in</button>
                            <button className="ui floated right orange button" style={{position: "relative", left: 740, bottom: 136}}>Create account</button>
                            <p style={{color: "white", position: "relative", left: 890, bottom: 162}}>For creators</p>
                        </div>
                   </div>

                    
                </div>
                <div style={{position: "relative"}}id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                   
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://a-v2.sndcdn.com/assets/images/hp_image_creator_slide-db400e2f.jpg" alt="First slide"/>
                            <div class="carousel-caption d-none d-md-block" style={{bottom: 90}}>
                                <h2 style={{fontSize: 36}}>What's next in music is first on SoundCloud</h2>
                                <h3 style={{fontSize: 18, marginTop: 0, marginBottom: 0}}>Upload your first track and begin your journey. SoundCloud gives</h3>
                                <h3 style={{fontSize: 18, marginTop: 0, marginBottom: 0}}>you space to create, find your fans, and connect with other</h3>
                                <h3 style={{fontSize: 18, marginTop: 0, marginBottom: 20}}>artist</h3>
                                <button className="ui large orange button">Start uploading today</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg" alt="Second slide"/>
                            <div class="carousel-caption d-none d-md-block" style={{bottom: 90}}>
                                <h2 style={{fontSize: 36}}>Discover more with SoundCloud Go+</h2>
                                <h3 style={{fontSize: 18, marginTop: 0, marginBottom: 0}}>SoundCloud Go+ lets you listen offline, ad-free, with 150</h3>
                                <h3 style={{fontSize: 18, marginTop: 0, marginBottom: 20}}>million tracks - and growing.</h3>
                                <button className="ui large basic inverted button">Learn more</button>
                                <button className="ui large orange button">Start uploading today</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui attached segment">
                    
                    <div className="ui centered grid">
                        <div className="row"></div>

                        <div className="row"></div>

                        <div className="row">
                                <div className="ui search">
                                    <div className="ui big icon input">
                                    <input style={{backgroundColor: "#f2f2f2", width: 600, marginRight: 10}} type="text" placeholder="Search for artists, bands, tracks, podcasts"/>
                                        <i className="ui search icon"></i>
                                        <div class="results"></div>
                                    </div>
                                </div>                                
                                <h2 style={{marginRight: 10, bottom: 18, position: "relative"}}>or</h2>
                                <buttom style={{height: 50}} className="ui orange button">Upload your own</buttom>
                        </div>

                        <div className="row">
                            <h2 style={{
                            }}>Hear what's trending for free in the SoundCloud community</h2>
                        </div>

                        <div className="row">
                            <Track content={0} /> 
                            <Track content={1}/>
                            <Track content={2}/> 
                            <Track content={3}/>
                            <Track content={4}/> 
                            <Track content={5}/>
                        </div>

                        <div className="row">
                            <Track content={6}/> 
                            <Track content={7}/>
                            <Track content={8}/> 
                            <Track content={9}/>
                            <Track content={10}/> 
                            <Track content={11}/>
                        </div>

                        <div className="row">
                            <button className="ui orange button">
                                <h2>Explore Trending Playlist</h2>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Top;