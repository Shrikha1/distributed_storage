import React from 'react';
import FileUpload from '@/_components/FileUpload';

function Upload() {
    
    return (
        <div className="p-4">
            <div className="container">
                <h1 className="text-center">Upload your files to IPFS.</h1>    
            </div>
        <FileUpload />
        </div>
    );
}

export { Upload };