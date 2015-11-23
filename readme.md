# DOT NET USER GROUP APP
 
## Abstract ##

A simple Angular app created for our .NET user group.  Allows scheduling of events, and managing user group officers.

Events will be managed through the application and stored in Firebase, unless information is provided for meetup.com integration.  If you setup your environment file with meetup.com integration info, the application will automatically sync your current and past meetings with meetup.com.  

## Environment File ##
Application wide settings are stored in the environment file and in-lined into the application through the build process. 

Note: If you specify both the MEETUP_API\_KEY and MEETUP_URL, the application will automatically sync current and past meetings by pulling them from meetup.com.

###PORT
The server port app will run on while developing.

###APPENV
The Application environment used by the build process

###FIREBASE_URL
URL for connecting to your Firebase store

###MEETUP_API\_KEY
API key for meetup.com integration

###MEETUP_URL
The meetup URL for your group

###GMAP_URL
Simple way to integrate google maps without using the API, provide the IFRAME URL for the location that your group meets.  If your meeting location changes, you may need to use a full Google map API integration. 

## To Run ##
Rename the included example enviroment file (env.sample) to .env and change contents to match what you need for your enviroment.

    #Start Server
    npm start
    
    #Develop
    gulp dev

    #Build 
    gulp build --production