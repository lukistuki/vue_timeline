timelines = {

  // Basic example (from PSD)
  // Based on 30 days (01-06-2015 - 30-06-2015)
  // Current day is 10-07-2015
  // To see this - go public/index.html > <si-timeline source="timeline2"> element

  timeline1 : {
    events : [
        [new Date("2015-06-02"), 'Lorem ipsum dolor sit', 'heart'],
        [new Date("2015-06-11"), 'In hac habitasse sem vestibulum', 'flask'],
        [new Date("2015-06-15"), 'Curabitur eu sem vestibulum', 'gavel'],
        [new Date("2015-06-23"), 'Proin posuere. Vestibulum ante', 'graduation-cap'],
        [new Date("2015-06-30"), 'Cum sociis pos uere', 'trophy'],
    ],
    settings : {
      startDate: new Date("2015-06-01"),
      endDate: new Date("2015-06-30"),
      currentDate: new Date("2015-06-10")
    }
  },

	  // Other example
	  // Based on 3 months (12-06-2017 - 12-09-2017)
	  // Current day is Date.now()
	  // To see this - go public/index.html > <si-timeline source="timeline2"> element

  timeline2 :  {
    events : [
        	[new Date("2017-06-12"), 'Proin dapibus, libero ac', 'globe'],
        	[new Date("2017-07-13"), 'Sed dignissim. Donec rutrum in', 'leaf'],
        	[new Date("2017-08-16"), 'Morbi mauris magna', 'gear'],
        	[new Date("2017-08-20"), 'Praesent elit purus, nec', 'film'],
        	[new Date("2017-09-12"), 'Cras luctus et magnis di', 'gamepad'],
    ],
    settings : {
      startDate: new Date("2017-06-01"),
      endDate: new Date("2017-09-12"),
      currentDate: Date.now()
    }
  },

  // Another one
  // Based on 4 months (01-01-2017 - 30-04-2017)
  // Current day 10-04-2017
  // To see this - go public/index.html > <si-timeline source="timeline3"> element

  timeline3 :  {
    events : [
        [new Date("2017-01-01"), 'Suspendisse rhoncus ege', 'globe'],
        [new Date("2017-02-01"), 'Sed accumsan sit', 'leaf'],
        [new Date("2017-03-01"), 'Mauris a dictum ut', 'gear'],
        [new Date("2017-04-30"), 'Curae, Nullam volutpat, libero', 'gear']
    ],
    settings : {
      startDate: new Date("2017-01-01"),
      endDate: new Date("2017-04-30"),
      currentDate: new Date("2017-04-10")
    }
  }

}
