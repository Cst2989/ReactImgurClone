var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var CommentStore = require('../stores/comment-store');
var CommentBox = require("./comment-box")

var imagedetail = React.createClass({
	mixins:[
		Reflux.listenTo(ImageStore,'onChange'),
		Reflux.listenTo(CommentStore,'onChange')
	],
	getInitialState:function(){
		return {
			image:null,
			comment:null
		}
	},
	componentWillMount:function() {
	      Actions.getImage(this.props.params.id);
	},
	render: function() {
		console.log(this.state.image);
		return <div className="container">
			<div className="image-detail">
			{this.state.image ? this.renderContent() : null}
			</div>
		</div>
	},
	renderContent:function(){
		return <div>
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4>{this.state.image.title}</h4>
				</div>
				<div className="panel-body">
					{this.renderImage()}
				</div>
			</div>
			<h3>Comments:</h3>
			{this.renderComments()}
		</div>
	},
	renderComments:function(){
		if(!this.state.comments){
			return null
		}else{
			return this.state.comments.map(function(comment){
				return <CommentBox {... comment} key={comment.id} />
			})
		}
	},
	renderImage:function(){
		console.log(this.state.image)
		if (this.state.image.animated){
			return <video preload="auto" autoPlay="autoplay" webkit-playsinline loop="loop">
				<source src={this.state.image.mp4} type="video/mp4" ></source>
			</video>
		}else{
			return <img src={this.state.image.link} />
		}
	},
	onChange:function(){
		this.setState({
			image : ImageStore.find(this.props.params.id),
			comments:CommentStore.comment
		})
	}

});

module.exports = imagedetail;