# Timeline based on Vue 2

## Demo

[https://lukistuki.github.io/vue_timeline/](https://lukistuki.github.io/vue_timeline/)

## Used technologies

* Vue 2
* Momentjs
* Font Awesome
* Normalize.css

## How to install/update

Clone the master repository: `git clone https://github.com/lukistuki/vue_timeline.git myapp`

Go to root directory: `cd myapp`

### For production (if you want to see just a showcase)

Install dependencies: `npm install --production`

Open the: `public/index.html`

### For development mode (if you want to add or edit data/timelines)

Install dependencies: `npm install`

Run the build: `npm run start`

The: `src/*` build will fill the `public/*` directory

## How it works

Data of the timelines and events is stored in the file as a object (in the future it could be for example a database). Next, the data file is bundled with other scripts (that's why Vue has an access to the data). Vue components processes information with the *Moment.js* library and sends output to HTML file.

## How to use

### 1.Adding new data

#### General informations
Before we start - **ALL DATES SHOULD BE JAVASCRIPT OBJECTS** - `new Date("...")`

For **name of the icons** check the list: http://fontawesome.io/icons/

The `events` array consist of 3 element arrays.


The single event array should consist of : `[Javascript Date Object, Event title, Font Awesome icon name]`

Event `Javascript Date Object` should be  **between** startDate and endDate or **equal** startDate/endDate

The `settings` object got 3 properties:

* `startDate` should be the **earliest** date
* `endDate` should be the **latest** date
* `currentDate` should be  **between** startDate and endDate or **equal** startDate/endDate

Note: *If you can't see the timeline or events, you probably passed the wrong date and the application will not display it (e.g. event's date isn't between settings dates, starting date is later then ending date of axis)*.

#### We go to action

Go to `src/data.js` script and pass the new object

```javascript
myFooTimeline :  {
  events : [
      [new Date("2017-06-01"), 'Suspendisse rhoncus ege', 'globe'], // [Javascript Object Date, Title of the event, Font Awesome icon name]
      [new Date("2017-06-02"), 'Sed accumsan sit', 'leaf'],
      [new Date("2017-06-15"), 'Mauris a dictum ut', 'gear'],
      //(...)
  ],
  settings : {
    startDate: new Date("2017-06-01"), // here axis starts
    endDate: new Date("2017-06-30"), // here it's end
    currentDate: Date.now() // you can pass Date.now() to get present day
  }
}
```
### 2. Creating timeline element

Go to `src/index.html` and add the following syntax

```html
<si-timeline source="myFooTimeline"></si-timeline> <!-- the source indicates name of the timeline object in src/data.js -->
```

### 3. Wrapping up

Build the timeline: `npm run start`

That's all

## Author

Łukasz Stukan
