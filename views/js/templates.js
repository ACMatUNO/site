
var NavBar = React.createClass({
  render: function() {
    return (
      <div className = "top_menu">
         <div className = "container">
            <ul className = "pull-left">
               <li><a href="../">Home</a></li>
            </ul>
            <ul className = "pull-right">
               <li><a href="/members">Current Members</a></li>
               <li><a href="#">Login</a></li>
            </ul>
         </div>
      </div>
    );
  }
});

ReactDOM.render(
  <NavBar />,
  document.getElementById('content')
);