import unsplash from "../api/unsplash";
import React from "react";
import SearchBar from "./SearchBar";

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
    // .then((res) => {
    //   console.log(res.data.results);
    // });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="ui container" style={{ marginTop: "10px" }}>
//       <SearchBar />
//       Some text
//     </div>
//   );
// };

export default App;
