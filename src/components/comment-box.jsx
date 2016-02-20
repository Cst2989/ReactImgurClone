var React = require('react');

var commentbox = React.createClass({

	render: function() {
		return <ul className="list-group">
			{this.renderComments()}
		</ul>
	},
	renderComments:function(){
		return <li className="list-group-item comment-box">
			<span className="badge">{this.props.ups}</span>
			<h5>{this.props.author}</h5>
			{this.props.comment}
		</li>
	}

});

module.exports = commentbox;