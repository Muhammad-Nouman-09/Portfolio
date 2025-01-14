import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Paper,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format.")
    .required("Email is required."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Password is required."),
  role: yup.string().required("Role is required."),
});

const signupSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required."),
  email: yup
    .string()
    .email("Invalid email format.")
    .required("Email is required."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Password is required."),
  role: yup.string().required("Role is required."),
});

const SignUpForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const {
    handleSubmit,
    control,
    formState: { errors, touchedFields },
    reset,
  } = useForm({
    resolver: yupResolver(isLoginForm ? loginSchema : signupSchema), // Dynamically switch schema
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    reset();
  };

  const handleFormSwitch = () => {
    reset();
    setIsLoginForm((prev) => !prev);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          Pick Bazar Account
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          {isLoginForm ? (
            <>
              {/* Login Form */}
              <Typography
                variant="h6"
                component="h3"
                align="center"
                gutterBottom
              >
                Login
              </Typography>

              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    error={touchedFields.email && !!errors.email}
                    helperText={touchedFields.email && errors.email?.message}
                    variant="outlined"
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    error={touchedFields.password && !!errors.password}
                    helperText={
                      touchedFields.password && errors.password?.message
                    }
                    variant="outlined"
                  />
                )}
              />

              <FormControl
                fullWidth
                margin="normal"
                error={touchedFields.role && !!errors.role}
              >
                <InputLabel id="login-role-label">Role</InputLabel>
                <Controller
                  name="role"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} labelId="login-role-label" label="Role">
                      <MenuItem value="student">Business Owner</MenuItem>
                      <MenuItem value="teacher">Costomer</MenuItem>
                     
                    </Select>
                  )}
                />
                <Typography variant="body2" color="error">
                  {touchedFields.role && errors.role?.message}
                </Typography>
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
              <Button
                onClick={handleFormSwitch}
                sx={{ mt: 2 }}
                fullWidth
                color="secondary"
              >
                Create new account
              </Button>
            </>
          ) : (
            <>
              {/* Signup Form */}
              <Typography
                variant="h6"
                component="h3"
                align="center"
                gutterBottom
              >
                Signup
              </Typography>

              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Full Name"
                    fullWidth
                    margin="normal"
                    error={touchedFields.fullName && !!errors.fullName}
                    helperText={
                      touchedFields.fullName && errors.fullName?.message
                    }
                    variant="outlined"
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    error={touchedFields.email && !!errors.email}
                    helperText={touchedFields.email && errors.email?.message}
                    variant="outlined"
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    error={touchedFields.password && !!errors.password}
                    helperText={
                      touchedFields.password && errors.password?.message
                    }
                    variant="outlined"
                  />
                )}
              />

              <FormControl
                fullWidth
                margin="normal"
                error={touchedFields.role && !!errors.role}
              >
                <InputLabel id="signup-role-label">Role</InputLabel>
                <Controller
                  name="role"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} labelId="signup-role-label" label="Role">
                      <MenuItem value="student">Business Owner</MenuItem>
                      <MenuItem value="teacher">Costomer</MenuItem>
                      
                    </Select>
                  )}
                />
                <Typography variant="body2" color="error">
                  {touchedFields.role && errors.role?.message}
                </Typography>
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                sx={{ mt: 2 }}
              >
                Signup
              </Button>
              <Button
                onClick={handleFormSwitch}
                sx={{ mt: 2 }}
                fullWidth
                color="secondary"
              >
                Already have an account? Login
              </Button>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUpForm;
