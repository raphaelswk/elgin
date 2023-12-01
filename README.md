# Elgin Energy Order
This project is a simple Order Management System implemented using React for the frontend and .Net Core 6 for the backend.

![image](https://github.com/raphaelswk/elgin/assets/36797153/a3d2f12d-b15b-4027-8945-7ad450612580)


## Table of Contents
- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## About

The Order Management System allows users to manage orders by performing various actions such as adding, modifying, and removing orders.

## Features

- View Order Book: Displays a list of existing orders.
- Add Order: Allows users to add a new order to the system.
- Modify Order: Enables users to modify existing orders.
- Remove Order: Allows users to delete orders from the system.

## Getting Started

### Prerequisites

- [.NET Core 6](https://dotnet.microsoft.com/download/dotnet/6.0)
- [Node.JS Latest LTS Version: 20.10.0](https://nodejs.org/en/download/current)

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/raphaelswk/finbourne.git
cd finbourne
dotnet build
dotnet run --project BE.Presentation.API

cd ../frontend
npm install
npm start

// http://localhost:3000/
// You should be ready to play! 🖖
```

## Technologies Used
- .Net Core 6
- React
- React Router
- Axios
- TypeScript
- Bootstrap (for styling)

## Roadmap

Some of the possible future implementations that can be made on the project:
- Split the backend in multiple layers
- Use a real DB
- Implement Fluent Validation for fields validation
- Implement Automated Tests (Unit, Integration, E2E...)
- Improve UI/UX
- Implement Authentication/Authorization
- Implement DevSecOps pipelines
- Host on an Cloud Environment

## Contributing

Contributions are welcome! If you find any issues or have improvements, feel free to open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ♥ &nbsp;by Raphael Socolowski 👋 &nbsp;[Check out my linkedin](https://www.linkedin.com/in/raphaelswk/)
