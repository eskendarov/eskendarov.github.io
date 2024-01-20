export default function Contacts({ contacts, icons }) {
    return (
        <div className="contacts">
            <p>
                <img src={icons.linkedIn} alt="linkedin" />{" "}
                <a href={`https://${contacts.linkedIn}`}>LinkedIn</a>
                {" | "}
                <img src={icons.gitHub} alt="github" />{" "}
                <a href={`https://${contacts.gitHub}`}>GitHub</a>
                {" | "}
                <img src={icons.email} alt="e-mail" />{" "}
                <a href={`mailto:${contacts.email}`}>E-Mail</a>
            </p>
        </div>
    );
}
