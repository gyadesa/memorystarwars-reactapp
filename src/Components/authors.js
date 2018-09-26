import React, { Component } from 'react';

// authors rendered to page
const authors = [
  {
    id: 1,
    // url: require("/images/HanSolo.png",
    url: require("../images/HanSolo.png"),
    alt: "Han Solo"
  },
  {
    id: 2,
    url: require("../images/PrincessLeia.png"),
    alt: "Princess Leia"
  },
  {
    id: 3,
    url: require("../images/DarkVeder.png"),
    alt: "ark Veder"
  },
  {
    id: 4,
    url: require("../images/LukeSkywalker.png"),
    alt: "Stevenson"
  },
  {
    id: 5,
    url: require("../images/Obi-WanKenobi.png"),
    alt: "Obi-Wan Kenobi"
  },
  {
    id: 6,
    url: require("../images/R2-D2.png"),
    alt: "R2-D2"
  },
  {
    id: 7,
    url: require("../images/Yoda.png"),
    alt: "Yonda"
  },
  {
    id: 8,
    url: require("../images/Rey.png"),
    alt: "Rey"
  },
  {
    id: 9,
    url: require("../images/TheEmperor.png"),
    alt: "The Emperor"
  },
  {
    id: 10,
    url: require("../images/Finn.png"),
    alt: "Finn"
  },
  {
    id: 11,
    url: require("../images/ChooChubaka.png"),
    alt: "Choo Chubaka"
  },
  {
    id: 12,
    url: require("../images/MaceWindu.png"),
    alt: "Mace Windu"
  }
];

export default class Authors extends Component {

  shuffle(authors) {
    for (let i = authors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [authors[i], authors[j]] = [authors[j], authors[i]];
    }
    return authors;
  }

  handleClicked = (id) => {
    // this rearranges the authors when an author is clicked
    let authors = this.shuffle(this.state.authors);
    this.setState({ authors });

    // this is meant to get the Clicked value of the current author, used to add logic to the if/else function
    let clickStreak = this.state.clickStreak;

    // change if statement to check if image is in the clicked images array instead of clicked since clicked is no longer in the objects
    let checkAuthor = this.state.clickedArray.find(function (element) {
      return element.id === id;
    })
    // if author is in the clickedArray, then run if
    if (checkAuthor) {
      this.setState({ clickStreak: 0, clickedArray: [] });
      // store total points from clickStreak and put them into an array. Then grab the largest number in the array and display it.
      this.state.topScoreArray.push(this.state.clickStreak);
      this.state.topScore = Math.max(...this.state.topScoreArray);
    } else {
      // if image was not clicked before, add image to clickedArray
      let currentAuthor = this.state.authors.find(function (element) {
        return element.id === id;
      })

      this.state.clickedArray.push(currentAuthor);
      clickStreak++;
      this.setState({ clickStreak });
    }
  }

  constructor() {
    super();
    this.state = {
      authors,
      clickStreak: 0,
      topScore: 0,
      topScoreArray: [],
      clickedArray: []
    }
  }

  render() {
    return (
      <div>
        <span className="scores">
          <center><span><h5>Current Score: {this.state.clickStreak}</h5></span> <h5>Top Score: {this.state.topScore}</h5></center>
        </span>
        <div className="row">
          {this.state.authors.map(author => (
            <div className="col-sm-3" key={author.id} onClick={() => this.handleClicked(author.id)}>
              <img className="authors" src={author.url} alt={author.alt} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}