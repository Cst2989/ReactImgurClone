var React = require('react');

var imagePreview = React.createClass({

	render: function() {
		return <div className="image-preview">
			{this.image()}
		</div>
	},
	image:function(){
		var link = 'http://i.imgur.com/' + this.props.id +'h.jpg';
		return <img src={link} />
	}

});

module.exports = imagePreview;