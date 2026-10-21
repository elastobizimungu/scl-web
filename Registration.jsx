import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import StudentRegistration from "./registration/StudentRegistration.jsx";
import StaffRegistration from "./registration/StaffRegistration.jsx";
import "./Registration.css";

export default function Registration() {
  return (
    <div className="reg-page">
      <h1>Registration</h1>
      <p>Please choose the type of registration:</p>

      <div className="reg-tabs">
        <NavLink to="/registration/student" className="reg-tab">
          Student Registration
        </NavLink>
        <NavLink to="/registration/staff" className="reg-tab">
          Staff Registration
        </NavLink>
      </div>

      {/* Child routes defined here */}
      <Routes>
        <Route index element={<Navigate to="student" replace />} />
        <Route path="student" element={<StudentRegistration />} />
        <Route path="staff" element={<StaffRegistration />} />
      </Routes>
    </div>
  );
}