import React, { Component } from 'react';
import HanSolo from '../images/HanSolo.png';
import PrincessLeia from '../images/PrincessLeia.png';
import DarkVeder from '../images/DarkVeder.png';
import LukeSkywalker from '../images/LukeSkywalker.png';
import ObiWanKenobi from '../images/Obi-WanKenobi.png';
import R2D2 from '../images/R2-D2.png';
import Yoda from '../images/Yoda.png';
import Rey from '../images/Rey.png';
import TheEmperor from '../images/TheEmperor.png';
import Finn from '../images/Finn.png';
import ChooChubaka from '../images/ChooChubaka.png';
import MaceWindu from '../images/MaceWindu.png';

// authors rendered to page
const authors = [
  {
    id: 1,
    url: HanSolo,
    alt: "Han Solo"
  },
  {
    id: 2,
    url: PrincessLeia,
    alt: "Princess Leia"
  },
  {
    id: 3,
    url: DarkVeder,
    alt: "ark Veder"
  },
  {
    id: 4,
    url: LukeSkywalker,
    alt: "Stevenson"
  },
  {
    id: 5,
    url: ObiWanKenobi,
    alt: "Obi-Wan Kenobi"
  },
  {
    id: 6,
    url: R2D2,
    alt: "R2-D2"
  },
  {
    id: 7,
    url: Yoda,
    alt: "Yonda"
  },
  {
    id: 8,
    url: Rey,
    alt: "Rey"
  },
  {
    id: 9,
    url: TheEmperor,
    alt: "The Emperor"
  },
  {
    id: 10,
    url: Finn,
    alt: "Finn"
  },
  {
    id: 11,
    url: ChooChubaka,
    alt: "Choo Chubaka"
  },
  {
    id: 12,
    url: MaceWindu,
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
  const topScore = Math.max(this.state.topScore, this.state.clickStreak);

  this.setState({
    clickStreak: 0,
    clickedArray: [],
    topScore: topScore
  });
} else {
      // if image was not clicked before, add image to clickedArray
      let currentAuthor = this.state.authors.find(function (element) {
        return element.id === id;
      })

      const clickedArray = [...this.state.clickedArray, currentAuthor];
clickStreak++;

this.setState({
  clickedArray: clickedArray,
  clickStreak: clickStreak
});
    }
  }

  constructor() {
    super();
    this.state = {
      authors,
      clickStreak: 0,
      topScore: 0,
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