import { useState } from 'react';

export const UserValidationForm = () => {

    const [userInfo, setUserInfo] = useState({ firstName: '', lastName: '' })

    const change = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        })
    }

    return (
    <>
        <h1>Capture Votes</h1>
        <h2>User Info</h2>
        <form>
            <div>
                <label htmlFor="first-name-input">First Name</label>
                <input
                type="text"
                id="first-name-input"
                name="firstName"
                value={userInfo.firstName}
                onChange={change}
                />
            </div>
            <div>
                <label htmlFor="last-name-input">Last Name</label>
                <input
                type="text"
                id="last-name-input"
                name="lastName"
                value={userInfo.lastName}
                onChange={change}
                />
            </div>
            <button type="button">
                Submit
            </button>
        </form>
    </>
    );
}