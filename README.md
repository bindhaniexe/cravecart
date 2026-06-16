# CraveCart

Full-stack food ordering demo application (React frontend + Spring Boot backend).

Repository: https://github.com/bindhaniexe/cravecart

## Overview
- `backend-spring boot/` — Java Spring Boot backend (Maven)
- `frontend-react/` — React frontend (Node)

## Prerequisites
- Java 11+ and Maven (or use included Maven wrapper)
- Node 16+ and npm or yarn

## Run locally
Backend (from project root):

```powershell
cd "backend-spring boot"
./mvnw spring-boot:run    # on Windows use mvnw.cmd
```

Frontend:

```powershell
cd frontend-react
npm install
npm start
```

## Build
- Backend: `./mvnw clean package`
- Frontend: `npm run build` (inside `frontend-react`)

## Contributing
Open issues or submit pull requests. Include steps to reproduce and test data.

## License
Add a `LICENSE` file at the repository root. Choose a license (MIT/Apache-2.0/GPL-3.0).