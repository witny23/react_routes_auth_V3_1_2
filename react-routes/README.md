git 03a - state hook: signup form / error

GOALS

Understand the utilization and implementation of:

    Using the State Hook
        - https://reactjs.org/docs/hooks-state.html
        - Docs: 
        - W3C: https://www.w3schools.com/react/react_usestate.asp
        - useState accepts an initial state and returns two values:
            - The current state.
            - A function that updates the state.

            const [error, setError] = useState('');
            The first value, error, is our current state.
            The second value, setError, is the function that is used to update our state.
                These names are variables that can be named anything you would like.
            Lastly, we set the initial state to an empty string: useState('') but it could have been anything
    
    React Forms
        - W3C: https://www.w3schools.com/react/react_forms.asp
    
    ternary operator
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator





Stop runaway node/mongo on windows (aka - you forgot ctrl c)

taskkill /f /im mongod.exe
taskkill /f /im node.exe