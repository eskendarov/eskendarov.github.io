export default function Skills({ technicalSkills, softSkills }) {
    return (
        <div className="skills">
            <h3>Professional Skills</h3>
            <h4>Technical Skills:</h4>
            <ul>
                {technicalSkills.map((skill, index) => {
                    const [skillName, skillDescription] = skill.split(":");
                    return (
                        <li key={skillName + index}>
                            <strong>{skillName}:</strong> {skillDescription}
                        </li>
                    );
                })}
            </ul>
            <h4>Soft Skills:</h4>
            <ul>
                {softSkills.map((skill, index) => (
                    <li key={skill + index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}
