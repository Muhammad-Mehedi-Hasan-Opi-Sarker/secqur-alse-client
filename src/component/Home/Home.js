import { toast } from 'react-toastify';

const Home = () => {
    const imgKey = '452c5f4511f175dd5a83f4dc78d1024a';
    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const oldBirth = event.target.birth.value;
        const gender = event.target.gender.value;
        const jormo = new Date(oldBirth);
        const personAge = jormo.getFullYear()

        const dateObj = new Date();
        let month = dateObj.getMonth() + 1; //months from 1-12
        let day = dateObj.getDate();
        let year = dateObj.getFullYear();
        let entryDate = year + "-" + month + "-" + day;
        // console.log('entry date', entryDate)
        let todayDate = new Date();
        let newYear = todayDate.getFullYear()

        let birth = newYear - personAge;

        const img = event.target.img.files[0];
        event.target.reset();
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const image = data.data.url;
                    const allData = {
                        name: name,
                        birth: birth,
                        gender: gender,
                        entryDate: entryDate,
                        image: image
                    }

                    fetch('https://thawing-wave-97755.herokuapp.com/list', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(allData),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data.insertedId) {
                                toast.success('Data Sent')
                            }
                            else {
                                toast.error('Data Not Sent')
                            }
                        })
                }
            })
    }
    return (
        <div className='px-12 mb-32'>

            <form onSubmit={handleSubmit}>

                <div className='grid lg:grid-cols-3 mb-5'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input required suggetion name='name' type="text" placeholder="Type You Name"
                            className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Date Of Birth</span>
                        </label>
                        <input required name='birth' type="date" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Gender</span>

                        </label>
                        <select name='gender' className="select select-bordered">
                            <option selected>Select One</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>

                    </div>

                    {/* <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div> */}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Upload photo</span>
                        </label>
                        <input required name='img' accept="image/*" type="file" placeholder="Type here"
                            className="input input-bordered w-full max-w-xs" />
                    </div>

                </div>

                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default Home;