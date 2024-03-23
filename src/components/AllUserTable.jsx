import React, {useState,useEffect} from 'react'
import { TableCell, TableRow, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../services/api.js';
import { NavLink } from 'react-router-dom';

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


function AllUserTable() {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        try {
            await deleteUser(id);
            getAllUsers();
        } catch (error) {
            console.log("Error in Delete User",error);
        }
    }

    const getAllUsers = async () => {
        try {
            let response = await getUsers();
            setUsers(response?.data);
        } catch (error) {
            console.log("Error in Delete User",error);   
        }
    }

  return (
    <>
        {users?.map((user) => (
            <TRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                    <Button color="primary" variant="contained" style={{marginRight:10, backgroundColor:"#5897EE"}} component={NavLink} to={`/edit/${user.id}`}>Edit</Button>
                    <Button color="secondary" variant="contained" style={{backgroundColor:"#FC3D39"}} onClick={() => deleteUserData(user.id)}>Delete</Button> 
                </TableCell>
            </TRow>
        ))}
    </>
  );
}

export default AllUserTable