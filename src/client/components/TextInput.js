import React, { Component } from 'react';

export default class TextInput extends Component {
	constructor(props) {
		super(props);
	}

	get value() {
		return this.input.value;
	}

	set value(value) {
		this.input.value = value;
	}

	render() {
		const { props } = this;

		return (
			<input
				type="text"
				{...props}
				ref={input => {
					this.input = input;
				}}
			/>
		);
	}
}
