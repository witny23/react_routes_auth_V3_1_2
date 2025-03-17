git 04a - Accounts.createUser({email: formData.email, password: formData.password}, ...

GOALS

Understand the utilization and implementation of:

    accounts-password
        - Passwords Docs: https://docs.meteor.com/api/passwords.html
            -  The accounts-password package contains a full system for 
                password-based authentication. In addition to the basic username and password-based sign-in process, it also supports email-based sign-in including address verification and password recovery emails.
        - Accounts.createUser: https://docs.meteor.com/api/passwords.html#Accounts-createUser  
        - Accounts: https://docs.meteor.com/api/accounts.html
        
    
    In imports/ui/Signup.js:
        create new user accounts
        - have meteor do the hard work of creating accounts b/c of its built in capabilities
            in submitForm we call one meteor method and meteor does the rest
            - hash password, communicate with server, manage auth tokens


    Meteor DevTools - (this version is used in the video but it is being replaced)
        - https://chrome.google.com/webstore/detail/meteor-devtools/ippapidnnboiophakmmhkdlchoccbgje
    
    Meteor DevTools Evolved (this is the newer version but not used in the video)
        - https://chromewebstore.google.com/detail/meteor-devtools-evolved/ibniinmoafhgbifjojidlagmggecmpgf?hl=en

INSTALL PROCESS
    In the terminal:
        meteor add accounts-password
            - accounts-password is being added to meteor vs specifically to your project



RESET MONGO
    In the terminal
        - meteor reset



Stop runaway node/mongo on windows (aka - you forgot ctrl c)

taskkill /f /im mongod.exe
taskkill /f /im node.exe