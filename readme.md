# Coalculator: The Carbon Footprint Calculator

The Coalculator is a week-long group project completed by Simon Atkins, Marta Beveridge, Lewis McLean and Alex Lakin in Week 14 of Codeclan's 16-week intensive Software Programming Bootcamp.

## Brief
We created an MVP for our project which included the following:

- A form in which to enter user data (e.g. Car Miles, Train Miles)
- A total carbon footprint calculated by the user input
- A graph showing the breakdown of carbon tonnes compared to the UK average
- Data persistence through using a database

## Extensions

We would have liked to add an additional chart in terms of a piechart breakdown of the user's total carbon footprint but we ran out of time. In future the programme can include more inputs for carbon useage (such as shopping habits, as these make a big impact on an individual's carbon footprint). Another interface can be added to calculate the carbon footprint of a household.

## Planning and Methods
We adopted an Agile methodology with 1-1.5 hour sprints focusing on particular features and functionality, as well as doing daily stand-ups and retrospectives. We took turns in being Scrum Master each day and regularly took turns to drive.

After writing our MVP we created a few wireframes and user journeys so as to provide a decent UX. We drew UML diagrams in order to design and keep track of developments in our programme.

We built this programme from the back end to the front end, starting with our server and routers, using two models (co2.js and calculator.js) and finishing with three front-end views (form_view.js, results_view.js and graph_view.js). We used the PubSub method to send data around our app.

The form view holds the form for user input, the results view holds the users results (i.e. their calculated carbon footprint), and the graph view is nested within the form view.

The graph is generated using HighCharts (https://www.highcharts.com/demo).

## Lessons Learned
We were able to consolidate our learning of vanilla JavaScript and Node.js as well as using API's and data persistence. We worked extremely well as a team, particularly in terms of breaking down our programme into small and manageable chunks and working through these together.

We learned the importance of UML diagrams as we became confused at one point after making a change, in terms of where our data was being sent and where it was being received. In future we will make sure to keep a diagrammatic record of any changes to programme structure.

The code can certainly be refactored and improved and the CSS needs to be made responsive, but all in all it was an extremely positive experience and we are pleased with the result.
