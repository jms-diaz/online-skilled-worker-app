import React, {useContext, useEffect, useMemo, useState} from 'react';
import {useTable} from "react-table";
import {markJobAsComplete, markJobAsPaid} from "../../api/jobs";
import BTable from "react-bootstrap/Table";
import {findWorker, getCurrentWorker} from "../../api/worker";
import {Context} from "../../context/Context";
import {Button, Col, Modal, Row} from "react-bootstrap";
import {findCustomer} from "../../api/customer";

export default function WorkerJobTable({data}) {

    const columns = useMemo(
        () => [
            {
                Header: 'Job Title',
                accessor: 'jobTitle'
            },
            {
                Header: 'Created By',
                accessor: 'createdBy',
                Cell: e => <p style={{cursor: "pointer", textDecoration: "underline"}}>
                    {e.value}
                </p>
            },
            {
                Header: 'Description',
                accessor: 'jobDescription'
            },
            {
                Header: 'Location',
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
                            disabled={(value.row.original.status === 'Paid') && true}>
                        Mark As Paid
                    </button>
                )
            },
        ],
        []
    )
    // Use the state and functions returned from useTable to build your UI
    const {getTableProps, headerGroups, rows, prepareRow} = useTable({
        columns,
        data,
    })
    const [show, setShow] = useState(false);
    const [customerDetails, setCustomerDetails] = useState();

    const showModal = (row) => {
        setShow(true);
        findCustomer(row.createdBy).then(r => setCustomerDetails(r.data));
    }

    const handleOK = (row) => {
        setShow(false);
        const jobDetails = {
            jobTitle: row.jobTitle,
            customerName: row.createdBy,
            workerName: sessionStorage.getItem("workerName")
        }
        markJobAsPaid(jobDetails).then(r => {window.location.reload()});
    }

    const handleClose = () => setShow(false);

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
                                return <td {...cell.getCellProps()} style={{whiteSpace: "pre-line"}}>
                                    {cell.render('Cell')}</td>
                            })}
                        </tr>
                        {
                            customerDetails && <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Customer Details</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row className="align-items-center pb-lg-3">
                                        <p><strong>Name: </strong>{customerDetails.name}</p>
                                        <p><strong>Contact Number: </strong>0{customerDetails.contactNumber}</p>
                                        <p><strong>Address: </strong>{customerDetails.address}</p>
                                        <p><strong>Bio: </strong>{customerDetails.bio}</p>

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
    )
}