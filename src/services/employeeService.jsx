import axios from "axios";

//Endpoint creado en el EmployeeController del backend
const API_URL = "https://employee-control-app-backend.onrender.com/api/employee";

export const getAllEmployees = () => axios.get(`${API_URL}/findall`);
export const getEmployeeById = (id) => axios.get(`${API_URL}/find/${id}`);
export const createEmployee = (data) => axios.post(`${API_URL}/create`, data);
export const updateEmployee = (id, data) => axios.put(`${API_URL}/update/${id}`, data);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/delete/${id}`);
