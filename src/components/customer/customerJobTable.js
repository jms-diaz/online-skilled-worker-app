import React, {useMemo, useState} from 'react';
import {useTable} from "react-table";
import BTable from "react-bootstrap/Table";
import {Button, Modal, Row} from "react-bootstrap";
import {markJobAsComplete} from "../../api/jobs";
import {findWorker} from "../../api/worker";

export default function CustomerJobTable({data}) {

    const columns = useMemo(
        () => [
            {
                Header: 'Job Title',
                accessor: 'jobTitle'
            },
            {
                Header: 'Assigned Worker',
                accessor: 'worker',
                Cell: e => <p style={{cursor: "pointer", textDecoration: "underline"}}>
                    {e.value}
                </p>
            },
            {
                Header: 'Job Description',
                accessor: 'jobDescription'
            },
            {
                Header: 'Job Location',
                accessor: 'jobLocation'
            },
            {
                Header: 'Salary',
                accessor: 'salary'
            },
            {
                Header: 'Job Status',
                accessor: 'completed'
            },
            {
                Header: 'Payment Status',
                accessor: 'status'
            },
            {
                Header: 'Action',
                accessor: 'action',
                Cell: (value) => (
                    <button onClick={() => handleOK(value.row.original)}
                            disabled={(value.row.original.completed === 'Completed') && true}>
                        Mark As Complete
                    </button>
                )
            },

        ],
        []
    )

    // Use the state and functions returned from useTable to build your UI
    const {getTableProps, headerGroups, rows, prepareRow} =
        useTable({
            columns, data,
        });
    const [show, setShow] = useState(false);
    const [workerDetails, setWorkerDetails] = useState();

    const showModal = (row) => {
        setShow(true);
        findWorker(row.worker).then(r => setWorkerDetails(r.data));
    }

    const handleOK = (row) => {
        setShow(false);
        const jobDetails = {
            jobTitle: row.jobTitle,
            workerName: row.worker,
            customerName: sessionStorage.getItem("customerName")
        }
        markJobAsComplete(jobDetails).then(r => {window.location.reload()});
    }

    const handleClose = () => setShow(false);

    // Render the UI for your table
    return (
        <>
            <BTable striped bordered hover {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <>
                            <tr {...row.getRowProps()} onClick={() => showModal(row.original)}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}
                                               style={{whiteSpace: "pre-line"}}>{cell.render("Cell")}</td>
                                })}

                            </tr>
                                {
                                    workerDetails && <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Worker Details</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Row className="align-items-center pb-lg-3">
                                                <p><strong>Name: </strong>{workerDetails.fullName}</p>
                                                <p><strong>Contact Number: </strong>0{workerDetails.contactNumber}</p>
                                                <p><strong>Address: </strong>{workerDetails.address}</p>
                                            </Row>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="primary" onClick={handleClose}>
                                                OK
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                }
                        </>
                    )
                })}
                </tbody>
            </BTable>
        </>
    )
}