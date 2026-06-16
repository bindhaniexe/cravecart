import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  CssBaseline,
  Container,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../State/Authentication/Action";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Clear field error on user input
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formValues.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formValues.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form values:", formValues);
      dispatch(registerUser({ userData: formValues, navigate }));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography className="text-center" variant="h5">
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Full Name"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
            error={Boolean(errors.fullName)}
            helperText={errors.fullName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
          <Select
            variant="outlined"
            margin="normal"
            fullWidth
            name="role"
            value={formValues.role}
            onChange={handleChange}
            error={Boolean(errors.role)}
          >
            <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
            <MenuItem value="ROLE_RESTAURANT_OWNER">Restaurant Owner</MenuItem>
          </Select>
          {errors.role && (
            <Typography color="error" variant="body2">
              {errors.role}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Register
          </Button>
        </form>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Already have an account?{" "}
          <Button onClick={() => navigate("/account/login")}>Login</Button>
        </Typography>
      </div>
    </Container>
  );
};

export default RegistrationForm;
