git 06b - Tracker.autorun(() !!Meteor.userId() 

GOALS

Understand the utilization and implementation of:

    - main.jsx
        - use Tracker.autorun to track if user is logged in
        - going to watch meteor.userId: if it is null -> logged out
        - docs: https://docs.meteor.com/api/tracker.html#Tracker-autorun
    





RESET MONGO
    In the terminal
        - meteor reset


Stop runaway node/mongo on windows (aka - you forgot ctrl c)

taskkill /f /im mongod.exe
taskkill /f /im node.exe