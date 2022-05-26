import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const getPeople = async () => {
            const { data } = await axios.get('/api/csvupload/getallpeople');
            setPeople(data);
        };
        getPeople();
    }, []);

    const deleteAll = async () => {
        await axios.post('/api/csvupload/deleteall');
        setPeople([])
    }
        return (
          <>
            <div className='row'>
                <div className='col-md-6 offset-md-3 mt-5'>
                    <button className='btn btn-danger btn-lg btn-block' onClick={deleteAll}>Delete All</button>
                 </div>
            </div>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {people && people.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                            <td>{p.age}</td>
                            <td>{p.address}</td>
                            <td>{p.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
         </>
        )
}
export default Home;