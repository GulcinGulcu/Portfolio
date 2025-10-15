import movieApp from "./Assets/movie_finder.jpg";
import memoryGame from "./Assets/memory_game.jpg";
import tailwind from "./Assets/tailwind_css.jpg";
import recipeApp from "./Assets/recipe_app.jpg";
import teacherApp from "./Assets/teacher_app.jpg";
import ticTacToe from "./Assets/Tic_tac_toe.jpg";
import quizApp from "./Assets/Quiz_app.jpg";
import productStore from "./Assets/product-store.png";
import figmaDesign from "./Assets/lablab_figmahero.png";
import lingoImg from "./Assets/lng.png";
import walletHome from "./Assets/wallet3.jpg";
import walletCreate from "./Assets/wallet6.jpg";
import walletSignIn from "./Assets/wallet1.jpg";
import walletSignUp from "./Assets/wallet5.jpg"

export const projectsData = [
  {
    id: "9",
    image: productStore,
    title: "Fullstack Product Store",
    subtitle: "Live single-domain e-commerce demo",
    link: "https://ecommerce-ea93.onrender.com",
    summary:
      "Single-domain deployment (UI + API) with clean /api routing and production build scripts with Next.js, Express, MongoDB, Zustand, Chakra UI. CRUD product flows via REST endpoints backed by MongoDB; predictable data model and validations. Responsive, accessible UI using Chakra (dialogs, forms, keyboard/focus states). Production-readiness: environment variables and error handling.",
  },
  {
    id: "1",
    image: teacherApp,
    title: "Teachers' Platform App",
    subtitle: "Assistant for teachers",
    link: "https://teachers-app-flax.vercel.app/",
    summary:
      "The educational web app serves as a dynamic platform for teachers utilizing ReactJS for a responsive and interactive user interface and Redux for the state management of the application. It assists teachers with a bunch of functionalities in terms of showing report about work, sharing announcements or assignments, using the instant whiteboard, creating classroom and reaching students’ detailed information. Leveraging the Youtube API, the platform allows teachers to search and reach videos of lesson in subjects. The app imitates register, log in and log out features so the menu items are auth-required.",
  },
  {
    id: "2",
    image: recipeApp,
    title: "Recipe App",
    subtitle: "Find recipes",
    link: "https://recipe-app-eight-beta.vercel.app",
    summary:
      "Colorful and vivid recipe platform that is built with TypeScript serves as recipe finding website that you can search for recipes and display ingredients and instructions. The app uses recipe database, get and post(imitates) methods of fetch API. Application's state is managed with Context API. With the settings page username can be updated.",
  },
  {
    id: "3",
    image: figmaDesign,
    title: "High Quality Home Page",
    subtitle: "Figma Proto",
    link: "https://www.figma.com/proto/ANqeOrf9XYEpI1AMwFhh4h/LablabNext?node-id=3-5&t=6zIfdLRJNcHBMQAP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    summary:
      "A high quality homepage design in Figma that reflected the brand's identity and setting a strong visual direction for the website.",
  },
  {
    id: "4",
    image: movieApp,
    title: "Movie Application",
    subtitle: "Click and Flip",
    link: "https://chipper-tanuki-120da0.netlify.app",
    summary:
      "Built with JS, the app serves as a movie finder using the movie database. App provides three search options. Movies can be found by actor's name, genre or year. Details of the movie can be found on the back of the movie poster by clicking.",
  },
  {
    id: "5",
    image: tailwind,
    title: "Table with Tailwind CSS",
    subtitle: "Using JSON placeholder",
    link: "https://tailwind-css-tawny.vercel.app/",
    summary: "",
  },
  {
    id: "6",
    image: quizApp,
    title: "Quiz Application",
    subtitle: "with new questions",
    link: "https://quiz-app-one-woad-37.vercel.app",
    summary:
      "Built with ReactJS, the app serves as a fun quiz game using the open Trivia Database. After asnwering the questions you can see your score, right and wrong answers.",
  },
  {
    id: "7",
    image: memoryGame,
    title: "Memory Game",
    subtitle: "Flipping the cards",
    link: "https://memory-game-gl.netlify.app",
    summary: "",
  },
  {
    id: "8",
    image: ticTacToe,
    title: "Tic-Tac-Toe Game",
    subtitle: "Can you win this?",
    link: "https://tic-tac-toe-glcn.netlify.app",
    summary:
      "The aim of the project is improving JS algorithm skills by creating computer play function. Computer can make defense and win if conditions are suitable.",
  },
];

export const noteworthyProjectsData = [
  // {
  //   id: "1",
  //   image: [ lingoImg ],
  //   link: "https://drive.google.com/file/d/1LqGIXWXTa7ncMQEa-9l3tDphqAOFfMhh/view",
  //   title: "Connect & Practice — Your Global Language Partner Platform",
  //   description:
  //     "It is a fullstack appliction designed to connect people from around the world, helping them find language partners and practice their language skills in real time. Whether you're learning a new language or polishing your fluency, this app gives you a safe, social, and interactive space to grow together.",
  //   bullets: [
  //     "Seamless login and signup with JWT-based authentication and protected routes backed by MongoDB.",
  //     "Send and receive friend requests through a clean API, making it easy to build your global language network.",
  //     "Practice languages with your partners instantly through real-time messaging and video calling powered by Stream SDK.",
  //     "Beautiful, accessible interface with Tailwind CSS and Daisy UI, including customizable themes for a personalized experience.",
  //     "Efficient data fetching and caching using TanStack Query and Axios, plus robust custom React hooks and an API testing suite to ensure smooth performance.",
  //     "Node.js + Express backend integrated with a modern React frontend for a cohesive and production-ready experience.",
  //   ],
  //   sourceCode: "https://github.com/GulcinGulcu/lingo",
  //   deploymentLink: "https://lingo-vn8u.onrender.com/",
  //   isReactNative: false
  // },
  {
    id: "2",
    image: [
      walletHome, walletCreate, walletSignIn, walletSignUp
    ],
    title: "Fullstack Wallet App",
    subtitle: "RN Expense Tracker — React Native + Expo",
    description: "A cross-platform (iOS/Android) expense tracker built with React Native and Expo. It features Clerk authentication with email verification, real-time balance updates, and an Express + Postgres backend—fully deployable with free-tier tooling.",
    bullets: [
      "Cross-platform app built with React Native & Expo.",
      "Authentication via Clerk with signup/login and 6-digit email verification.",
      "Add income/expenses, live balance calculation, and delete transactions.",
      "Pull-to-refresh implemented from scratch for Recent Transactions.",
      "Logout flow for easy account switching.",
      "Express REST API with Neon-hosted Postgres database.",
      "Cloud-deployed backend for mobile access.",
      "Redis-based rate limiting to protect the API.",
    ],
    sourceCode: "https://github.com/GulcinGulcu/wallet",
    isReactNative: true
  },
];
