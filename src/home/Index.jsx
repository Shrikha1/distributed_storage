import React from 'react';
import { accountService } from '@/_services';

function Home() {
    const user = accountService.userValue;
    
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {user.firstName}!</h1>
                <p>Upload your File</p>
            </div>
        </div>
    );
}

export { Home };