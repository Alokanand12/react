import React from "react";

const EmployeeCard = ({
  employee,
  setToggle,
  setEditEmployee,
  handleRemove,
}) => {
  return (
    <div className="w-[25%] bg-white h-[80%] p-4 flex flex-col gap-4 rounded-xl border border-gray-400">
      
      <div className="w-full flex justify-center">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-2 text-lg">
        <h1>Name: {employee.emp_name}</h1>
        <h1>Email: {employee.emp_email}</h1>
        <h1>Mobile: {employee.emp_mobile}</h1>
        <h1>Designation: {employee.emp_des}</h1>
        <h1>Role: {employee.emp_role}</h1>
      </div>

      <div className="flex gap-4 mt-auto">
        <button
          onClick={() => {
            setEditEmployee(employee);
            setToggle(true);
          }}
          className="w-full py-2 rounded-xl bg-yellow-500 text-white"
        >
          Update
        </button>

        <button
          onClick={() => handleRemove(employee.emp_email)}
          className="w-full py-2 rounded-xl bg-red-600 text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;