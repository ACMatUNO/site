
var NavBar = React.createClass({
  render: function() {
    return (
      <nav className = "navbar navbar-default navbar-fixed-top">
        <div className = "container-fluid" id="navigation">
            <div className ="navbar-header">
              <a className="navbar-brand" href="../"><img src="/img/unoiconsmall.png" /></a>
            </div>
            <ul className ="nav navbar-nav navbar-right">
               <li><a href="/events">Events <span className="glyphicon glyphicon-calendar"></span></a></li>
               <li><a href="/members">Current Members <span className="glyphicon glyphicon-user"></span></a></li>
               <li><a href="#">Login <span className="glyphicon glyphicon-log-in"></span></a></li>
            </ul>
        </div>
      </nav>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <div className = "container-fluid text-center" id="footer">
        <div className="row">
          <div className="col-sm-4">
            <p>2000 Lakeshore Drive New Orleans, LA 70148</p>
          </div>
          <div className="col-sm-4">
            <p>acm@cs.uno.edu</p>
          </div>
          <div className="col-sm-4">
            <p>&copy; Copyright ACM UNO 2015</p>
          </div>
        </div>
      </div>
      );
  }
});

ReactDOM.render(
  <NavBar />,
  document.getElementById('content')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);