import { education } from "../data";
Education.propTypes = education;

export default function Education({ education }) {
    return (
        <div className="education">
            <h3>Education</h3>
            {education.map((edu, index) => (
                <div key={index}>
                    <h4>
                        <span className="degree course">{edu.degree || edu.course}</span>
                        {" | "}
                        <span className="institution">{edu.institution}</span>
                        {" | "}
                        <span className="location">{edu.location}</span>
                        {" | "}
                        <span className="period">{edu.period}</span>
                    </h4>
                    <ul>{edu.notes}</ul>
                    {index !== education.length - 1 ? <hr /> : undefined}
                </div>
            ))}
        </div>
    );
}
