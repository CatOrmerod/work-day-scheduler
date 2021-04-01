
# work-day-scheduler
A simple calendar application that allows a user to save events for each hour of the day

## The Brief

The HTML and CSS were provided so only minor adjustments were required.  The JS file on the other hand required extensive work.

## Basic features include:

```
    * The current time and day appears at the top of the page
    * A schedule of work day hours is available with text boxes to insert detail, and a save button to save the content for later
    * Once the page loads the hours will color code according to whether they are in the past, present or future
        - Initially this was done with replacing every class every time
        - I then worked on developing a function that would first remove all classes, and then just replace with the appropriate class
        - I also added a setInterval to run every 15 seconds to ensure that it continually updated
    * If there is saved details in the local storage from a previous version, these will populate once the page loads
        - Initially this was done with a rudimentary list of getItem queries
        - I then worked to refine this into a more streamlined function that would call on each hour, and add anything from the storage
    * I also added in a document ready function

```


## Screenshots

The following image shows the web application's appearance and functionality:
![work-day-schedule - all "past"](https://user-images.githubusercontent.com/78625200/112965780-4f359b80-9195-11eb-935e-37d827b7659c.png)


## URL
The webpage can be viewed at the following URL <https://catormerod.github.io/work-day-scheduler/>
<<<<<<< HEAD

The repo can be viewed at the following URL <https://github.com/CatOrmerod/work-day-scheduler/>
=======
>>>>>>> cd4da13337a0ec4725e507bd9d1184485a1c1848
