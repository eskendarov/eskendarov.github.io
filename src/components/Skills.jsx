export default function Skills({ technicalSkills, softSkills }) {
    return (
        <div className="skills">
            <h3>Professional Skills</h3>
            <strong>Technical Skills:</strong>
            <ul>{technicalSkills}</ul>
            <strong>Soft Skills:</strong>
            <ul>{softSkills}</ul>
        </div>
    );
}
