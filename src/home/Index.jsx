import React from 'react';
import { accountService } from '@/_services';

function Home() {
    const user = accountService.userValue;
    
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {user.firstName}!</h1>
                <p><i>Wondering!!</i>, Why choose <b>DECENTRALIZED SYSTEM</b> over <b>CENTRALIZED STORAGE</b>?</p>
                <p>Here are few points to consider: </p>
                <ul>
                    <li>Greater Security and Privacy</li>
                    <li>Faster Speeds</li>
                    <li>Low Storage Costs</li>
                    <li>Minimal File Loss</li>
                    </ul>
            </div>
        </div>
    );
}

export { Home };