var React = require('react');

var Dice = React.createClass({
  getInitialState: function(){
    return ({value:''})
  },
  roll: function(){
    var value = Math.floor( (Math.random() * parseInt(this.props.sides) + 1));
    this.setState({value:value});
  },
  render: function(){
    return(
      <div className="box">
        <h3 className="dice-title"> 1D{this.props.sides} <span className="remove-dice">x</span></h3>
        <div className="dice-image">
          <img src={this.props.image}/>
        </div>
        <br />
        <span className="dice-output">Roll: {this.state.value}</span>
      </div>
    );
  }
});

module.exports = Dice;
