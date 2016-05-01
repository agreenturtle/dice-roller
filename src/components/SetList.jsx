var React = require('react');
var DiceSetManager = require('./DiceSetManager.jsx');

var SetList = React.createClass({
  render: function(){
    var createSets = function(obj, index){
      return (<DiceSetManager key={obj.setName+index} setName={obj.setName} />);
    }
    
    return(
      <div>
        {this.props.sets.map(createSets)}
      </div>
    );
  }
});

module.exports = SetList;
