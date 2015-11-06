
var NavBar = React.createClass({
  render: function() {
    return (
      <nav className = "navbar navbar-default navbar-fixed-top">
        <div className = "container-fluid" id="navigation">
            <div className ="navbar-header">
              <a className="navbar-brand" href="../"><img src="/img/unoiconsmall.png" /></a>
            </div>
            <ul className ="nav navbar-nav navbar-right">
               <li><a href="/news">Events <span className="glyphicon glyphicon-calendar"></span></a></li>
               <li><a href="/members">Current Members <span className="glyphicon glyphicon-user"></span></a></li>
               <li><a href="#">Login <span className="glyphicon glyphicon-log-in"></span></a></li>
            </ul>
        </div>
      </nav>
    );
  }
});

ReactDOM.render(
  <NavBar />,
  document.getElementById('content')
);