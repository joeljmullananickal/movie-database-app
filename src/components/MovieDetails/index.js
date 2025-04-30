import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'

class MovieDetails extends Component {
  state = {
    moviedetails: {},
    castdetails: {},
  }

  componentDidMount() {
    this.getFullMovieMovieDetails()
  }

  getFullMovieDetails = async () => {
    const {match} = this.props
    const {id} = match
    const API_KEY = '5b08cc4c34f51afa010e05367cd23a61'
    const apiUrl1 = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    const response1 = await fetch(apiUrl1)
    const data1 = await response1.json()
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    const response = await fetch(apiUrl)
    const data = await response.json()
    this.setState({moviedetails: data1, castdetails: data})
  }

  render() {
    const {moviedetails, castdetails} = this.state
    return (
      <>
        <NavBar />
        <div className="A">
          <div className="A1">
            <h1>Movie Details</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500${moviedetails.backdrop_path}`}
              className="img"
            />
            <h1>{moviedetails.original_title}</h1>
            <div className="A2">
              <p>{moviedetails.ratings}</p>
              <p>{moviedetails.genre}</p>
            </div>
            <div className="A2">
              <p>{moviedetails.duration}</p>
              <p>{moviedetails.release_date}</p>
            </div>
            <p>{moviedetails.overview}</p>
          </div>
          <div className="A1">
            <h1>Cast Details</h1>
            <ul className="ul">
              {castdetails[0].map(item => (
                <li>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                    className="img"
                  />
                  <h1>{item.original_title}</h1>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default MovieDetails
