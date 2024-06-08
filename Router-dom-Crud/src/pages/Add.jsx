import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../components/Header'


const Add = () => {
    let data = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    const [record, setRecord] = useState(data);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [status, setStatus] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 1000),
            firstname,
            lastname,
            birthdate,
            gender,
            phone,
            email,
            address,
            city,
            state,
            country,
            status
        };
        let efile = [...record, obj];
        localStorage.setItem('users', JSON.stringify(efile));
        setRecord(efile);
        setFirstname('');
        setLastname('');
        setBirthdate('');
        setGender('');
        setPhone('');
        setEmail('');
        setAddress('');
        setCity('');
        setState('');
        setCountry('');
        setStatus('');
        toast.success('User Added Successfully!');
    };


    return (
        <>
            <Header />

            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto">

                        <form onSubmit={handleSubmit}>
                            <div className="card card-body">

                                {/* Name */}
                                <div className="form-col d-flex justify-content-between align-items-center">

                                    <div className="col-md-6 mb-2">
                                        <label htmlFor="validationCustom01" className='mb-2'>First name</label>
                                        <input type="text" className="form-control" placeholder="First name" onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                                    </div>

                                    <div className="col-md-5 mb-2">
                                        <label htmlFor="validationCustom02" className='mb-2'>Last name</label>
                                        <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setLastname(e.target.value)} value={lastname} />
                                    </div>

                                </div>

                                {/* Birth Date, Gender */}
                                <div className="form-col  d-flex justify-content-between align-items-center">

                                    <div className="col-md-3 mb-2">
                                        <label className='mb-2'>Birth Date</label>
                                        <input type="Date" className="form-control" onChange={(e) => setBirthdate(e.target.value)} value={birthdate} />
                                    </div>

                                    <div className="col-md-6 mb-2">
                                        <label htmlFor="formGroupExampleInput" className='mb-2'>Gender</label>
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="genderOptions"
                                                    value="Male"
                                                    onChange={(e) => setGender(e.target.value)}
                                                    checked={gender === "Male"}
                                                />
                                                <label className="form-check-label" htmlFor="inlineRadio1" >Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="genderOptions"
                                                    value="Female"
                                                    onChange={(e) => setGender(e.target.value)}
                                                    checked={gender === "Female"}
                                                />
                                                <label className="form-check-label" htmlFor="inlineRadio2">Femal</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/*Phone, Email*/}
                                <div className="form-col d-flex justify-content-between align-items-center">

                                    <div className="col-md-5 mb-2">
                                        <label htmlFor="validationCustom01" className='mb-2'>Phone</label>
                                        <input type="tel" className="form-control" placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} value={phone} />
                                    </div>

                                    <div className="col-md-6 mb-2">
                                        <label htmlFor="validationCustom02" className='mb-2'>Email Address</label>
                                        <input type="email" className="form-control" placeholder="Enter your Email Address" onChange={(e) => setEmail(e.target.value)} value={email} />
                                    </div>

                                </div>

                                {/* address */}
                                <div className="form-group mb-2">
                                    <label htmlFor="exampleInputEmail1" className='mb-2'>Mailing Address</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Mailing Address" onChange={(e) => setAddress(e.target.value)} value={address} />
                                </div>

                                {/* ciyt, state */}
                                <div className="form-col d-flex justify-content-between align-items-center">

                                    <div className="col-md-5 mb-2">
                                        <label htmlFor="validationCustom01" className='mb-2'>City</label>
                                        <input type="text" className="form-control" placeholder="Enter your City" onChange={(e) => setCity(e.target.value)} value={city} />
                                    </div>

                                    <div className="col-md-6 mb-2">
                                        <label htmlFor="validationCustom02" className='mb-2'>State</label>
                                        <input type="text" className="form-control" placeholder="Enter your State" onChange={(e) => setState(e.target.value)} value={state} />
                                    </div>

                                </div>

                                {/* Country, Status*/}
                                <div className="form-col  d-flex justify-content-between align-items-center">

                                    <div className="col-md-7 mb-2">
                                        <label htmlFor="validationCustom02" className='mb-2'>Of Which Country are you a Citizen ?</label>
                                        <input type="text" className="form-control" placeholder="Enter Country Name" onChange={(e) => setCountry(e.target.value)} value={country} />
                                    </div>

                                    <div className="col-md-4 mb-2">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Select Job Status</label>
                                        <select onChange={(e) => setStatus(e.target.value)} value={status} className='form-control'>
                                            <option>---Select Status---</option>
                                            <option value="Active">Active</option>
                                            <option value="Unactive">Unactive</option>
                                        </select>
                                    </div>

                                </div>

                                {/* Submit Button */}
                                <div className='d-flex justify-content-end'>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Add
