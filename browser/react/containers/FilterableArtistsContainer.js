import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class FilterableArtistsContainer extends React.Component{
	constructor(){
		super();
		this.state = {inputValue: ''};
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(event){
		const value = event.target.value;
		this.setState({inputValue: value});
	}

	render(){
		const artists = this.props.artists;
		const inputValue = this.state.inputValue;		
		const filteredArtists = artists.filter(artist => artist.name.toUpperCase().match(inputValue.toUpperCase()));


		return(
			<div>
				<FilterInput inputValue={inputValue} handleInput={this.handleInput}/>
				 <Artists artists={filteredArtists} />
			</div>
		)
	}
}