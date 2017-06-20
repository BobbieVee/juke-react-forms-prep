import React from 'react';

const FilterInput = (props) => {
	const inputValue = props.inputValue;
	const handleInput = props.handleInput;
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        onChange={handleInput}
      	value={inputValue}
        className="form-control"
        placeholder="Enter artist name"   
      />
    </form>
  );
}

export default FilterInput;