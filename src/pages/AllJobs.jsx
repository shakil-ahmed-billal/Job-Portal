import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    console.log(jobs)

    return (
        <div className='w-11/12 mx-auto'>
            <div className="">
                <div className="">
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
                                <div className="flex justify-between">
                                                            <Link to={`/job_apply/${job._id}`} className='btn mt-5 rounded-full bg-blue-200 text-black border-none hover:text-white'>Apply Now</Link>
                                                            <Link to={`/job/${job._id}`} className='btn mt-5 rounded-full bg-blue-200 text-black border-none hover:text-white'>Job Details</Link>
                                                            </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllJobs
