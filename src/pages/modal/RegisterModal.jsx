import React from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const RegisterModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
     <Box
        sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "630px",
            maxWidth: "90vw",
            p: 0,
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            background: "radial-gradient(#f3a95c, #dc7d4c)", // ✅ Changed to radial gradient
            textAlign: "center",
            overflow: "hidden",
        }}
        >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "#fff",
            background: "#3b1d06",
            width: 36,
            height: 36,
            zIndex: 10,
            "&:hover": {
              background: "#2a1404",
              transform: "scale(1.05)",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>

        {/* Logo */}
        <Box sx={{ pt: 5, pb: 3 }}>
          <img
            src="https://simplevedas.com/wp-content/uploads/2022/03/Simple-Vedas-Registration-page-logo.png"
            alt="Simple Vedas Logo"
            style={{
              width: 200,
              display: "block",
              margin: "0 auto",
            }}
          />
        </Box>

        {/* Form Container */}
        <Box sx={{ px: 8, pb: 6 }}>
          {/* First Name & Last Name Row */}
          <Box sx={{ display: "flex", gap: 2, mb: 2.5 }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ textAlign: "left", mb: 0.5 }}>
                <span style={{ color: "#3b1d06", fontSize: "14px", fontWeight: 600 }}>
                  First Name <span style={{ color: "#d32f2f" }}>*</span>
                </span>
              </Box>
              <TextField
                fullWidth
                placeholder=""
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-root": {
                    height: "50px",
                    fontSize: "15px",
                    "& fieldset": {
                      borderColor: "transparent",
                      borderWidth: 0,
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                      borderWidth: 0,
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "14px 16px",
                  },
                }}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Box sx={{ textAlign: "left", mb: 0.5 }}>
                <span style={{ color: "#3b1d06", fontSize: "14px", fontWeight: 600 }}>
                  Last Name <span style={{ color: "#d32f2f" }}>*</span>
                </span>
              </Box>
              <TextField
                fullWidth
                placeholder=""
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-root": {
                    height: "50px",
                    fontSize: "15px",
                    "& fieldset": {
                      borderColor: "transparent",
                      borderWidth: 0,
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                      borderWidth: 0,
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "14px 16px",
                  },
                }}
              />
            </Box>
          </Box>

          {/* Email */}
          <Box sx={{ mb: 2.5 }}>
            <Box sx={{ textAlign: "left", mb: 0.5 }}>
              <span style={{ color: "#3b1d06", fontSize: "14px", fontWeight: 600 }}>
                Email <span style={{ color: "#d32f2f" }}>*</span>
              </span>
            </Box>
            <TextField
              fullWidth
              type="email"
              placeholder=""
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": {
                  height: "50px",
                  fontSize: "15px",
                  "& fieldset": {
                    borderColor: "transparent",
                    borderWidth: 0,
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                    borderWidth: 0,
                  },
                },
                "& .MuiOutlinedInput-input": {
                  padding: "14px 16px",
                },
              }}
            />
          </Box>

          {/* Select Country & WhatsApp No Row */}
          <Box sx={{ display: "flex", gap: 2, mb: 2.5 }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ textAlign: "left", mb: 0.5 }}>
                <span style={{ color: "#3b1d06", fontSize: "14px", fontWeight: 600 }}>
                  Select Country <span style={{ color: "#d32f2f" }}>*</span>
                </span>
              </Box>
              <Select
                fullWidth
                defaultValue="India +91"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                  height: "50px",
                  fontSize: "15px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              >
                <MenuItem value="India +91">India +91</MenuItem>
                <MenuItem value="USA +1">USA +1</MenuItem>
                <MenuItem value="UK +44">UK +44</MenuItem>
              </Select>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Box sx={{ textAlign: "left", mb: 0.5 }}>
                <span style={{ color: "#3b1d06", fontSize: "14px", fontWeight: 600 }}>
                  Whatsapp No. <span style={{ color: "#d32f2f" }}>*</span>
                </span>
              </Box>
              <TextField
                fullWidth
                placeholder=""
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-root": {
                    height: "50px",
                    fontSize: "15px",
                    "& fieldset": {
                      borderColor: "transparent",
                      borderWidth: 0,
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                      borderWidth: 0,
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "14px 16px",
                  },
                }}
              />
            </Box>
          </Box>

          {/* Password */}
          <Box sx={{ mb: 2.5 }}>
            <Box sx={{ textAlign: "left", mb: 0.5 }}>
              <span style={{ color: "#3b1d06", fontSize: "14px", fontWeight: 600 }}>
                Password <span style={{ color: "#d32f2f" }}>*</span>
              </span>
            </Box>
            <TextField
              fullWidth
              type="password"
              placeholder=""
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": {
                  height: "50px",
                  fontSize: "15px",
                  "& fieldset": {
                    borderColor: "transparent",
                    borderWidth: 0,
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                    borderWidth: 0,
                  },
                },
                "& .MuiOutlinedInput-input": {
                  padding: "14px 16px",
                },
              }}
            />
          </Box>

          {/* Confirm Password */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ textAlign: "left", mb: 0.5 }}>
              <span style={{ color: "#3b1d06", fontSize: "14px", fontWeight: 600 }}>
                Confirm Password <span style={{ color: "#d32f2f" }}>*</span>
              </span>
            </Box>
            <TextField
              fullWidth
              type="password"
              placeholder=""
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": {
                  height: "50px",
                  fontSize: "15px",
                  "& fieldset": {
                    borderColor: "transparent",
                    borderWidth: 0,
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                    borderWidth: 0,
                  },
                },
                "& .MuiOutlinedInput-input": {
                  padding: "14px 16px",
                },
              }}
            />
          </Box>

          {/* reCAPTCHA Placeholder */}
          <Box
            sx={{
              mb: 3,
              backgroundColor: "#f9f9f9",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #d3d3d3",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                border: "2px solid #ccc",
                borderRadius: "3px",
              }}
            />
            <span style={{ fontSize: "14px", color: "#555" }}>I'm not a robot</span>
            <Box sx={{ marginLeft: "auto" }}>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="reCAPTCHA"
                style={{ width: 32, height: 32 }}
              />
            </Box>
          </Box>

          {/* Register Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#3b1d06",
              "&:hover": {
                backgroundColor: "#2a1404",
                transform: "translateY(-1px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              },
              textTransform: "none",
              fontSize: "17px",
              fontWeight: 600,
              py: 1.5,
              borderRadius: "6px",
              color: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              transition: "all 0.2s ease",
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default RegisterModal;