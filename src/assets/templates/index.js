/**
 * Page Template
 * @param {string} title -
 * @param {string} markup - initial state markup
 * @param {object} initialStateData -
 */
export default function(title, markup, initialStateData) {
	const initialState = JSON.stringify(initialStateData);

	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>${title}</title>
				<link rel="stylesheet" href="/css/style.css">
			</head>
			<body>
				<div id="main">${markup}</div>
				<script type="text/javascript" src="app.js"></script>
				<script>window.__INITIAL_STATE__ = ${initialState}</script>
			</body>
		</html>`;
}
