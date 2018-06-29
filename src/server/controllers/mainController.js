const pageTitle = 'Music Search';

const markup = `
	<h1>${pageTitle}</h1>
`;

const mainController = (req, res) => res.send(markup);

export default mainController;
