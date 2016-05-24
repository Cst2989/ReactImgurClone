var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var NextImages = require('../stores/image-store-2');
var Reflux = require('reflux');
var Sidebar = require('./sidebar');
var InfiniteScroll = require('react-infinite-scroll')(React);
var ImagePreview =require('./image-preview');
var ReactDOM = require('react-dom');
var topic = React.createClass({
	mixins:[
	Reflux.listenTo(ImageStore,'onChange'),
	Reflux.listenTo(NextImages,'onChange2')
	],
	getInitialState:function(){
		return{
			images:[],
			page:0,
			hasMore:true
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
		hasMore={this.state.hasMore}
		loader={<div className="loader">Loading ...</div>}>
		{this.renderImages()}
		</InfiniteScroll>
		</div>
		</div>
		<Sidebar />
		</div>
	},
	handleLoad:function(){
		if (this.state.page != 0) {
			var value = this.props.params.id +"/"+this.state.page;
			Actions.getImages2(value);
		}
		this.setState({
			page:this.state.page+1,
			hasMore:false
		});

		setTimeout(function () {
			this.setState({
				hasMore: true
			});
		}.bind(this), 1000);
		console.log(this.state.page);
	},

	renderImages:function(){
		return this.state.images.map(function(image){
			return 	<ImagePreview key={image.id} {...image} />
		});
	},
	onChange:function(event,images){
		this.setState({images:images})
	},
	onChange2:function(event,images){
		var old= this.state.images;
		var children = old.concat(images);
		this.setState({images:children})
	}
});

module.exports = topic;
