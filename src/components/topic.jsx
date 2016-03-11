var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var InfiniteScroll = require('react-infinite-scroll')(React);
var ImagePreview =require('./image-preview');
var ReactDOM = require('react-dom');
var topic = React.createClass({
	mixins:[
		Reflux.listenTo(ImageStore,'onChange')
	],
	getInitialState:function(){
		return{
			images:[],
			page:0,
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
				<InfiniteScroll
				    pageStart={this.state.page}
				    loadMore={this.handleLoad}
				    hasMore={true || false}
				    loader={<div className="loader">Loading ...</div>}>
				 	{this.renderImages()}
				</InfiniteScroll>
				</div>
			</div>
			<div className="col-md-4 col-sm-6 col-xs-12">
				<div className="back_to_top" onClick={this.HandleClick}></div>
			</div>
		</div>
	},
	handleLoad:function(){
		console.log(this.state.page);
		
	},
	HandleClick:function(){
		ReactDOM.findDOMNode(this).scrollIntoView();
	},
	renderImages:function(){
		return this.state.images.map(function(image){
			return 	<ImagePreview key={image.id} {...image} />
		});
	},
	onChange:function(event,images){
		this.setState({images:images})
	}

});

module.exports = topic;