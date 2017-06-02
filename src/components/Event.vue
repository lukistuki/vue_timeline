<template>
  <li class="event" :style="setPosition()">
    <div class="point" :class="{ passed: itPassed}" @click="showDescription">
      <i :class="className" aria-hidden="true"></i>
    </div>
    <div class="description" :class="{ active : isActive}">
      <time :datetime="formattedDateTimeAttribute">{{formattedDate}}</time>
      <div class="body">
        {{name}}
      </div>
    </div>
  </li>
</template>

<script>
    export default {
      props: ['date', 'name', 'icon', 'numberOfDays', 'timeStamps'],
      data(){
        return{
          isActive: false,
          itPassed: false
        }
      },

      methods: {
        //Show description box if event point was clicked
        showDescription(){
            this.isActive = !this.isActive;
        },
        //Calculate position of event elements
        setPosition(){
          let eventDaysSinceStart = this.eventDate.diff(this.timeStamps.startDate, 'days');
          let timelineDaysNumber = this.numberOfDays;

          let calculatedPosition = eventDaysSinceStart / timelineDaysNumber * 100 * 0.9 + 5; // 0.9 => 90% widh axis, +5 => per 5% axis side margins
          return {
            left: 'calc('+calculatedPosition + '% - 19px)' // 19px => center the icon on the point
          }
        },
        //This is generic momentjs function that allows you to use it in Vue component
        moment(...args) {
            return moment(...args);
        }
      },

      computed: {
        //Format event date
        formattedDate(){
          return this.eventDate.format('DD.MM.YYYY');
        },
        //Format event date for @datetime attibute
        formattedDateTimeAttribute(){
          return this.eventDate.format('YYYY-MM-DD');
        },
        //Create momentjs object from event date
        eventDate(){
          return moment(this.date);
        },
        //Generate full class name for icon
        className() {
          return 'fa fa-' + this.icon
        },

      },

      created() {
        this.itPassed = this.timeStamps.currentDate.isSameOrAfter(this.eventDate) ? true : false;
      }
    }
</script>
