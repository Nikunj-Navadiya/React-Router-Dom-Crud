import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../components/Header';
import './View.css';
import { useNavigate } from 'react-router-dom';


const View = () => {
    const navigate = useNavigate();

    let data = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    const [record, setRecord] = useState(data);
    const [selectRecords, setSelectRecords] = useState([]);

    // Delete 
    const handleDelete = (id) => {
        const deleteRecords = record.filter(item => item.id !== id);
        setRecord(deleteRecords);
        localStorage.setItem("users", JSON.stringify(deleteRecords));
        toast.error("User deleted successfully!");
    };

    // Handle selection of users for multiple delete
    const handleSelect = (id) => {
        if (selectRecords.includes(id)) {
            setSelectRecords(selectRecords.filter(recordId => recordId !== id));
        } else {
            setSelectRecords([...selectRecords, id]);
        }
    };

    // Delete selected users
    const handleDeleteSelected = () => {
        const deleteRecords = record.filter(item => !selectRecords.includes(item.id));
        setRecord(deleteRecords);
        localStorage.setItem("users", JSON.stringify(deleteRecords));
        toast.error("Selected users deleted successfully!");
        setSelectRecords([]);
    };

    return (
        <>
            <Header />

            <div className="container">

                <div className="row">

                    {record.map((val) => {
                        const { id, firstname, lastname, birthdate, gender, country, phone, email, address, city, state, status } = val;
                        return (
                            <div key={id} className="col-md-4 mb-3">

                                <div className="card" style={{ width: '100%' }}>

                                    <div className="card-body">

                                        <div className="form-col d-flex justify-content-between align-items-center">
                                            <div className="col-md-5 mb-2">
                                                <label htmlFor="validationCustom01">First name</label>
                                                <div className="form-control">{firstname}</div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <label htmlFor="validationCustom01">Last name</label>
                                                <div className="form-control">{lastname}</div>
                                            </div>
                                        </div>

                                        <div className="form-col d-flex justify-content-between align-items-center">
                                            <div className="col-md-5 mb-2">
                                                <label htmlFor="validationCustom01">Birth Date</label>
                                                <div className="form-control">{birthdate}</div>
                                            </div>
                                            <div className="col-md-5 mb-2">
                                                <label htmlFor="validationCustom01">Gender</label>
                                                <div className="form-control">{gender}</div>
                                            </div>
                                        </div>

                                        <div className="form-col d-flex justify-content-between align-items-center">
                                            <div className="col-md-5 mb-2">
                                                <label htmlFor="validationCustom01">Phone</label>
                                                <div className="form-control">{phone}</div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <label htmlFor="validationCustom01">Email</label>
                                                <div className="form-control">{email}</div>
                                            </div>
                                        </div>

                                        <div className="form-group mb-2">
                                            <label htmlFor="validationCustom01">Address</label>
                                            <div className="form-control">{address}</div>
                                        </div>

                                        <div className="form-col d-flex justify-content-between align-items-center">
                                            <div className="col-md-5 mb-2">
                                                <label htmlFor="validationCustom01">City</label>
                                                <div className="form-control">{city}</div>
                                            </div>
                                            <div className="col-md-5 mb-2">
                                                <label htmlFor="validationCustom01">State</label>
                                                <div className="form-control">{state}</div>
                                            </div>
                                        </div>

                                        <div className="form-col d-flex justify-content-between align-items-center">
                                            <div className="col-md-5 mb-4">
                                                <label htmlFor="validationCustom01">Country</label>
                                                <div className="form-control">{country}</div>
                                            </div>
                                            <div className="col-md-5 mb-4">
                                                <label htmlFor="validationCustom01">Job Status</label>
                                                <div> {status === "Active" ? (
                                                    <button className="btn btn-success">{status}</button>
                                                ) : (
                                                    <button className="btn btn-warning">{status}</button>
                                                )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-col d-flex justify-content-between align-items-center">
                                            <div className="col-md-5 form-check">
                                                <input className="form-check-input" type="checkbox" value={id} id={`checkbox-${id}`} onChange={() => handleSelect(id)} checked={selectRecords.includes(id)} />
                                                <label className="form-check-label" htmlFor={`checkbox-${id}`}> Select Delete</label>
                                            </div>
                                            <div className="col-md-6 d-flex justify-content-end">
                                                <button className="btn btn-info" style={{ marginRight: '10px' }} onClick={() => navigate('/edit', { state: val })}>Edit</button>
                                                <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

            <div className="d-flex justify-content-end">
                <button className="btn btn-danger" onClick={handleDeleteSelected} disabled={selectRecords.length === 0}>Delete Selected</button>
            </div>

            <ToastContainer />
        </>
    );
}

export default View;
