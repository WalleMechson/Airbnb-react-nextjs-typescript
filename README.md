<div align="center">
  <br/>
<div class="display: flex; align-items:center; justify-content:center;">
              <img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/Airbnb-Logo.wine.png" style="height: 110px; width: 210px;" /> <h1 style="font-size: 70px;"> Full-Stack Responsive Airbnb clone </h1>
</div>
  <br/>
  <p>
A modern Airbnb clone built with Next.js, React, and Tailwind CSS, featuring TypeScript for type safety. Backend powered by MongoDB, with image storage via Cloudinary. Includes user authentication, property listings, reservations, and a fully responsive UI.
  </p>
<table>
      <tr>
            <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/homepage.PNG" alt="f" width="300"></td>
            <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/house.PNG" alt="10pic" width="300"></td>
            <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/airbnbYourHomeMobile2.PNG" alt="13mobile" width="100"></td>
        </tr>
</table>
  <p>
    <a href="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/WalleMechson/Airbnb-react-nextjs-typescript" alt="contributors" />
    </a>
    <a href="">
      <img src="https://img.shields.io/github/last-commit/WalleMechson/Airbnb-react-nextjs-typescript" alt="last update" />
    </a>
    <a href="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/network/members">
      <img src="https://img.shields.io/github/forks/WalleMechson/Airbnb-react-nextjs-typescript" alt="forks" />
    </a>
    <a href="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/stargazers">
      <img src="https://img.shields.io/github/stars/WalleMechson/Airbnb-react-nextjs-typescript" alt="stars" />
    </a>
    <a href="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/issues/">
      <img src="https://img.shields.io/github/issues/WalleMechson/Airbnb-react-nextjs-typescript" alt="open issues" />
    </a>
  </p>
   
  <h4>
    <a href="#">Demo currently not avaliable because of the cost of third-party tools</a>
    <span> · </span>
    <a href="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/readme.md">Documentation</a>
    <span> · </span>
    <a href="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/issues/">Report Bug</a>
    <span> · </span>
    <a href="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/issues/">Request Feature</a>
  </h4>
</div>

<br/>

## Features

1. **User Authentication & Authorization:**

   - Secure user login and registration using NextAuth, supporting multiple authentication providers.

2. **Property Listings & Management:**

   - Users can list properties, manage bookings, and update details, providing an intuitive UI for hosts.

3. **Real-Time Reservations:**

   - Implemented real-time reservation system with React Query, ensuring a smooth booking process for guests.

4. **Image & File Uploads:**

   - Image and file storage powered by Cloudinary, allowing users to upload and manage property images seamlessly.

5. **Responsive UI:**

   - Fully responsive and mobile-friendly interface built with Tailwind CSS, ensuring optimal user experience on all devices.

6. **Database with MongoDB:**

   - Scalable database structure using MongoDB for efficient data storage and retrieval, tailored to the needs of property and user management.

<br/>

## Installation

- Clone the repository:

  ```bash
  git clone https://github.com/WalleMechson/Airbnb-react-nextjs-typescript
  ```

- Navigate to the project directory:

  ```bash
  cd airbnb-nextjs
  ```

- Install the dependencies:

  ```bash
  npm install
  ```

- Create .env file and setup all the neccessary env variables (Project uses MongoDB, Cloudinary, NextAuth and Github and Google for OAuth)

```
DATABASE_URL=

AUTH_SECRET=
NEXTAUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

- Set up MongoDB and generate/push Prisma models:

  1. Open new terminal and exec `npx prisma generate`
  2. then `npx prisma db push`

<br/>

## Usage

- Start the development server:

  ```bash
  npm run dev
  ```

- Open your browser and visit `http://localhost:3000` to access the application.

<br/>

## :camera: Screenshots
<table>
    <tr>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/airbnbYourHome.PNG" alt="airbnbYourHome" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/airbnbYourHome2.PNG" alt="airbnbYourHome2" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/airbnbYourHomeMobile.PNG" alt="airbnbYourHomeMobile" width="300"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/airbnbYourHome3.PNG" alt="airbnbYourHome3" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/airbnbYourHome4.PNG" alt="airbnbYourHome4" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/airbnbYourHomeMobile2.PNG" alt="airbnbYourHomeMobile2" width="300"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/airbnbYourHome5.PNG" alt="airbnbYourHome5" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/airbnbYourHome6.PNG" alt="airbnbYourHome6" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/airbnbYourHomeMobile3.PNG" alt="airbnbYourHomeMobile3" width="300"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/favorites.PNG" alt="favorites" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/homepage.PNG" alt="favoritesMobile" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/favoritesMobile.PNG" alt="homepage" width="300"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/homepageMobile.PNG" alt="homepageMobile" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/house.PNG" alt="house" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/houseMobile.PNG" alt="houseMobile" width="300"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/login.PNG" alt="login" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/properties.PNG" alt="properties" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/loginMobile.PNG" alt="loginMobile" width="300"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/propertiesMobile.PNG" alt="propertiesMobile" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/reservations.PNG" alt="reservations" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/reservationsMobile.PNG" alt="reservationsMobile" width="300"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/search.PNG" alt="search" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/signup.PNG" alt="signup" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/searchMobile.PNG" alt="searchMobile" width="300"></td>
    </tr>
    <tr>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/signupMobile.PNG" alt="signupMobile" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/trips.PNG" alt="trips" width="300"></td>
        <td><img src="https://github.com/WalleMechson/Airbnb-react-nextjs-typescript/blob/pending/public/Github/tripsMobile.PNG" alt="tripsMobile" width="300"></td>
    </tr>
</table>



<br/>

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes to the new branch.
- Open a pull request back to the main repository, including a description of your changes.
