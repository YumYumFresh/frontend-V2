# YumYumFresh front end server

This is the frontend app to interface with the [YumYumFresh api](https://github.com/YumYumFresh/YumYumBackend)

# Installation:

requires react 17.0.2

Download repo and run npm install to install all npm package dependencies.

the <geolocation> component makes a call to the [positionstack api](https://positionstack.com/). We put the API key for positionstack in an environment variable named REACT_APP_API_KEY. We only use it in the <geolocation> component

Current hot issue: Fix CSS across site

what we used for front end:
-react
-bootstrap
-google fonts
-react router dom
-animate.css

things to get done:

- fix <br> from all detail farmers market
  -warning on useEffect on market card
- take away hamburger menu
- fix farmers market search input and button
- auto fil farmers market input with zipcode
- state modal five rows with 10

backend url:
http://localhost:3000/states/:name/produces?month=October&lookup_id=32
