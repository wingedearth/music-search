import getTemplate from '../../assets/templates/index';

const pageTitle = 'Music Search';
const markup = '<h1>Music Search Thingy</h1>';
const initialStateData = {
	foo: 'bar',
	searchText: '',
	searchTerm: ''
};

/**
 * Sends markup in response
 * @param {obj} req - request
 * @param {obj} res - response
 */
export default (req, res) => {
	// build initial page template
	const template = getTemplate(pageTitle, markup, initialStateData);

	// send initial page
	res.send(template);
};
