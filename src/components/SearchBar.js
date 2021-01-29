import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{ marginTop : 20,justifyContent:'center', display: 'flex'}}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              style={{height:40, width:500, fontSize:25}}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;