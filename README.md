// Mongo DB Setup

1. Install MongoDB.
2. Create a MongoDB config file, it’s just a text file
3. Add this to your MongoDB config file
    ##store data here
    dbpath=D:\mongodb\data

    ##all output go here
    logpath=D:\mongodb\log\mongo.log

4. Run MongoDB from your installed location by using the following command.
   mongod.exe --config d:\mongodb\mongo.config

   Now MongoDB is running fine.

//Setup Project and Dependencies

1. Take the clone of project from GitHub directly or download the project folder.
2. Start the command line or git bash and run the following commands step by step
    a. npm install -g
    b. npm install bower -g
    c. bower install
    this will instal all of the required dependencies of the project.

3. Now the project is setup and ready for launch from the following command
    npm run dev