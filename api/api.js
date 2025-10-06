// src/api/api.js

export const apiFetch = async (endpoint, options = {}) => {
  try {
    const baseUrl = "http://localhost:5000/api"; // you can change this later
    const url = `${baseUrl}${endpoint}`;

    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API request failed");
    }

    return response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
