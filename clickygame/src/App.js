import React, { Component } from "react";
import Nav from "./components/Nav";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";
import ImageContainer from "./components/ImageContainer";
import images from "../src/images.json";

class App extends Component {
    state = {
        score: 0,
        topScore: 0,
        images: images,
        imageOrder:[],
        message: "Click somebody"
    }

    //randomly decides order the images display
    shuffleImages() {
        let indexes = [];

        //creating list of all the indexes in images
        for(let i=0; i<this.state.images.length; i++) {
            indexes.push(i);
        }

        let order = [];

        //shuffling indexes to determine image order
        for(let j=0; j<this.state.images.length; j++) {
            const n = Math.floor(Math.random()*indexes.length)
            const nextIndex = indexes[n];

            order.push(nextIndex);

            //removing index from indexes
            indexes[n] = indexes[indexes.length - 1];
            indexes.pop();
        }

        this.setState({imageOrder: order});
    }

    //randomly deciding the order images display
    componentDidMount() {
        this.shuffleImages();
    }

    //image click handler
    imageClicked = id => {
        //console.log("image clicked!");
        const index = id - 1;
        const image = this.state.images[index];

        //image already clicked. game over.
        if (image.clicked) {
            //console.log("game over");
            this.setState({
                score: 0,
                message: "D'oh!"
            });

            //resetting pictures to unclicked status
            //this.setState({images: images});
            images.map(img => {
                img.clicked = false;
                return img;
            });
            //console.log(this.state.images);
        }
        //image not already clicked. updating score
        else {
            image.clicked = true;

            //giving user a point
            const newScore = this.state.score + 1;
            this.setState({ 
                score: newScore,
                message: "Excellent!"
             });

            //new high score achieved
            if (newScore > this.state.topScore) {
                this.setState({ topScore: this.state.topScore + 1});
            }

            this.shuffleImages();
        }
    }

    render() {
        return (
            <div>
                <Nav
                    score={this.state.score}
                    topScore={this.state.topScore}
                    message={this.state.message}
                />
                <Instructions />
                <ImageContainer
                    images={this.state.images}
                    imageOrder={this.state.imageOrder}
                    imageHandler={this.imageClicked}
                />
                <Footer />
            </div>

        )
    }
}

console.log(images);

export default App;