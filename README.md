
# DocuSphere

DocuSphere is a cloud-based document management system designed to facilitate the online creation, storage, sharing, and editing of documents with support for version control and team collaboration. Built with modern technologies such as Vite, React, TypeScript, Tailwind CSS, Firebase, Express.js, and MongoDB, DocuSphere aims to provide a seamless and efficient experience for managing documents in the cloud.

## Features

- **User Authentication:** Secure login and registration using Firebase Authentication.
- **Document Management:** Create, edit, store, and share documents in real-time.
- **Real-Time Collaboration:** Multiple users can work on the same document simultaneously.
- **Version Control:** Track and manage changes to documents.
- **Responsive Design:** Accessible on desktop and mobile devices.

## Tech Stack

- **Frontend:** Vite, React, TypeScript, Tailwind CSS
- **Backend:** Express.js (Node.js framework), Firebase Functions
- **Database:** MongoDB
- **Authentication:** Firebase Authentication
- **CI/CD:** GitHub Actions, Firebase Hosting
- **Other Services:** Firebase Realtime Database or Cloud Firestore, Firebase Storage

## Getting Started

### Prerequisites

- Node.js and npm installed
- A Firebase account
- A MongoDB Atlas account

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/DocuSphere.git
cd DocuSphere
```

2. **Install dependencies**

Navigate to the frontend and backend directories in separate terminal windows and run:

```bash
npm install
```

3. **Configure Firebase**

- Create a new Firebase project through the Firebase console.
- Enable Firebase Authentication and Firestore/Realtime Database.
- Add your Firebase project configuration to your frontend and backend projects.

4. **Configure MongoDB**

- Set up a new cluster on MongoDB Atlas and obtain your connection string.
- Add your MongoDB connection string to the backend project's environment variables.

5. **Run the project**

- **Frontend:**

```bash
cd frontend
npm run dev
```

- **Backend:**

```bash
cd backend
npm start
```

## Deployment

- Configure GitHub Actions for CI/CD to automate deployment to Firebase Hosting.
- Follow the Firebase Hosting documentation to deploy your frontend application.
- Deploy your backend application using a service like Heroku or directly on a VM in cloud providers like Google Cloud or AWS.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Oliver Wu - wuyuanming1998@gmail.com

Project Link: https://github.com/MUOliver1026/DocuSphere

