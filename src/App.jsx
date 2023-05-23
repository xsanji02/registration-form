import { useState } from "react";
import "./App.css";

function App() {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textarea: "",
    isFriendly: false,
    employment: "",
    favColor: "",
  });
  
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormDetails((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formDetails);
  }
  return (
    <div className="registration">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formDetails.firstName}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formDetails.lastName}
          required
        />
        <input
          type="email"
          placeholder="example@email.com"
          onChange={handleChange}
          name="email"
          value={formDetails.email}
          required
        />
        <textarea
          placeholder="Comments"
          onChange={handleChange}
          name="textarea"
          value={formDetails.textarea}
        />
        <br />
        <input
          type="checkbox"
          id="isFriendly"
          onChange={handleChange}
          name="isFriendly"
          checked={formDetails.isFriendly}
        />
        <label htmlFor="isFriendly" className="friendly">Are you friendly?</label>
        <br />
        <br />
        <fieldset className="fieldset-div">
          <legend>Current employment status</legend>
          <input
            type="radio"
            id="unemployment"
            onChange={handleChange}
            value="unemployment"
            checked={formDetails.employment === "unemployment"}
            name="employment"
          />
          <label htmlFor="unemployment">Unemployed</label>
          <br />
          <input
            type="radio"
            id="part-time"
            onChange={handleChange}
            value="part-time"
            checked={formDetails.employment === "part-time"}
            name="employment"
          />
          <label htmlFor="part-time">Part-time</label>
          <br />
          <input
            type="radio"
            id="full-time"
            onChange={handleChange}
            value="full-time"
            checked={formDetails.employment === "full-time"}
            name="employment"
          />
          <label htmlFor="full-time">Full-time</label>
          <br />
        </fieldset>
        <br />
        <label htmlFor="favColor" className="favColor">Select your favorite color</label>
        <select
          id="favColor"
          onChange={handleChange}
          value={formDetails.favColor}
          name="favColor"
        >
          <option>-- Choose --</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
        </select>
        <br />
        <br />
        <button className="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default App;
