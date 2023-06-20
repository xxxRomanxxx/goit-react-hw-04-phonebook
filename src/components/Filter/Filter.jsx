import React from "react";
import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({value, onChange}) => {
	return (
		<label className={css.filter}>
			Find contacts by name
			<input type="text" name="filter" value={value} onChange={onChange}  className={css.filter__input}/>
		</label>
	)
};

Filter.prototype = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
}

export default Filter;