import getTemplate from '../../assets/views/index';

const initialStateData = {
	foo: 'bar',
	searchText: '',
	searchTerm: '',
	title: 'Music Search'
};
const markup = '';

/**
 * Sends home page
 * @param {obj} req - Express request
 * @param {obj} res - Express response
 */
export default (req, res) => {
	res.send(getTemplate(markup, initialStateData));
};
