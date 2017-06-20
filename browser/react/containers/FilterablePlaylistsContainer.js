import React from 'react';
import FilterPlaylistInput from '../components/FilterPlaylistInput';
import axios from 'axios';

export default class FilterablePlaylistsContainer extends React.Component{
	constructor(){
		super();
		this.state = {
			inputValue: '',
			buttonDisabled: true,
			warning: false
		}
		this.handleInput = this.handleInput.bind(this);
		this.createPlaylist = this.createPlaylist.bind(this);
	}

	handleInput(e){
		const inputValue = e.target.value;
		const validEntry = inputValue.length > 0 && inputValue.length < 17
		let buttonDisabled = validEntry ? false : true;
		let warning = validEntry ? false : true;

		this.setState({inputValue, buttonDisabled, warning});
	}

	createPlaylist(event){
		const inputValue = this.state.inputValue;
		event.preventDefault();
		axios.post('/api/playlists', {name: inputValue })
  	.then(res => res.data)
  	.then(result => {
    console.log(result) // response json from the server!
  });
  	// clean state
		this.setState({inputValue: '', buttonDisabled: true});
	}

	render(){
		return(
			<FilterPlaylistInput 
				inputValue = {this.state.inputValue }
				handleInput = {this.handleInput}
				createPlaylist = {this.createPlaylist}
				buttonDisabled = {this.state.buttonDisabled}
				warning = {this.state.warning}
			/>
		)
	}
}