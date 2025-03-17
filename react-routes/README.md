git 07a - verify authentication with useEffect Hook and errorCallbackObject

GOALS

Understand the utilization and implementation of:

- PersonalPlace.jsx
    - make sure a user is logged in to view this component. If not, send them to login
    - useEffect Hook allows you to perform side effects in your components.
        - docs: https://reactjs.org/docs/hooks-effect.html
        - docs: https://www.w3schools.com/react/react_useeffect.asp

- Login.jsx, Signup.jsx
    - errorCallbackObject
        - docs: https://docs.meteor.com/api/accounts.html#Meteor-loginWithPassword
    - check if the user has correctly loggin in. if so, send them to personalPlace page


- NOT USED but a nice reference just in case
    main.jsx
        - place ternary condition on <Route>
        - use Navigate to redirect non-logged in users to login page
        - use Navigate to redirect logged in users to personalPlace page
            <Route path="/personalPlace" element={!!Meteor.userId() ? <PersonalPlace /> : <Navigate to="/" />} />
        - docs Navigate: https://reactrouter.com/docs/en/v6/api#navigate
        - vid on Navigation to: https://www.youtube.com/watch?v=zCgruoRUxlk




RESET MONGO
    In the terminal
        - meteor reset


Stop runaway node/mongo on windows (aka - you forgot ctrl c)

taskkill /f /im mongod.exe
taskkill /f /im node.exe