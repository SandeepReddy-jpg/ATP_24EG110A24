import { useForm } from "react-hook-form";
import {
  pageBackground,
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  mutedText,
  linkClass,
  loadingClass,
} from "../styles/common";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const onUserRegister = async (newUser) => {
    const formData = new FormData();
    // Append all text fields
    formData.append("firstName", newUser.firstName);
    formData.append("lastName", newUser.lastName);
    formData.append("email", newUser.email);
    formData.append("password", newUser.password);
    formData.append("role", newUser.role);
    
    // Append the file if selected
    if (newUser.profileImageUrl && newUser.profileImageUrl[0]) {
      formData.append("profileImageUrl", newUser.profileImageUrl[0]);
    }

    try {
      setLoading(true);
      setApiError(null);
      const res = await axios.post(`${BASE_URL}/auth/users`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        toast.success("Registration successful! Please login.");
        navigate("/login");
      }
    } catch (err) {
      setApiError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className={loadingClass}>Registering....</p>;
  }

  return (
    <div className={`${pageBackground} flex items-center justify-center py-16 px-4`}>
      <div className={formCard}>
        <h2 className={formTitle}>Create Account</h2>

        {apiError && <p className={errorClass}>{apiError}</p>}

        <form onSubmit={handleSubmit(onUserRegister)}>
          {/* First Name */}
          <div className={formGroup}>
            <label className={labelClass}>First Name</label>
            <input
              type="text"
              placeholder="John"
              className={inputClass}
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div className={formGroup}>
            <label className={labelClass}>Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className={inputClass}
              {...register("lastName")}
            />
          </div>

          {/* Email */}
          <div className={formGroup}>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className={inputClass}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className={formGroup}>
            <label className={labelClass}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className={inputClass}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className={errorClass}>{errors.password.message}</p>}
          </div>

          {/* Role */}
          <div className={formGroup}>
            <label className={labelClass}>Select Role</label>
            <div className="flex gap-4 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="USER"
                  className="form-radio"
                  {...register("role", { required: "Please select a role" })}
                  defaultChecked
                />
                <span className="ml-2 text-gray-700">User</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="AUTHOR"
                  className="form-radio"
                  {...register("role", { required: "Please select a role" })}
                />
                <span className="ml-2 text-gray-700">Author</span>
              </label>
            </div>
            {errors.role && <p className={errorClass}>{errors.role.message}</p>}
          </div>

          {/* Profile Image */}
          <div className={formGroup}>
            <label className={labelClass}>Profile Image</label>
            <input
              type="file"
              className={inputClass}
              {...register("profileImageUrl")}
            />
          </div>

          <button type="submit" className={submitBtn}>
            Register
          </button>
        </form>

        <p className={`${mutedText} text-center mt-5`}>
          Already have an account?{" "}
          <NavLink to="/login" className={linkClass}>
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Register;
