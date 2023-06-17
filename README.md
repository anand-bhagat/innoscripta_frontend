# News Aggregator Frontend

## Data Sources
Below are the data sources that i have used
- NewsAPI.org
- The New York Times
- The Guardian

## Getting Started
To start this project, follow the steps below:

### Prerequisites
- Docker
- Docker Composer

### Installation

1. Clone the repository to your local machine:
```bash
    git clone https://github.com/anand-bhagat/innoscripta_frontend.git
```

2. Navigate to the project directory:
```bash
    cd innoscripta_frontend
```

3. Open the docker-compose.yml file and replace <BACKEND_URL> with the URL of your backend server. Make sure to include the appropriate protocol (e.g., http:// or https://).
```bash
    version: '1'
    services:
        frontend:
            build:
                context: .
                dockerfile: Dockerfile
            ports:
                - '3000:3000'
            environment:
                - REACT_APP_API_URL=<BACKEND_URL>
            volumes:
                - './frontend:/app'

```

4. Save the changes to the docker-compose.yml file.

### Starting the Application
To start the React application with Docker, run the following command in the project directory:

```bash
    docker-compose -f docker-compose.yml up --build
```

This command will build the Docker image for the React application and start the containers. The application will be accessible at http://localhost:3000 in your web browser.