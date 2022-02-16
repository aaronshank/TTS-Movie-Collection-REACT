import React, { Component } from 'react'
import '../css/Movie.css'
import PropTypes from 'prop-types'

const GENERIC_MOVIE_TITLE = "Movie Title"
const GENERIC_MOVIE_DESCRIPTION = "Movie Description"
const GENERIC_MOVIE_YEAR = 2000
const GENERIC_MOVIE_GENRE = "Movie Genre"

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: GENERIC_MOVIE_TITLE,
      desc: GENERIC_MOVIE_DESCRIPTION,
      year: GENERIC_MOVIE_YEAR,
      genre: GENERIC_MOVIE_GENRE,
      editMode: false
    }
  }

  handleEdit() {
    this.setState({
      editMode: true
    })
  }

  handleSave() {
    this.setState({
      title: this.titleContent.current.value,
      desc: this.descContent.current.value,
      year: this.yearContent.current.value,
      genre: this.genreContent.current.value,
      editMode: false
    })
  }

  handleDelete() {
    this.props.deleteHandler(this.props.id)
  }

  render() {
    let titleElement, descElement, yearElement, genreElement, buttonArea
    if (this.state.editMode) {
      titleElement = (
        <textarea
          ref={this.titleContent}
          className='title-textarea'
          defaultValue={this.state.title}
        />
      )
      descElement = (
        <textarea
          ref={this.descContent}
          className='desc-textarea'
          defaultValue={this.state.desc}
        />
      )
      yearElement = (
        <textarea
          ref={this.yearContent}
          className='year-textarea'
          defaultValue={this.state.year}
        />
      )
      genreElement = (
        <textarea
          ref={this.genreContent}
          className='genre-textarea'
          defaultValue={this.state.genre}
        />
      )
      buttonArea = (
        <div>
          <button
            className='btn btn-primary'
            onClick={this.handleSave.bind(this)}
          >
            Save
          </button>
        </div>
      )
    } else {
      titleElement = <h5 className='card-title'>{this.state.title}</h5>
      descElement = <h5 className='card-body'>{this.state.desc}</h5>
      yearElement = <h5 className='card-title'>{this.state.year}</h5>
      genreElement = <h5 className='card-title'>{this.state.genre}</h5>
      buttonArea = (
        <div>
          <button className='btn btn-info' onClick={this.handleEdit.bind(this)}>
            Edit
          </button>
          <button className='btn btn-danger' onClick={this.handleDelete.bind(this)}>
            Delete
          </button>
        </div>
      )
    }

    return (
      <div className='col-sm-6'>
        <div className='card card-view'>
          <div className='card-body'>
            {titleElement}
            {descElement}
            {yearElement}
            {genreElement}
            {buttonArea}
          </div>
        </div>
      </div>
    )
  }
}

Movies.defaultProps = {
  title: 'Movie title',
  desc: 'Movie description',
  year: 2000,
  genre: 'Movie genre'
}

Movies.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  year: PropTypes.number,
  genre: PropTypes.string
}

export default Movies