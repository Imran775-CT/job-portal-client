import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import Swal from "sweetalert2";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  // Fetch user's job applications
  //   fetch(`http://localhost:3000/job-application?email=${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setJobs(data))
  //     .catch((err) => console.error(err));
  // }, [user?.email]);
  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`http://localhost:3000/job-application?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
    setJobs(res.data);      // state আপডেট করো
    console.log(res.data);  // চাইলে console এ log করো
  })
  }, [user?.email]); // ✅ dependency array ঠিক

  // Delete a job application
  const deleteApplication = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/job-application/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                // Remove deleted job from UI
                // setJobs(jobs.filter((job) => job._id !== id));
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your application has been deleted.",
                  "success"
                );
              }
            })
            .catch((err) => console.error(err));
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your application is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        My Applications <span className="text-primary">({jobs.length})</span>
      </h2>

      {jobs.length === 0 ? (
        <p className="text-gray-500">You haven’t applied for any jobs yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full border rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th>
                  <label>
                    {" "}
                    <input type="checkbox" className="checkbox" />{" "}
                  </label>
                </th>
                <th className="text-left">Company</th>
                <th className="text-left">Title</th>
                <th className="text-left">Location</th>
                <th className="text-left">Application count</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job._id} className="hover">
                  <td>{index + 1}</td>
                  <td className="flex items-center gap-3 py-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={job.company_logo} alt={job.company_name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company_name}</div>
                    </div>
                  </td>
                  <td>{job.title}</td>
                  <td>{job.location}</td>
                  <td>{job.applicationCount}</td>
                  <td className="text-center">
                    <button
                      onClick={() => deleteApplication(job._id)}
                      className="btn btn-error btn-sm text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyApplications;
