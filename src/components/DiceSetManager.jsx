var React = require('react');
var DiceSet = require('./DiceSet.jsx');

var images = {
  "4": "images/d4.png",
  "6": "images/d6.png",
  "8": "images/d8.png",
  "10": "images/d10.png",
  "12": "images/d12.png",
  "20": "images/d20.png"
}

var DiceSetManager = React.createClass({
  getInitialState: function(){
    return({items:[], setName:this.props.setName, showSet:true});
  },
  addDice: function(e){
    var currentItems = this.state.items;
    currentItems.push({sides:e.target.value, image:images[e.target.value]});
    this.setState({items:currentItems});
  },
  clear: function(){
    this.setState({items:[]});
  },
  editTitle: function(e){
    this.setState({setName: e.target.value});
  },
  removeSet: function(e){
    this.setState({showSet:false});
  },
  render: function(){
    if(this.state.showSet){
      return(
        <div className="dice-set">
          <span className="remove-set" onClick={this.removeSet}> X </span>
          <input className="set-title" onChange={this.editTitle} placeholder="Dice Set Name" value={this.state.setName} />
          <div className="btn-group">
            <button className="btn-dice" onClick={this.addDice} value="4"> D4 </button>
            <button className="btn-dice" onClick={this.addDice} value="6"> D6 </button>
            <button className="btn-dice" onClick={this.addDice} value="8"> D8 </button>
            <button className="btn-dice" onClick={this.addDice} value="10"> D10 </button>
            <button className="btn-dice" onClick={this.addDice} value="12"> D12 </button>
            <button className="btn-dice" onClick={this.addDice} value="20"> D20 </button>
            <button className="btn-dice" onClick={this.clear}> Clear </button>
          </div>
          <DiceSet items={this.state.items} />
        </div>
      );
    }
    else{
      return(<span></span>);
    }
  }
});

module.exports = DiceSetManager;
