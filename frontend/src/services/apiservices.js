import axios from "axios";

const API_URL = "http://localhost:4000/api/checklist";

export const fetchChecklistResults = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data.results);
    return response.data.results;
     // Adjust based on backend response structure
  } catch (error) {
    throw new Error("Error fetching checklist results");
  }
};
