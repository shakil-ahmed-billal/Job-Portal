import React from 'react'
import { useParams } from 'react-router-dom'
import useAuth from '../hook/useAuth'

const JobApply = () => {

    const {id} = useParams()
    const {user} = useAuth()


    const handleSubmitJob = (e)=>{
        e.preventDefault()
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const application = {
            linkedIn,
            github ,
            resume ,
            jobId: id,
            applicant_email: user.email ,
        }
        
        // store user application data
        fetch('http://localhost:5000/job-application' , {
            method: 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(application)
        }).then(res => res.json())
        .then(data => console.log(data))

    }

    return (
        <div>
            <div className="card bg-base-100 w-full shadow-2xl">
                <h1 className="text-5xl font-bold text-center">Apply Job and Good Luck!</h1>
                <form onSubmit={handleSubmitJob} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn URL</span>
                        </label>
                        <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Github URL</span>
                        </label>
                        <input type="url" name='github' placeholder="Github URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume URL</span>
                        </label>
                        <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default JobApply
