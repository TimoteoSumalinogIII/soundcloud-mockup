import React, { Component } from 'react';


class Track extends Component {
    state = { 
        image: [
            "https://i1.sndcdn.com/artworks-000647707510-2e5k79-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-g2WTH7qVrWtY-0-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-hqkriQCL2ZFw-0-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-000660865033-4lh6vm-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-g2WTH7qVrWtY-0-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-seFCyjOcfwiT-0-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-hqkriQCL2ZFw-0-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-000607413409-8kknp0-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-bJw6xXlZIv9X-0-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-000641249716-7pmq6n-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-000552122622-b4oo8a-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-000418049754-usyur6-t500x500.jpg"
        ],
        name: [
            "Some thai title",
            "The Box",
            "Numbers(feat. Roddy Ric...",
            "Some thai title 2",
            "High Fashion (feat. Mustar...",
            "King Of My City",
            "Me and My Guitar",
            "Bandit ft. NBA Youngboy",
            "Blueberry Faygo",
            "Suicidal",
            "GOODMORNINGTOKYO! [P...",
            "Falling",
        ],
        author: [
            "Patima Poochai",
            "Roddy Rich",
            "A BOOGIE WIT DA HOODIE",
            "Patima Poochai",
            "Roddy Rich",
            "A BOOGIE WIT DA HOODIE",
            "A BOOGIE WIT DA HOODIE",
            "Juice WRLD",
            "Lil Mosey",
            "Ynw Melly",
            "TOKYO'S REVENGE",
            "Trevor Daniel",
        ]
     }


    render(props) { 
        const {image, name, author} = this.state;
        const contain = {
            marginRight: 10, 
            marginLeft: 10,
            border: "black",
            textAlign: "left"
        }
        const track = {
            backgroundImage: `url(${image[this.props.content]})`,
            backgroundSize: "contain",
            height: 154,
            width: 154,
        }
        return ( 
            <React.Fragment>
                <div style={contain}>
                    <div style={track}></div>
                    <p style={{marginBottom: 0}}>{name[this.props.content]}</p>
                    <p style={{fontSize: 12, color: 'grey'}}>{author[this.props.content]}</p>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Track;