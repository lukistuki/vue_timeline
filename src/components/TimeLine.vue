<template>
    <section class="timeline">
      <ol class="axis">
        <si-event v-for="event in timeline.events" :date="event[0]" :name="event[1]" :icon="event[2]" :numberOfDays="numberOfDays" :time-stamps="timeStamps"></si-event>
      </ol>
      <div class="progress-bar" :style="progress()"></div>
    </section>
</template>

<script>
    export default {
      props: ['source'],
      data(){
        return{
            timeline : {}
        }
      },

      methods: {
        //Calculate width of progress bar element
        progress(){
          let progressBarDaysSinceStart = this.timeStamps.currentDate.diff(this.timeStamps.startDate, 'days');
          let timelineDaysNumber = this.numberOfDays;

          let calculatedWidth = progressBarDaysSinceStart / timelineDaysNumber * 90; // 90% axis width
          return {
            width: 'calc(' + calculatedWidth + '% - 8px)' // -8px = correction of progress bar
          }
        },
        //This is generic momentjs function that allows you to use it in Vue component
        moment(...args) {
            return moment(...args);
        }
      },

      computed: {
        //Return settings dates as momentjs object
        timeStamps(){
          return {
            startDate: moment(this.timeline.settings.startDate),
            endDate: moment(this.timeline.settings.endDate),
            currentDate: moment(this.timeline.settings.currentDate)
          }
        },

        //Return days number of timeline
        numberOfDays(){
          return this.timeStamps.endDate.diff(this.timeStamps.startDate, 'days');
        }
      },

      created() {
        //Fetch the data from data.js file based on @source param of html element
        this.timeline = timelines[this.source];
      }
    }
</script>
