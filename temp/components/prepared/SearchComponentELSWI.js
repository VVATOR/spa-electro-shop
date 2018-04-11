import React from "react";

class SearchComponentELSWI extends React.Component {
  constructor(props){
    
  }

  inputName="";

  onClickGlobalSearch(count) {
    console.log("onClickPaginatorCounter " + count);
  }

  render() {
    return (
      <div className="search-wrapper">
        <form /*action="http://elswi.by/search/index"*/>
          <div className="search">
            <input
              id="searchbar"
              className="text-hint"
              type="text"
              defaultValue="Строка поиска"
              name="query"
              inputRef = {(input) => this.inputName = input }
            />
            <input
              id="searchbtn"
              type="submit"
              defaultValue="Искать"
              onClick={() => this.onClickGlobalSearch(pageSize)}
              
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
