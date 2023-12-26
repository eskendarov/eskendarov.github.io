import { profile } from "../data";
Profile.propTypes = profile;

export default function Profile({ profile }) {
    return (
        <code className="profile">
            <h3>Profile</h3>
            <p>{profile}</p>
        </code>
    );
}
