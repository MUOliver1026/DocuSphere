import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/documents';

// Fetch all documents
export const fetchDocuments = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || 'Error fetching documents');
  }
};

// Create a new document
export const createDocument = async (title: string, content: string) => {
  try {
    const response = await axios.post(API_BASE_URL, { title, content });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.message || 'Error creating document');
    }
    throw new Error('Error creating document');
  }
};

// Update an existing document
export const updateDocument = async (id: string, title: string, content: string) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, { title, content });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.message || 'Error updating document');
    }
    throw new Error('Error updating document');
  }
};

// Delete a document
export const deleteDocument = async (id: string) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
    return id; // Return the deleted document's ID for UI update
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.message || 'Error deleting document');
    }
    throw new Error('Error deleting document');
  }
};
