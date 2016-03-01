var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var ImagePreview =require('./image-preview')
var topic = React.createClass({
	mixins:[
		Reflux.listenTo(ImageStore,'onChange')
	],
	getInitialState:function(){
		return{
			images:[]
		}
	},
	componentWillMount:function(){
		Actions.getImages(this.props.params.id);
	},
	componentWillReceiveProps:function(nextProps) {
	      Actions.getImages(nextProps.params.id);
	},
	render: function() {
		return <div className="container">
			<div className="col-md-8 col-sm-6 col-xs-12">
				<div className="topic ">
					{this.renderImages()}
				</div>
			</div>
		</div>
	},
	renderImages:function(){
		return this.state.images.slice(0,20).map(function(image){
			return <ImagePreview key={image.id} {...image} />
		});
	},
	onChange:function(event,images){
		this.setState({images:images})
	}

});

module.exports = topic;