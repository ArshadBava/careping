import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getBlogs = () => api.get('/blogs/');
export const getBlogBySlug = (slug) => api.get(`/blogs/${slug}/`);
export const getTestimonials = () => api.get('/testimonials/');

export default api;