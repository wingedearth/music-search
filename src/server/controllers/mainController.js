import getTemplate from '../../assets/views/index';

const initialStateData = {
	mainStore: {
		foo: 'bar',
		venture: ['Thaddeus', 'Dean', 'Hank', 'Brock Sampson', 'JJ', 'Helper'],
		title: 'Music Search'
	},
	searchStore: {
		searchText: ''
	},
	artistStore: {
		artists: [],
		currentArtist: {},
		relatedArtists: []
	}
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
