var React = require('react');
var Sidebar = require('./sidebar');

module.exports = React.createClass({
  	render: function() {
      return  <div className="container">
    		<div className="col-md-8 col-sm-6 col-xs-12">
    		    <div className="topic ">
                <h2>Contact MergeBraila.ro</h2>
              </div>
        </div>
        <Sidebar />
      </div>
    }
});
