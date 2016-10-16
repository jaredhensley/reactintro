

// var Hello = React.createClass({
//   render: function () {
//     return (
//       <div>Hello ReactJS Program!</div>
//     )
//   }
// });
//
// ReactDOM.render(<Hello />, document.getElementById('app'));

var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function () {
    console.log(this.props);
    return (
      <div>
        <div> {this.props.age} </div>
        <div> {this.props.name} </div>
      </div>
    )
  }
});

ReactDOM.render(<Hello name="jared" age={30}/>, document.getElementById('app'));
