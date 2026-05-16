import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setEmployees, setToggle, editEmployee }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  // ✅ Edit case fix
  useEffect(() => {
    if (editEmployee) {
      reset(editEmployee);
    }
  }, [editEmployee, reset]);

  const handleFormSubmit = (data) => {
    if (editEmployee) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.emp_email === editEmployee.emp_email
            ? { ...emp, ...data }
            : emp
        )
      );
    } else {
      setEmployees((prev) => [...prev, data]);
    }

    reset();
    setToggle(false);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-4xl font-semibold text-blue-500">
        {editEmployee ? "Update Employee" : "Add Employee"}
      </h1>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="p-6 gap-4 bg-white rounded-xl flex flex-col w-[40%]"
      >
        <input
          {...register("emp_name", { required: "Name is required" })}
          className="border-2 rounded-xl py-3 px-4"
          placeholder="Name"
        />
        {errors.emp_name && <p className="text-red-500">{errors.emp_name.message}</p>}

        <input
          {...register("emp_email", { required: "Email is required" })}
          className="border-2 rounded-xl py-3 px-4"
          placeholder="Email"
        />
        {errors.emp_email && <p className="text-red-500">{errors.emp_email.message}</p>}

        <input
          {...register("emp_mobile", {
            required: "Mobile is required",
            minLength: { value: 10, message: "Min 10 digits" },
            maxLength: { value: 10, message: "Max 10 digits" },
          })}
          className="border-2 rounded-xl py-3 px-4"
          placeholder="Mobile"
        />
        {errors.emp_mobile && <p className="text-red-500">{errors.emp_mobile.message}</p>}

        <input
          {...register("emp_des", { required: "Designation required" })}
          className="border-2 rounded-xl py-3 px-4"
          placeholder="Designation"
        />
        {errors.emp_des && <p className="text-red-500">{errors.emp_des.message}</p>}

        <div className="flex gap-6">
          <label className="flex gap-2">
            <input
              {...register("emp_role", { required: true })}
              type="radio"
              value="manager"
            />
            Manager
          </label>

          <label className="flex gap-2">
            <input
              {...register("emp_role", { required: true })}
              type="radio"
              value="employee"
            />
            Employee
          </label>
        </div>

        <button
          disabled={!isValid}
          className={`py-3 rounded-xl text-white ${
            isValid ? "bg-green-600" : "bg-gray-400"
          }`}
        >
          {editEmployee ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Form;