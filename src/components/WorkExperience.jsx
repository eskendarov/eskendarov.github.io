import { workExperience } from "../data";
WorkExperience.propTypes = workExperience;

export default function WorkExperience({ workExperience }) {
    return (
        <div className="expirience">
            <h3>Work Experience</h3>
            {workExperience.map((job, index) => (
                <div key={index}>
                    <h4>
                        <span className="position">{job.position}</span>
                        {" | "}
                        <span className="company">{job.company}</span>
                        {" | "}
                        <span className="location">{job.location}</span>
                        {" | "}
                        <span className="period">{job.period}</span>
                    </h4>
                    <ul>
                        {job.responsibilities.map((responsibility, resIndex) => (
                            <li key={resIndex}>{responsibility}</li>
                        ))}
                    </ul>
                    {index !== workExperience.length - 1 ? <hr /> : undefined}
                </div>
            ))}
        </div>
    );
}
