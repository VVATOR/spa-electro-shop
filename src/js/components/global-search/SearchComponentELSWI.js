import React from "react";

class SearchComponentELSWI extends React.Component {
  constructor(props){
    super(props);
   // this.props.inputName ="";
  }
  onClickGlobalSearch() {
    console.log("onClickGlobalSearch ");
    console.log(this.inputName.input.value);
  }

  componentDidMount() {
 //   this._input.onClickGlobalSearch();
  }
  render() {
    return (
      <div className="VVAsearch-wrapper">
        <form /*action="http://elswi.by/search/index"*/>
          <div className="search">
            <input
              id="searchbar"
              className="text-hint"
              type="text"
              placeholder="Строка поиска"
              name="query"
              ref={(c) => this._input = c}
             // inputRef = {(input) => this.inputName = input }
            />
            <input
              id="searchbtn"
              type="button"
              defaultValue="Искать"
              onClick={() => this.onClickGlobalSearch()}
              
            />
            <div id="search-close">
              <span />
              <span />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchComponentELSWI;
