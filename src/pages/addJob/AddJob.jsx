import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries())
    console.log(initialData);
    const {min, max, currency, ...newJob} = initialData;
    console.log(newJob);
    newJob.salaryRange = {min, max, currency}
    newJob.requrements = newJob.requirements.split('\n');
    newJob.responsibilities = newJob.responsibilities.split('\n')
    console.log(newJob);


    fetch('http://localhost:3000/jobs',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(newJob)
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
          Swal.fire({
            showConfirmButton: false,
            title: "Job Posted Successfully!",
            icon: "success",
            timer: 1500,
          });
          navigate('/myPostedJobs')
    }
  })
     
}

  return (
    <div>
      <h2 className="text-3xl">Post a new job</h2>

      <form onSubmit={handleAddJob} className="card-body">
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select defaultValue="Pick A Job Type" name="jobType" className="select select-ghost w-full max-w-xs" required>
            <option value="">Pick A Job Type</option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
        </div>

        {/* Job Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job field</span>
          </label>
          <select defaultValue='Pick A Job Category' name="jobField" className="select select-ghost w-full max-w-xs" required>
            <option value="">Pick A Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </div>

        {/* Salary Range */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Min</span>
            </label>
            <input
              type="number"
              name="min"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="number"
              name="max"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select
            defaultValue="Currency"
              name="currency"
              className="select select-ghost w-full max-w-xs"
              required
            >
              <option disabled >Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
              <option>EURO</option>
            </select>
          </div>
        </div>

        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            required
            className="textarea textarea-bordered"
            name="description"
            placeholder="Job Description"
          ></textarea>
        </div>

        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>

        {/* Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            required
            className="textarea textarea-bordered"
            name="requirements"
            placeholder="Put each requirement on a new line"
          ></textarea>
        </div>

        {/* Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            required
            className="textarea textarea-bordered"
            name="responsibilities"
            placeholder="Put each responsibility on a new line"
          ></textarea>
        </div>

        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR Name"
            className="input input-bordered"
            required
          />
        </div>

        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            defaultValue={user?.email}
            type="email"
            name="hr_email"
            placeholder="HR Email"
            className="input input-bordered"
            required
          />
        </div>

        {/* Application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered"
            required
          />
        </div>

        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="Company Logo URL"
            className="input input-bordered"
            required
          />
        </div>

        {/* Submit */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddJob;
