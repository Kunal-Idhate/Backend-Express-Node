import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [fetchData, setFetchData] = useState([]);
  const loadAlldata = () => {
    axios
      .get("http://localhost:8000/user")
      .then((res) => {
        console.log(res.data);
        setFetchData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmitt = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:8000/user", formData)
      .then((res) => {
        alert("Posted Succesfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadAlldata();
  }, []);
  return (
    <div className="main">
      <div className="form">
        <h1>Admin portal</h1>
        <div>
          <form onSubmit={handleSubmitt}>
            <input
              name="firstname"
              className="input"
              type="text"
              placeholder="Write first name"
              onChange={handleChange}
              required
            />
            <input
              name="lastname"
              className="input"
              type="text"
              onChange={handleChange}
              placeholder="Write Last name"
              required
            />
            <input
              name="email"
              className="input"
              type="text"
              onChange={handleChange}
              placeholder="Write your email"
              required
            />
            <button type="submit">Submit</button>
          </form>
          <br></br>
          <h1>Database records </h1>
          <table>
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>Email</th>
            </tr>
            {fetchData.map((curr, index) => (
              <tr key={index}>
                <td>{curr.firstname}</td>
                <td>{curr.lastname}</td>
                <td>{curr.email}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
