var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var CommentStore = require('../stores/comment-store');
var CommentBox = require("./comment-box")

var imagedetail = React.createClass({
	mixins:[
		Reflux.listenTo(ImageStore,'onChange'),
	],
	getInitialState:function(){
		return {
			image:null,
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
				<div className="panel-footer">
						{this.inset()}
				</div>
			</div>
			
		</div>
	},
	inset:function(){
		return <div className="inset">
			<div class="share_buts">
				<div className="btn-share facebook" onClick={this.shareFb}>Facebook</div>
				<div className="btn-share twitter">Twitter</div>
			</div>
		</div>
	},
	shareFb:function(){
		FB.ui(
		  {
		    method: 'share',
		    href:'http://localhost:8000/#/images/'+this.props.id,
		    link: 'http://localhost:8000/#/images/'+this.props.id,
		    caption:this.props.title,
		    picture:this.props.link
		  },
		  // callback
		  function(response) {
		    if (response && !response.error_message) {
		      //alert('Posting completed.');
		    } else {
		      //alert('Error while posting.');
		    }
		  }
		);
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
		})
	}

});

module.exports = imagedetail;