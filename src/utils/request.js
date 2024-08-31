import axios from 'axios';

// Tạo instance của axios với baseURL
export const request = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_API}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Thêm interceptor cho yêu cầu
request.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('ACCESS_TOKEN');
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Thêm interceptor cho phản hồi (nếu cần)
request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);
