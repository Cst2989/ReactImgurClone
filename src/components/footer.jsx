var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
	getInitialState:function(){
		return{
			showFooter:false
		}
	},
	render:function(){
		return  <div className="footer">
		<div className="show_footer" onClick={this.HandleClick}></div>
		<footer className={this.state.showFooter ? "active" : null}>
		<div onClick={this.HandleClick} className="close_footer"></div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
              <p>Powered by <strong>Node.js</strong>, and <strong>React</strong> with Flux architecture and <a href="http://api.imgur.com/"><strong>Imgur API</strong></a></p>
              <p>You may view the <a href='https://github.com/Cst2989/ReactImgurClone'>Source Code</a> behind this project on GitHub.</p>
              <p>© 2016 Neciu Dan</p>
            </div>
            <div className='col-sm-6 hidden-xs'>
              <h3 className='lead'>Social Media Links</h3>
              <ul className='list-inline'>
              	<li><a href="#" className="fb"></a></li>
              	<li><a href="#" className="git"></a></li>
              	<li><a href="#" className="tw"></a></li>
              	<li><a href="#" className="inst"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      </div>
	},
	HandleClick:function(){
		this.setState({
			showFooter: !this.state.showFooter
		})
	}
})