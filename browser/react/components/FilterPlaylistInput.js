import React from 'react';

export default (props) => {
	const inputValue = props.inputValue;
	const handleInput = props.handleInput;
	const createPlaylist = props.createPlaylist;
	const buttonDisabled =  props.buttonDisabled;
	const warning = props.warning;
	return(
		<div>
			<div className="well">
			  <form className="form-horizontal" onSubmit={createPlaylist}			          	
>
			    <fieldset>
			      <legend>New Playlist</legend>
			      <div className="form-group">
			        <label className="col-xs-2 control-label">Name</label>
			        <div className="col-xs-10">
			          <input 
			          	className="form-control" 
			          	type="text"
			          	value={inputValue}
			          	onChange={handleInput}
			          />
			        </div>
			      </div>
			      <div className="form-group">
			        <div className="col-xs-10 col-xs-offset-2">
			          <button 
			          	type="submit" 
			          	className="btn btn-success"
			          	disabled={buttonDisabled}
		          	>
		          		Create Playlist
		          	</button>
			        </div>
			      </div>
			      {warning && inputValue.length === 0 ? 
			      	<div className="alert alert-warning">Please enter a name</div>
			      	: <div></div>
		      	}
			      {warning && inputValue.length > 16 ? 
			      	<div className="alert alert-warning">Please restrict to a maximum of 16 characters</div>
			      	: <div></div>
		      	}		      	
			    </fieldset>
			  </form>
			</div>
		</div>
	)
}