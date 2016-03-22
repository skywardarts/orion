window.IngameScreen = React.createClass({
    getInitialState: function() {
        return {
            showOthers: false,
            currentCharacter: 'tron',
            allCharacters: ['tron', 'ghost'],
        };
    },
  _clickCharacter: function() {
    this.setState({showOthers: !this.state.showOthers});
  },
  _changeCharacter: function(key) {
    this.setState({currentCharacter: key});
    Hackatron.game.player.character.changeSkin(key);
  },
  render: function() {
    var otherElements = null;

    if (this.state.showOthers) {
        var otherCharacters = this.state.allCharacters.slice(0);
        var index = otherCharacters.indexOf(this.state.currentCharacter);
        otherCharacters.splice(index, 1);

        otherElements = <div style={styles.otherCharacterChooser}>
            {otherCharacters.map((key) => {
                return <div style={{width: 32, height: 32, marginBottom: 10, background: 'transparent url(assets/gfx/characters/' + key + '/walkDown-0002.png) no-repeat 0 0'}} onClick={()=>this._changeCharacter(key)}></div>;
            })}
        </div>
    }

    return (
      <div>
        <div style={styles.characterChooser}>
          <div style={{width: 32, height: 32, background: '#01242C url(assets/gfx/characters/' + this.state.currentCharacter + '/walkDown-0002.png) no-repeat 0 0'}} onClick={this._clickCharacter}></div>
          {this.state.showOthers && otherElements}
        </div>
        <div style={styles.botom}>aa</div>
      </div>
    );
  }
});

var styles = {
  botom: {
    position: 'absolute',
    top: 700,
    left: 0,
    width: 960,
    height: 400,
    padding: 5,
    opacity: 0.9,
    background: 'transparent url(assets/ui/bottom.png) no-repeat 0 0'
  },
  characterChooser: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 50,
    padding: 5,
    opacity: 0.9,
    background: '#01242C',
    'backgroundSize': '285% auto',
    border: '2px solid #fff',
    borderRadius: '4px',
    color: '#fff',
    fontFamily: 'Press Start 2P'
  },
  otherCharacterChooser: {
    'backgroundSize': '285% auto',
    color: '#fff',
    padding: '15px 0 0 0',
    fontFamily: 'Press Start 2P'
  }
};
