import React, {Component} from 'react';


class Movie extends Component{
	
	render() {
		return(
			<h2>
				{this.props.movie.name}
			</h2>
		)
	}
}
export default Movie;
