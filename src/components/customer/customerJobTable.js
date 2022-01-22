import {useEffect, useState} from 'react';
import {useTable} from "react-table";
import BTable from "react-bootstrap/Table";
import {markJobAsComplete} from "../../api/jobs";
import {getCurrentCustomer} from "../../api/customer";

export default function CustomerJobTable({columns, data}) {
    // Use the state and functions returned from useTable to build your UI
    const {getTableProps, headerGroups, rows, prepareRow} = useTable({
        columns,
        data,
    })

    const userArray = JSON.parse(sessionStorage.getItem("user"));
    const userId = userArray.id;

    const [customerName, setCustomerName] = useState("");

    const handleEdit = (row) => {
        const jobDetails = {
            jobTitle: row.values.jobTitle,
            workerName: row.values.worker,
            customerName
        }

        markJobAsComplete(jobDetails)
    }

    useEffect(() => {
        getCurrentCustomer(userId).then(
            r => {
                const data = r.data.customer_temp_id;
                setCustomerName(data.name);
            }
        )
    }, [customerName, userId]);

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
                            <button onClick={() => handleEdit(row)}>Mark as Complete</button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </BTable>
    )
}