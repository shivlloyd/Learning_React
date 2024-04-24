import Chai from "./Chai";

function App() {
  return (
    <>
      <Chai />
      <h1>Chai aur React | Shivam Kumar</h1>
      <p>
        Hello everyone! I'm currently diving into React through the "Chai aur
        React" series by Hitesh Choudhary. Today, I delved into the introductory
        section where I grasped the essence of React as a JavaScript library
        predominantly employed for frontend operations. In the learning
        process,I acquired skills in setting up my environment. Traditionally, I
        followed the method of installing Node.js and initiating my first React
        project using the older approach with `npx create-react-app`. However, I
        also explored the newer method utilizing React Vite (`npm create
        vite@latest`).One significant disparity between the two methods lies in
        their handling of dependencies. While `create-react-app` bundles a
        multitude of Node modules, many of which may not be necessary, leading
        to a bloated project, React Vite refrains from including these modules
        by default. Instead, with React Vite, we can selectively install only
        the essential Node modules using `npm install`, thereby ensuring a
        leaner React project.
      </p>
    </>
  );
}

export default App;
