import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { apiFetch } from "../../../api/api.js";

export default function HeaderPage() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch existing data
  useEffect(() => {
    const fetchWelcome = async () => {
      try {
        const data = await apiFetch("/welcome-page"); // GET
        if (data) {
          setTitle(data.title || "");
          setSubTitle(data.sub_title || "");
          setDescription(data.description || "");
          setPreview(data.image_url || null);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchWelcome();
  }, []);

  // Preview uploaded image
  useEffect(() => {
    if (!image) return;
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("sub_title", subTitle);
      formData.append("description", description);
      if (image) formData.append("image", image);

      const response = await apiFetch("/welcome-page", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("API response:", data);
      alert("Submitted successfully!");
    } catch (error) {
      console.error("API error:", error);
      alert("Failed to submit.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        label="Sub Title"
        variant="outlined"
        fullWidth
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)}
      />

      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        maxRows={10}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Image upload row */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          component="label"
          sx={{ backgroundColor: "gray", flex: 1 }}
        >
          Upload Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setImage(e.target.files[0]);
              }
            }}
          />
        </Button>

        {(image || preview) && (
          <Box sx={{ flex: 1 }}>
            <Typography>Preview:</Typography>
            <img
              src={image ? URL.createObjectURL(image) : `http://localhost:5000${preview}`}
              alt="Preview"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Box>
        )}
      </Box>


      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </Box>
  );
}
