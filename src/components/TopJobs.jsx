import React, { useEffect, useState } from 'react'

const TopJobs = () => {


    const [jobs, setJobs] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    /**
        "title": "",
        "location": ",
        "jobType": ",
        "category":",
        "applicationDeadline":",
        "salaryRange": 
        "description": 
        "company": "Favorite IT",
        "requirements": 
        "responsibilities":
        "status": ",
        "hr_email":
        "hr_name": 
        "company_logo":
     */

    return (
        <div>
            <div className="w-11/12 mx-auto">
                <div className="">
                    <h1 className='text-4xl font-bold text-center'>Latest top Jobs section</h1>
                    <p className='text-center my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis exercitationem <br />doloremque fugiat labore ut ex, consequuntur cumque accusamus voluptas.</p>
                </div>
                <div className="grid grid-cols-4 gap-5 my-20">
                    {jobs.map(job => <div key={job._id}>
                        <div className="p-5 border-2 bg-gray-300 text-stone-900">
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    <img className='w-16' src={job.company_logo} alt="" />
                                </div>
                                <div className="">
                                    <p className='text-xl font-bold'>{job.hr_name}</p>
                                    <p className=''>{job.location}</p>
                                </div>
                            </div>
                            <p className='text-lg font-bold my-2'>{job.title}</p>
                            <p>{job.description}</p>
                            <div className="flex flex-wrap my-5 gap-1">
                                {job.requirements.map(req => <p className='bg-gray-100 rounded-full px-2 '>{req}</p>)}
                            </div>
                            <div className="flex justify-between">
                            <p>Salary: ${job.salaryRange.min} to ${job.salaryRange.max}</p>
                            </div>
                            <button className='btn mt-5 rounded-full bg-blue-200 text-black border-none hover:text-white'>Apply Now</button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default TopJobs