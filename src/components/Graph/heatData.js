const generateData = (count, yrange) => {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}

export const data4 = [
  {
    name: 'Monday',
    data: generateData(24, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Tuesday',
    data: generateData(24, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Wednesday',
    data: generateData(24, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Thursday',
    data: generateData(24, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Friday',
    data: generateData(24, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Saturday',
    data: generateData(24, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Sunday',
    data: generateData(24, {
      min: -30,
      max: 55
    })
  }
]

export const data5 = [
  {
    name: 'Week 1',
    data: [
      {
        x: "1",
        y: -5
      },
      {
        x: "2",
        y: 26
      },
      {
        x: "3",
        y: 14
      },
      {
        x: "4",
        y: 52
      },
      {
        x: "5",
        y: 34
      },
      {
        x: "6",
        y: -6
      },
      {
        x: "7",
        y: 23
      }
    ]
  },
  {
    name: 'Week 2',
    data: generateData(7, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Week 3',
    data: generateData(7, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Week 4',
    data: generateData(7, {
      min: -30,
      max: 55
    })
  }
]

export const data6 = [
  {
    name: "Feature 1",
    data: [{
      x: "Monday",
      y: 21
    },
    {
      x: "Tuesday",
      y: 35
    },
    {
      x: "Wednesday",
      y: 3
    },
    {
      x: "Thursday",
      y: 50
    },
    {
      x: "Friday",
      y: 12 
    },
    {
      x: "Saturday",
      y: 27
    },
    {
      x: "Sunday",
      y: 2
    }],
  }
]