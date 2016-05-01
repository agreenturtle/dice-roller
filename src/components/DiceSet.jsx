var React = require('react');
var Dice = require('./Dice.jsx');

var DiceSet = React.createClass({
  getInitialState: function(){
    return ({totalValue:0});
  },
  roll: function(){
    for(var i=0;i<this.props.items.length;i++){
      this.refs["diceItem"+i].roll();
    }
  },
  render: function(){
    var createDice = function(obj, index){
      return(
          <Dice key={obj.sides+index} sides={obj.sides} image={obj.image} ref={"diceItem"+index} />
      );
    }
    return(
      <div>
        <button className="btn-roll" onClick={this.roll}> Roll </button>

        <br />
        {this.props.items.map(createDice)}
      </div>
    );
  }
});

module.exports = DiceSet;
