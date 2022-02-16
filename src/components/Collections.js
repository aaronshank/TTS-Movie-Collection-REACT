import React, { Component } from 'react'
import '../css/Collections.css'
import Movies from './Movies'

class Collections extends Component {
	constructor(props) {
		super(props)
		this.state = {
			movies: [],
		}
	}

	addMovie() {
		let movies = this.state.movies
		movies.push({
			id: Date.now(),
		})
		this.setState({
			movies: this.state.movies,
		})
	}

	deleteMovie(id) {
		let newMovieArray = this.state.movies
		for (let i = 0; i < newMovieArray.length; i++) {
			if (newMovieArray[i].id === id) {
				newMovieArray.splice(i, 1)
				break
			}
		}
		this.setState({
			movies: newMovieArray,
		})
	}

	render() {
		return (
			<div>
				<div>
					{this.state.movies.map((movie) => {
						return (
							<Movies
								key={movie.id}
								id={movie.id}
								deleteHandler={this.deleteMovie.bind(this)}
							/>
						)
					})}
				</div>
				<div className='cust-add'>
					<button
						className='btn btn-success add-button'
						onClick={this.addMovie.bind(this)}
					>
						Add
					</button>
				</div>
			</div>
		)
	}
}

export default Collections
