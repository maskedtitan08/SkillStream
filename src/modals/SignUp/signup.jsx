import React, { useState } from 'react';

const SignUp = () => {
    const [signed, setSigned] = useState(false);
    const handleGoogleSignup = () => {
        // Handle Google signup logic (e.g., using Google OAuth for registration)
        setSigned(true);
        console.log('Google signup clicked');
    };

    const handleLinkedInSignup = () => {
        // Handle LinkedIn signup logic (e.g., using LinkedIn OAuth for registration)
        setSigned(true);
        console.log('LinkedIn signup clicked');
        alert('LinkedIn signup clicked');
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <div>
                <form>
                    <div>
                        <label>Username:</label>
                        <input type="text" required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" required />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" required />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>

            </div>
            <button onClick={handleGoogleSignup}>Sign up with Google</button>
            <button onClick={handleLinkedInSignup}>Sign up with LinkedIn</button>


        </div>
    );
};

export default SignUp;
