import { useState } from "react";
import "../Registration.css";

export default function StaffRegistration() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    department: "",
    role: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Staff registered:", form);
    setSubmitted(true);
    setForm({
      fname: "",
      lname: "",
      email: "",
      department: "",
      role: "",
      password: "",
    });
  };

  return (
    <div className="reg-form-wrap">
      <h2>Staff Registration</h2>

      {submitted && <p className="reg-success">Staff registered successfully!</p>}

      <form className="reg-form" onSubmit={handleSubmit}>
        <label htmlFor="t-fname">First Name</label>
        <input
          type="text"
          id="t-fname"
          name="fname"
          value={form.fname}
          onChange={handleChange}
          required
        />

        <label htmlFor="t-lname">Last Name</label>
        <input
          type="text"
          id="t-lname"
          name="lname"
          value={form.lname}
          onChange={handleChange}
          required
        />

        <label htmlFor="t-email">Email</label>
        <input
          type="email"
          id="t-email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="t-department">Department</label>
        <select
          id="t-department"
          name="department"
          value={form.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department </option>
          <option value="admin">Administration</option>
          <option value="teaching">Teaching</option>
          <option value="finance">Finance</option>
          <option value="library">Library</option>
        </select>

       
        <button type="submit">Register as Staff</button>
      </form>
    </div>
  );
}