import {renderToString} from 'react-dom/server';
import React from 'react';
import getTemplate from '../../assets/views/index';
import Home from '../../client/components/Home';

const initialStateData = {
	foo: 'bar',
	searchText: '',
	searchTerm: '',
	title: 'Music Search'
};
const markup = renderToString(<Home />);

/**
 * Sends home page
 * @param {obj} req - Express request
 * @param {obj} res - Express response
 */
export default (req, res) => {
	res.send(getTemplate(markup, initialStateData));
};

