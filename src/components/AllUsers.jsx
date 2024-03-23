import React, { Suspense } from 'react';
import { Table, TableHead, TableCell, TableBody, TableRow, styled } from '@mui/material'


const AllUserTable = React.lazy(()=>import('./AllUserTable.jsx'));

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: gray;
        color: #FFFFFF;
    }
`;

const AllUsers = () => {
    

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>   
            <TableBody>
                <Suspense>
                    <AllUserTable />
                </Suspense>
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;