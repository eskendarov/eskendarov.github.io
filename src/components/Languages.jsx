export default function Languages({ languages }) {
    return (
        <div className="languages">
            <h3>Languages</h3>
            <ul>
                {languages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
        </div>
    );
}
