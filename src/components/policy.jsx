var React = require('react');
var Sidebar = require('./sidebar');

module.exports = React.createClass({
  	render: function() {
      return  <div className="container">
    		<div className="col-md-8 col-sm-6 col-xs-12">
    		    <div className="topic ">
              <h2>Privacy Policy for MergeBraila</h2>
              <p>If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at cst2989@gmail.com. </p>
              <p>At www.mergebraila.ro, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by www.mergebraila.ro and how it is used. </p>
              <p><strong>Log Files</strong></p>
              <p>Like many other Web sites, www.mergebraila.ro makes use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable. </p>
              <p><strong>Cookies and Web Beacons </strong></p>
              <p>www.mergebraila.ro does not use cookies. </p>
              <p><strong>DoubleClick DART Cookie </strong></p>
              <p>.:: Google, as a third party vendor, uses cookies to serve ads on www.mergebraila.ro.</p>
              <p>.:: Google's use of the DART cookie enables it to serve ads to users based on their visit to www.mergebraila.ro and other sites on the Internet. </p>
              <p>.:: Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL - http://www.google.com/privacy_ads.html </p>
              <p>Some of our advertising partners may use cookies and web beacons on our site. Our advertising partners include ....
              Google Adsense</p>
              <p>These third-party ad servers or ad networks use technology to the advertisements and links that appear on www.mergebraila.ro send directly to your browsers. They automatically receive your IP address when this occurs. Other technologies ( such as cookies, JavaScript, or Web Beacons ) may also be used by the third-party ad networks to measure the effectiveness of their advertisements and / or to personalize the advertising content that you see. </p>
              <p>www.mergebraila.ro has no access to or control over these cookies that are used by third-party advertisers. </p>
              <p>You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices. www.mergebraila.ro's privacy policy does not apply to, and we cannot control the activities of, such other advertisers or web sites. </p>
              <p>If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers' respective websites. </p>
              </div>
        </div>
        <Sidebar />
      </div>
    }
});
