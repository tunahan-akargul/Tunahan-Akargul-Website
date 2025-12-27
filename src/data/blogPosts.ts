export interface BlogPost {
    slug: string
    title: string
    date: string
    category: string
    excerpt: string
    tags: string[]
}

export interface CodeLine {
    lineNumber: number
    code: string
    comment?: string
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'docker-connection',
        title: 'How to Connect Your Project to Docker?',
        date: '2024',
        category: 'Development',
        excerpt: 'Learn how to containerize your projects using Docker. A step-by-step guide to getting started with Docker for your development workflow.',
        tags: ['Docker', 'DevOps'],
    },
    {
        slug: 'api-integration',
        title: 'What Is API?',
        date: '2025',
        category: 'Development',
        excerpt: 'Learn what is an API and how it works. A beginner-friendly guide to understanding APIs with a restaurant analogy.',
        tags: ['API', 'Development'],
    }
]

export const dockerPostContent = {
    title: 'How to Connect Your Project to Docker?',

    intro: `Before we dive into commands and setups, it's important to understand what Docker actually is. Docker is a platform that helps developers package applications and their dependencies into a container—a lightweight, portable unit that can run consistently on any system. This means no more "it works on my machine" problems. Whether you're working on a small project or deploying something at scale, Docker gives you a cleaner, more reliable way to build, ship, and run your software.`,

    example: `For example: You have a software company and you hired an employee. You have to set up the project on their computer. This can cause problems. Setting up projects isn't always easy, leading to wasted time and money. But there's Docker! Now you can start the project with one click.`,

    letsStart: `Now that we know what Docker is, let's use it. We'll start by creating a Dockerfile to define how our app should run. Then, we'll build an image and run it as a container. Step by step, you'll see how easy it is to make your project portable and consistent across different environments.`,

    dockerfileCode: [
        { lineNumber: 1, code: 'FROM node:18', comment: 'Uses the official Node.js version 18 image as the base environment.' },
        { lineNumber: 2, code: 'WORKDIR /app', comment: 'Sets the working directory inside the container to /app.' },
        { lineNumber: 3, code: 'COPY . .', comment: 'Copies everything from your project folder into the container\'s /app directory.' },
        { lineNumber: 4, code: 'RUN npm install', comment: 'Installs all project dependencies inside the container.' },
        { lineNumber: 5, code: 'CMD ["npm", "start"]', comment: 'Runs npm start when the container starts—this launches your app.' },
    ] as CodeLine[],

    buildCommand: { lineNumber: 1, code: 'docker build -t my-app .', comment: 'Builds the Docker Image with the build context.' } as CodeLine,

    runCommand: { lineNumber: 1, code: 'docker run -p 3000:3000 my-app', comment: 'Runs the Docker Container.' } as CodeLine,

    composeIntro: `Docker Compose is a tool that lets you manage multi-container Docker applications with ease. Instead of starting each container manually with long docker run commands, you define all your services (like backend, frontend, and database) in a simple docker-compose.yml file. With one command—docker compose up—you can start everything at once. It's especially useful in development, where multiple services need to run together seamlessly.`,

    composeCode: [
        { lineNumber: 1, code: 'version: "3"', comment: 'Specifies the Docker Compose file format version.' },
        { lineNumber: 2, code: 'services:', comment: 'Starts the definition of services (containers) to run.' },
        { lineNumber: 3, code: '  app:', comment: 'Names the service "app" (you can choose any name).' },
        { lineNumber: 4, code: '    build: .', comment: 'Tells Docker to build the image from the current directory.' },
        { lineNumber: 5, code: '    ports:', comment: 'Maps ports between host and container.' },
        { lineNumber: 6, code: '      - "3000:3000"', comment: 'Maps port 3000 of your machine to port 3000 in the container.' },
    ] as CodeLine[],

    composeUpCommand: { lineNumber: 1, code: 'docker compose up --build', comment: 'Builds and starts the services defined in docker-compose.yml.' } as CodeLine,

    composeDownCommand: { lineNumber: 1, code: 'docker compose down', comment: 'Stops and removes the containers defined in docker-compose.yml.' } as CodeLine,
}

export const apiPostContent = {
    title: 'What Is API?',

    intro: `An API (Application Programming Interface) is a set of rules and endpoints that lets two pieces of software talk to each other in a predictable way.`,

    example: `Think of it like a restaurant menu: `,

    letsStart: `Now that we know what Docker is, let's use it. We'll start by creating a Dockerfile to define how our app should run. Then, we'll build an image and run it as a container. Step by step, you'll see how easy it is to make your project portable and consistent across different environments.`,

    dockerfileCode: [
        { lineNumber: 1, code: 'FROM node:18', comment: 'Uses the official Node.js version 18 image as the base environment.' },
        { lineNumber: 2, code: 'WORKDIR /app', comment: 'Sets the working directory inside the container to /app.' },
        { lineNumber: 3, code: 'COPY . .', comment: 'Copies everything from your project folder into the container\'s /app directory.' },
        { lineNumber: 4, code: 'RUN npm install', comment: 'Installs all project dependencies inside the container.' },
        { lineNumber: 5, code: 'CMD ["npm", "start"]', comment: 'Runs npm start when the container starts—this launches your app.' },
    ] as CodeLine[],

    buildCommand: { lineNumber: 1, code: 'docker build -t my-app .', comment: 'Builds the Docker Image with the build context.' } as CodeLine,

    runCommand: { lineNumber: 1, code: 'docker run -p 3000:3000 my-app', comment: 'Runs the Docker Container.' } as CodeLine,

    composeIntro: `Docker Compose is a tool that lets you manage multi-container Docker applications with ease. Instead of starting each container manually with long docker run commands, you define all your services (like backend, frontend, and database) in a simple docker-compose.yml file. With one command—docker compose up—you can start everything at once. It's especially useful in development, where multiple services need to run together seamlessly.`,

    composeCode: [
        { lineNumber: 1, code: 'version: "3"', comment: 'Specifies the Docker Compose file format version.' },
        { lineNumber: 2, code: 'services:', comment: 'Starts the definition of services (containers) to run.' },
        { lineNumber: 3, code: '  app:', comment: 'Names the service "app" (you can choose any name).' },
        { lineNumber: 4, code: '    build: .', comment: 'Tells Docker to build the image from the current directory.' },
        { lineNumber: 5, code: '    ports:', comment: 'Maps ports between host and container.' },
        { lineNumber: 6, code: '      - "3000:3000"', comment: 'Maps port 3000 of your machine to port 3000 in the container.' },
    ] as CodeLine[],

    composeUpCommand: { lineNumber: 1, code: 'docker compose up --build', comment: 'Builds and starts the services defined in docker-compose.yml.' } as CodeLine,

    composeDownCommand: { lineNumber: 1, code: 'docker compose down', comment: 'Stops and removes the containers defined in docker-compose.yml.' } as CodeLine,
}