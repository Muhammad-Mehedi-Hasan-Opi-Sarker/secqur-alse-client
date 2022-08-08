import React, { useEffect, useState } from 'react';

const List = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/list`;
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [])

    return (
        <div className='mb-52 px-12'>
             <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Time of Entry</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(show => <tr>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <a href={show.image}><img src={show.image} alt="Avatar Tailwind CSS Component" /></a>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">{show.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {show.birth}

                                </td>
                                <td>{show.gender}</td>
                                <td>{show.entryDate}</td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;