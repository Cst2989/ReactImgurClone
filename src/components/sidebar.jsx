var React = require('react');
var ReactDOM = require('react-dom');
module.exports = React.createClass({
  HandleClick:function(){
		ReactDOM.findDOMNode(this).scrollIntoView();
	},
  componentDidMount:function() {

  },
	render: function() {
    return <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="back_to_top" onClick={this.HandleClick}></div>
      <div className="other_content" id="scriptContainer">
        
      </div>
    </div>
  }
});
