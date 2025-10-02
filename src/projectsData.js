import movieApp from "./Assests/movie_finder.jpg";
import memoryGame from "./Assests/memory_game.jpg";
import tailwind from "./Assests/tailwind_css.jpg";
import recipeApp from "./Assests/recipe_app.jpg";
import teacherApp from "./Assests/teacher_app.jpg";
import ticTacToe from "./Assests/Tic_tac_toe.jpg";
import quizApp from "./Assests/Quiz_app.jpg";
import productStore from "./Assests/product-store.png";
import figmaDesign from "./Assests/lablab_figmahero.png";

export const projectsData = [
  {
    id: "9",
    image: productStore,
    title: "Fullstack Product Store",
    subtitle:
      "Live single-domain e-commerce demo",
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
