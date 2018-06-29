import getTemplate from '../../assets/templates/index';

const pageTitle = 'Music Search';
const markup = '<h1>Music Search App</h1>';
const template = getTemplate(pageTitle, markup, { foo: 'bar' });

const mainController = (req, res) => res.send(template);

export default mainController;
