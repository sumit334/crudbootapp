import axios from "axios";

const API_URL="https://sumits-crud-app-docker.onrender.com";


export const addUser = async (user) =>{
    try {
        return await axios.post(`${API_URL}/user`, user);
    } catch (error) {
        console.log('Error while calling addUser api ', error);
    }
}


export const getUsers = async (id) =>{
    id = id || '';
    try {
        if(id==='')     return await axios.get(`${API_URL}/users`);
        return await axios.get(`${API_URL}/users/${id}`);
    } catch (error) {
        console.log('Error while calling getUsers api ', error);
    }
}


export const deleteUser = async (id) =>{
    try {
        return await axios.delete(`${API_URL}/user/${id}`);
    } catch (error) {
        console.log('Error while calling deleteUser api ', error);
    }
}


export const editUser = async (id,user) =>{
    try {
        return await axios.put(`${API_URL}/user`, user)
    } catch (error) {
        console.log('Error while calling editUser api ', error);
    }
}