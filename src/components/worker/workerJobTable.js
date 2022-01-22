import React, {useContext, useEffect, useState} from 'react';
import {useTable} from "react-table";
import {markJobAsPaid} from "../../api/jobs";
import BTable from "react-bootstrap/Table";
import {getCurrentWorker} from "../../api/worker";
import {Context} from "../../context/Context";

export default function WorkerJobTable({columns, data}) {
    // Use the state and functions returned from useTable to build your UI
    const {getTableProps, headerGroups, rows, prepareRow} = useTable({
        columns,
        data,
    })

    const {user} = useContext(Context);
    const [workerName, setWorkerName] = useState("");

    useEffect(() => {
        getCurrentWorker(user.id).then(
            r => {
                const data = r.data.worker_temp_id;
                setWorkerName(data.fullName);
            }
        )
    }, []);


    const handleClick = (row) => {
        const jobDetails = {
            jobTitle: row.values.jobTitle,
            customerName: row.values.createdBy,
            workerName

        }
        markJobAsPaid(jobDetails).then(prepareRow(row));
    }

    // Render the UI for your table
    return (
        <BTable striped bordered hover {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>
                            {column.render('Header')}
                        </th>
                    ))}
                    <th>Action</th>
                </tr>
            ))}
            </thead>
            <tbody>
            {rows.map((row, i) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                                <td {...cell.getCellProps()} style={{whiteSpace: "pre-line"}}>
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                        <td>
                            <button onClick={() => handleClick(row)}>Mark as Paid</button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </BTable>
    )
}