var React = require('react');
module.exports = React.createClass({
  HandleClick:function(){
		ReactDOM.findDOMNode(this).scrollIntoView();
	},
  componentDidMount:function() {
      	//(adsbygoogle = window.adsbygoogle || []).push({});
        const script = document.createElement("script");
        script.src = "//clksite.com/adServe/banners?tid=132115_226516_0";
         $('#scriptContainer').append(script);
  },
	render: function() {
    return <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="back_to_top" onClick={this.HandleClick}></div>
      <div className="tm-embed-container" id="scriptContainer">
      </div>
    </div>
  }
});
