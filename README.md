# Meme Generator - An interactive web app from [Scrimba](https://scrimba.com/home)

This my solution to the project Meme Generator from [Scrimba](https://scrimba.com/home).
Besides Header, all the other styles are designed followed by the figma design [here](https://www.figma.com/design/MoLwFPHNHJVrzdFurxHzNV/Meme-Generator?node-id=0-1&node-type=canvas&t=bhy96hFJ5BQ4YoEC-0)

### Skills required
- Controlled components
- Fetch data / call API
- side effects in React
- Understanding of Funcitonal Programming in React

### My thought process
1. create all the components that are needed (In this case, only <Header /> and <Main /> are needed)
2. set up Header component and style it accordingly
3. set up Main component and style it with hard-coded data
4. Fetch API from [imgflip](https://imgflip.com/api) to get the 100 most popular memes and update the meme image
   - To prevent from React keeps re-rendering, I use [] empty dependencies array <br> as the second parameter of the useEffect hook
   - Since there's no shared data, I keep all the states & functions in Main component

# Links

- Live demo [@Netlify](https://shiny-sorbet-7ef2df.netlify.app/)
- Github [Repository](https://github.com/NathanC90/react-meme-generator)

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Made with 🔥 by [NathanC90](https://nathanc90.github.io/)
