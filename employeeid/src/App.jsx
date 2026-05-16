import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import EmployeeCard from "./components/EmployeeCard";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const [employees, setEmployees] = useState([
    {
      emp_name: "Rajat dalal",
      emp_email: "rajat@gmail.com",
      emp_mobile: "1234567890",
      emp_des: "Sweeper",
      emp_role: "employee",
    },
  ]);

  const [editEmployee, setEditEmployee] = useState(null);

  // ✅ REMOVE FUNCTION
  const handleRemove = (email) => {
    setEmployees((prev) => prev.filter((emp) => emp.emp_email !== email));
  };

  return (
    <div className="h-screen p-4">
      <Navbar toggle={toggle} setToggle={setToggle} />

      <div className="h-[90%] px-10 py-4 bg-gray-200">
        {toggle ? (
          <Form
            editEmployee={editEmployee}
            setEmployees={setEmployees}
            setToggle={setToggle}
          />
        ) : (
          <div className="h-full flex gap-4 flex-wrap">
            {employees.map((elem, index) => (
              <EmployeeCard
                key={index}
                employee={elem}
                setToggle={setToggle}
                setEditEmployee={setEditEmployee}
                handleRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;