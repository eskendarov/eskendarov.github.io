import { skills } from "../data";
Skills.propTypes = skills;

export default function Skills({ skills }) {
    return (
        <div className="skills">
            <h3>Skills</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}
