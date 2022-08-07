import React from 'react';

const Home = () => {
    const handleSubmit = event => {

    }
    return (
        <div className='px-12 mb-7'>
            <form onSubmit={handleSubmit}>

                <div className='grid lg:grid-cols-3 mb-5'>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type You Name"
                            class="input input-bordered w-full max-w-xs" />
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Date Of Birth</span>
                        </label>
                        <input type="date" class="input input-bordered w-full max-w-xs" />
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Gender</span>
                           
                        </label>
                        <select class="select select-bordered">
                            <option disabled selected>Select One</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                       
                    </div>

                    {/* <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div> */}

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Upload photo</span>
                        </label>
                        <input accept="image/*" type="file" placeholder="Type here"
                            class="input input-bordered w-full max-w-xs" />
                    </div>

                </div>

                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Home;