git 08a - direct logged [in, out] users to correct page

GOALS

Understand the utilization and implementation of:

    - main.jsx
        - element={<PublicRoute><Login /></PublicRoute>}
            - Run Login component through PublicRoute to see if user is logged in

    - RouteDecisions.jsx
        - create 2 exports [PrivateRoute, PublicRoute] 
            that will check if user is logged in and redirect as needed


    - PersonalPlace.jsx
        - move the following to RouteDecisions.jsx
            - check if the user has correctly loggin in. if so, send them to personalPlace

    - Login.jsx, Signup.jsx
        - clean up comments

    React Navigate
        - A <Navigate> element changes the current location when it is rendered.
        - docs: https://reactrouter.com/docs/en/v6/api#navigate



RESET MONGO
    In the terminal
        - meteor reset


Stop runaway node/mongo on windows (aka - you forgot ctrl c)

taskkill /f /im mongod.exe
taskkill /f /im node.exe