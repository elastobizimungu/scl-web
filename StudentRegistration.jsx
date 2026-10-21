import { useState } from "react";
import "../Registration.css";

export default function StudentRegistration() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    course: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student registered:", form);
    setSubmitted(true);
    setForm({ fname: "", lname: "", email: "", course: "", password: "" });
  };

  return (
    <div className="reg-form-wrap">
      <h2>Student Registration</h2>

      {submitted && <p className="reg-success">Student registered successfully!</p>}

      <form className="reg-form" onSubmit={handleSubmit}>
        <label htmlFor="s-fname">First Name</label>
        <input
          type="text" id="s-fname" name="fname"
          value={form.fname} onChange={handleChange} required
        />

        <label htmlFor="s-lname">Last Name</label>
        <input
          type="text" id="s-lname" name="lname"
          value={form.lname} onChange={handleChange} required
        />

        <label htmlFor="s-email">Email</label>
        <input
          type="email" id="s-email" name="email"
          value={form.email} onChange={handleChange} required
        />

        <label htmlFor="s-course">Course</label>
        <select
          id="s-course" name="course"
          value={form.course} onChange={handleChange} required
        >
          <option value=""> Select Trade</option>
          <option value="cs">SOD</option>
          <option value="it">MMP</option>
          <option value="eng">BDC</option>
         
        </select>

       

        <button type="submit">Register as Student</button>
      </form>
    </div>
  );
}