import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const JobDetails = () => {

    const {id} = useParams()
    const [job , setJobs] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/job/${id}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    const {deadline , company , _id , title} = job || {}

  return (
    <div>
      <div className='m-10'>
            <h2 className='text-3xl'>job details for {title}</h2>
            <p>apply for: {company}</p>
            <p>deadline: {deadline}</p>
            <Link to={`/job_apply/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    </div>
  )
}

export default JobDetails
