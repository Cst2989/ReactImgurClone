var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var Sidebar = require('./sidebar');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


module.exports = React.createClass({
	mixins:[
		Reflux.listenTo(TopicStore,'onChange')
	],
	getInitialState:function(){
		return{
			topics:[]
		}
	},
	componentWillMount:function(){
		Actions.getTopics();
	},
	render: function() {
		return <div className="main">
			<div className="container">
				<div className="col-md-8 col-sm-6 col-xs-12">
					<div className="list-group">
						{this.renderTopics()}
						<Link to="/random" className="list-group-item last">
							<h4>Merge Braila</h4>
							<p>A page of random gallery images.</p>
						</Link>
						<div className="clearfix"></div>
					</div>
				</div>
				<Sidebar />
			</div>
		</div>
	},
	renderTopics:function(){
		return this.state.topics.map(function(topic){
			return <Link to={"/topics/"+topic.id} className="list-group-item" key={topic.id}>
				<h4>{topic.name}</h4>
				<p>{topic.description}</p>
			</Link>

		})
	},
	onChange:function(event,topics){
		this.setState({
			topics:topics
		})
	}
});
