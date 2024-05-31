import axios from 'axios';

const API_BASE_URL = "http://localhost:3000";

export const fetchPages = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/sobre`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching pages:", error);
        throw error;
    }
};

export const fetchCases = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/cases`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching cases:", error);
        throw error;
    }
};

export const postContato = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/contatos`, formData);
        return response.data;
    } catch (error) {
        console.error("Error posting contact form:", error);
        throw error;
    }
};