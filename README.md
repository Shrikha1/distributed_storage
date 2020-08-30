# Cloud_titan, Digital Ocean Hackathon
## Project Description
Optimized Cloud Storage System Using Decentralized File Storage
An application based on decentralization, where users can upload files, images. The media is stored in chunks in multiple nodes on the network. When the user requests for a certain file, the data is retrieved parallely from these nodes, using IPFS architecture.Using the concept of IPFS this project aims to upload file on IPFS and retrieve back the hash of files.


The technology used to build this project are: -
1. Frontend
    - ReactJS
2. Backend
    - NodeJS
    - ipfs-http-client
3. Database
    - MongoDB

To run the project on local server:
1. clone the git repository
2. Install the dependencies
* run ipfs daemon
* start mongoDB server
* npm install 
* cd backend
* npm install
3. Run the server frontend and backend server concurrently, at [http://localhost:8080]
* npm rum dev