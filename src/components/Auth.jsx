import React, { useState } from "react";
import Login from "./Login";
import PasswordRecovery from "./PasswordRecovery";

function Auth() {
    const [showRecovery, setShowRecovery] = useState(false);

    return (
        <div>
            {showRecovery ? (
                <PasswordRecovery onBackToLogin={() => setShowRecovery(false)} />
            ) : (
                <Login onPasswordRecovery={() => setShowRecovery(true)} />
            )}
        </div>
    );
}

export default Auth;
