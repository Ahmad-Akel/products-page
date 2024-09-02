import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProducts = async () => {
    const response = await apiClient.get('/products');
    return response.data;
};
