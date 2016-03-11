var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var imagePreview = React.createClass({
	getInitialState:function(){
		return{
			hovering:false
		}
	},
	render: function() {
		return <div className="image-preview">
			<Link to={"images/" + this.props.id}  >
				<div className="title">{this.props.title}</div>
				{this.props.animated && this.state.hovering ? this.video() : this.image()}
				{this.props.animated && !this.state.hovering ? this.icon() : null}
			</Link>
				{this.inset()}
			
		</div>
	},
	image:function(){
		return <img onMouseEnter={this.handleMouseEnter}  src={this.props.link} />
	},
	inset:function(){
		return <div className="inset">
			<div className="views">{this.props.views} views</div>
			<div class="share_buts">
				<div className="btn-share facebook" onClick={this.shareFb}>Facebook</div>
				<div className="btn-share twitter">Twitter</div>
			</div>
		</div>
	},
	icon:function(){
		return <span className="glyphicon glyphicon-play">

		</span>
	},
	shareFb:function(){
		FB.ui(
		  {
		    method: 'share',
		    href:'',
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
	video:function(){
		return <div>
			<video onMouseLeave={this.handleMouseLeave} preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
				<source src={this.props.mp4} type="video/mp4"></source>
			</video>
		</div>
	},
	handleMouseLeave:function(){
		this.setState({
			hovering:false
		})
	},
	handleMouseEnter:function(){
		this.setState({
			hovering:true
		})
	}

});

module.exports = imagePreview;