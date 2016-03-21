var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var TopicList = require('./topic-list')

module.exports = React.createClass({
	render:function(){
		return <div>
			<Header />
			{this.content()}
			<Footer />
		</div>
	},
	content:function(){
		if(this.props.children){
			return this.props.children
		}
		else{
			return <TopicList />
		}
	}
})

