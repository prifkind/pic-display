import unsplash from "../api/unsplash";
import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query: term,
        },
      }
    );

    this.setState({ images: response.data.results });

    console.log(this.state);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

//comment
