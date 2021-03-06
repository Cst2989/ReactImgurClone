var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topic = require('./components/topic');
var Random = require('./components/random');
var Policy = require('./components/policy');
var About = require('./components/about');
var Contact = require('./components/contact');
var ImageDetail = require('./components/imagedetail');
module.exports = (
	<Router>
		<Route path="/" component={Main}>
			<Route path="topics/:id" component={Topic} />
			<Route path="random" component={Random} />
			<Route path="images/:id" component={ImageDetail} />
			<Route path="policy" component={Policy} />
			<Route path="about" component={About} />
			<Route path="contact" component={Contact} />
		</Route>
	</Router>
);
