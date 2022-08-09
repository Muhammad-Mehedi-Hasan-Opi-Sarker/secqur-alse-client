import React, { useEffect, useState } from 'react';

const List = () => {
    const [reload, setReload] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")
    const [data, setData] = useState([]);
    useEffect(() => {
        const url = `https://thawing-wave-97755.herokuapp.com/list`;
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [reload])
    // delete for data 
    const handleDelete = id => {
        console.log('delete', id)
        const proceed = window.confirm('Are you sure')
        if (proceed) {
            const url = `https://thawing-wave-97755.herokuapp.com/list/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    setReload(!reload);
                })
        }
    }

    return (
        <div className='mb-52 px-12'>
            <div className='mb-5'>
                <input
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                    className='input w-full max-w-xs border-cyan-800'
                    type="text" name="" id=""
                    placeholder='Type name search..'
                />
            </div>
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
                        {/* search for data show on table  */}
                        {

                        }

                        {/* map show for data  */}
                        {
                            data.filter(val => {
                                if (searchTerm == "") {
                                    return val
                                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val
                                }
                            }).map(show => {
                                return (
                                    <tr>
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
                                        <td>
                                            <button
                                                onClick={() => handleDelete(show._id)}
                                                class="btn btn-circle btn-outline">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;