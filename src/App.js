import React from "react";
import axios from "axios";
import photo from "./photo.jpg";
import "./App.css";

class App extends React.Component {
  state = { todos: [] };

  async componentDidMount() {
    let results = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(results);
    await new Promise((x) => setTimeout(x, 1000));
    this.setState({
      todos: results.data,
    });
  }

  render() {
    return (
      <div className="container my-2 bg-light ">
        <div className="row ">
          <div className="d-flex justify-content-center">
            <ul className="list-group ">
              <div>
                {this.state.todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="list-group-item border-0 d-flex justify-content-between  align-items-center"
                  >
                    <div className="col-lg-3 col-md-4 col-sm-5">
                      <img
                        src={photo}
                        className="img-fluid randomImg"
                        alt="myPhoto"
                      />
                    </div>

                    <div className="col-lg-9 col-md-8 col-sm-7 ">
                      <div className="media-body">
                        <h4 className="media-heading">{todo.company.name}</h4>
                        <p className="randomName">{todo.name}</p> -{" "}
                        {todo.company.catchPhrase}
                        <div className="border-bottom mt-2"></div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
