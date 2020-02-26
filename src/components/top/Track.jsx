import React, { Component } from 'react';


class Track extends Component {
    state = { 
        image: "https://vignette.wikia.nocookie.net/jerma-lore/images/6/65/Slim_jim.png/revision/latest?cb=20170322060554",
        name: "Insert Track Name",
        author: "Insert Author Name"
     }


    render() { 
        const {image, name, author} = this.state;
        const contain = {
            marginRight: 10, 
            marginLeft: 10,
            border: "black",
            textAlign: "left"
        }
        const track = {
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            height: 154,
            width: 154,
        }
        return ( 
            <React.Fragment>
                <div style={contain}>
                    <div style={track}></div>
                    <p style={{marginBottom: 0}}>{name}</p>
                    <p style={{fontSize: 12, color: 'grey'}}>{author}</p>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Track;