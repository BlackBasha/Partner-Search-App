WebSite Down Checker
========================================
**Used technology and Libraries:**

- Asp MVC Core 5.0
- Entity framework 5.0
- Autofac 
- Log4net
- Automapper.
- SQL Server
- Angular 8
- Jasmine

**How to start the application:**

Inside the application, I am using EF code first so you have to change the connection string then create the database using the EF command.

The command will create the database with the name TestCase, inside it there are the authentication and authorization tables and the main two Partner, Office which contains the information of the partners and their offices.

**The structure of the app:**

**Entities Project:** Contains the main entities of the application including the identity user.

**DataAccess Project:** contains the repositories and the EF main migrations and context.

**Business Project:** contains the main Services of the entities and the autofac main objects initial config, also the DistanceCalculator class that contains the logic of calculating the distance between two points.


**Core Project:** contains the core classes of the app, which could be used as a core of any application.

Aspect: indicate the tracking of the logging and exception on the method level of the application.

CrossCuttingConcerns: the operations that could be used in all the projects like the logging and the notification. We are here using log4net, and you can find from the configuration that you can write to DB or a file.

DataAccess: contains the base classes for the repository pattern.

Entities: contains that base entity classes.

Utilities: contains the main business rules class that we use inside the services to handle our own business rules inside code.

Interceptors: contains the main interceptors 

Results: contains the base classes that we use to return our data from the controllers, so all the return types will be in standard form.

**InvitationApi project:** is a web API application with the base controllers for uploading the JSON file to be saved to the database also searching the data.

**WebApp:** inside the repository there is also an angular 8 application that contains the main interfaces. there are login components also the main two components upload-partner and filter-partner.


**How the application works:**

After login with the test user name and test password, you with find the main interface to navigate to first uploading the JSON file to be sent to the database after that you can search the partners.
the application contained frontend and backend unit testing and integration tests, for the backend, there is a separate project called testApp and for the frontend, there is a file called partner.service.spec.ts that contains the tests.


**Used Patterns and structure:**

- Repository 
- Aspect-oriented
- IOC
- Centralized logging 
- Code first EF
- unit testing and integration testing

**Notes**:
- All errors and exceptions are logged to a local file and you can find that from the log4net configuration file
- both of the front-end and back-end of the application are using the dependency injection which is why it is extendable and could be extended easily


