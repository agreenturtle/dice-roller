var React = require('react');
var SetList = require('./SetList.jsx');

var SetListManager = React.createClass({
  getInitialState: function(){
    return ({sets:[], value:''});
  },
  onChange: function(e){
    this.setState({value:e.target.value});
  },
  createNewDiceSet(e){
    var currentSets = this.state.sets;
    currentSets.push({setName:this.state.value});
    this.setState({sets: currentSets, value:''});
  },
  render: function(){
    return(
      <div>
        <input className="input-set-name" placeholder="Enter Dice Set Name" value={this.state.value} onChange={this.onChange} />
        <button className="btn-create-set" onClick={this.createNewDiceSet}> Add </button>
        <SetList sets={this.state.sets} />
      </div>
    );
  }
});

module.exports = SetListManager;
