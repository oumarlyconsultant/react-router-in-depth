import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails(){
    const {id} = useParams()
    const career = useLoaderData()

    return(
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            The details of the job.
        </div>
    )
}