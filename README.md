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

Before we start - **ALL DATES SHOULD BE JAVASCRIPT OBJECTS** - `new Date("...")`

Go to `src/data.js` script and pass the new object

```javascript
myFooTimeline :  {
  events : [
      [new Date("2017-06-01"), 'Suspendisse rhoncus ege', 'globe'],
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
