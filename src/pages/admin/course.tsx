import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Stack,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { apiFetch } from "../../../api/api.js";

interface CourseType {
  id: number;
  title: string;
  headline?: string;
  subheadline?: string;
  startDate?: string;
  duration?: string;
  language?: string;
  description?: string;
  price: string;
  originalPrice?: string;
  image?: string;
  image_url?: string;
}

interface FormDataType {
  title: string;
  headline: string;
  subheadline: string;
  startDate: string;
  duration: string;
  language: string;
  description: string;
  price: string;
  originalPrice: string;
  image: File | null;
}

const Course = () => {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<CourseType | null>(null);
  const [loading, setLoading] = useState(false);

  // Form fields
  const [formData, setFormData] = useState<FormDataType>({
    title: "",
    headline: "",
    subheadline: "",
    startDate: "",
    duration: "",
    language: "",
    description: "",
    price: "",
    originalPrice: "",
    image: null,
  });
  const [preview, setPreview] = useState<string | null>(null);

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      const data = await apiFetch("/courses");
      setCourses(data || []);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  // Open dialog for adding new course
  const handleAdd = () => {
    setEditMode(false);
    setCurrentCourse(null);
    setFormData({
      title: "",
      headline: "",
      subheadline: "",
      startDate: "",
      duration: "",
      language: "",
      description: "",
      price: "",
      originalPrice: "",
      image: null,
    });
    setPreview(null);
    setOpen(true);
  };

  // Open dialog for editing existing course
  const handleEdit = (course) => {
    setEditMode(true);
    setCurrentCourse(course);
    setFormData({
      title: course.title || "",
      headline: course.headline || "",
      subheadline: course.subheadline || "",
      startDate: course.startDate || "",
      duration: course.duration || "",
      language: course.language || "",
      description: course.description || "",
      price: course.price || "",
      originalPrice: course.originalPrice || "",
      image: null,
    });
    setPreview(course.image_url || null);
    setOpen(true);
  };

  // Handle form submission (Create or Update)
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key as keyof FormDataType] !== null && formData[key as keyof FormDataType] !== "") {
          formDataToSend.append(key, formData[key as keyof FormDataType] as any);
        }
      });

      const url = editMode && currentCourse ? `/courses/${currentCourse.id}` : "/courses";
      const method = editMode ? "PUT" : "POST";

      await apiFetch(url, {
        method,
        body: formDataToSend,
      });

      alert(editMode ? "Course updated successfully!" : "Course created successfully!");
      setOpen(false);
      fetchCourses();
    } catch (error) {
      console.error("Failed to submit:", error);
      alert("Failed to save course.");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await apiFetch(`/courses/${id}`, {
          method: "DELETE",
        });
        alert("Course deleted successfully!");
        fetchCourses();
      } catch (error) {
        console.error("Failed to delete:", error);
        alert("Failed to delete course.");
      }
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" fontWeight={600}>
          Manage Courses
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAdd}
          sx={{ backgroundColor: "#FFC13C", color: "#000", "&:hover": { backgroundColor: "#FFD84D" } }}
        >
          Add Course
        </Button>
      </Box>

      {/* Courses Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell><strong>Image</strong></TableCell>
              <TableCell><strong>Title</strong></TableCell>
              <TableCell><strong>Duration</strong></TableCell>
              <TableCell><strong>Language</strong></TableCell>
              <TableCell><strong>Price</strong></TableCell>
              <TableCell><strong>Start Date</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  <Typography variant="body2" color="text.secondary">
                    No courses available. Add your first course!
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              courses.map((course) => (
                <TableRow key={course.id} hover>
                  <TableCell>
                    <img
                      src={course.image_url || course.image}
                      alt={course.title}
                      style={{ width: 60, height: 40, objectFit: "cover", borderRadius: 4 }}
                    />
                  </TableCell>
                  <TableCell>{course.title}</TableCell>
                  <TableCell>
                    <Chip label={course.duration} size="small" />
                  </TableCell>
                  <TableCell>{course.language}</TableCell>
                  <TableCell>₹{course.price}</TableCell>
                  <TableCell>{course.startDate}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(course)}
                      sx={{ mr: 1 }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(course.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {editMode ? "Edit Course" : "Add New Course"}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <TextField
              label="Course Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              required
            />

            <Stack direction="row" spacing={2}>
              <TextField
                label="Headline"
                name="headline"
                value={formData.headline}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Subheadline"
                name="subheadline"
                value={formData.subheadline}
                onChange={handleChange}
                fullWidth
              />
            </Stack>

            <Stack direction="row" spacing={2}>
              <TextField
                label="Start Date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                fullWidth
                placeholder="e.g., May 23"
              />
              <TextField
                label="Duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                fullWidth
                placeholder="e.g., Ongoing, Self-paced"
              />
            </Stack>

            <TextField
              label="Language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              fullWidth
              placeholder="e.g., Bhakti, Hindi"
            />

            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
            />

            <Stack direction="row" spacing={2}>
              <TextField
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Original Price"
                name="originalPrice"
                type="number"
                value={formData.originalPrice}
                onChange={handleChange}
                fullWidth
              />
            </Stack>

            {/* Image Upload */}
            <Box>
              <Button variant="contained" component="label" sx={{ backgroundColor: "gray" }}>
                Upload Course Image
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </Button>
            </Box>

            {/* Image Preview */}
            {preview && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Preview:
                </Typography>
                <img
                  src={preview}
                  alt="Preview"
                  style={{ width: "100%", maxHeight: 200, objectFit: "contain", borderRadius: 8 }}
                />
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={loading}
            sx={{ backgroundColor: "#FFC13C", color: "#000", "&:hover": { backgroundColor: "#FFD84D" } }}
          >
            {loading ? "Saving..." : editMode ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Course;
