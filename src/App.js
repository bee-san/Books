
// curl https://api.airtable.com/v0/appTwvJ9F7TG5QuYn/Books.key72YZ6QdLlW1pGt
//https://api.airtable.com/v0/appTwvJ9F7TG5QuYn/Books?api_key=key72YZ6QdLlW1pGt
import React, { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    fetch('')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ books: data.records });
    }).catch(err => {
      // Error
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-md-12 text-center">
            <div className="">
              {this.state.books.map(movie => <MovieCard {...movie.fields} /> )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const MovieCard = ({ title, year }) => (
  <div className="card">
    <img className="card-img-top" src="https://via.placeholder.com/362×200" alt="Movie poster" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        <small className="text-muted">{year}</small>
      </p>
    </div>
  </div>
);
