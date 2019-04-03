
function isWeekend() {
     const todayDate = new Date();
     const day = todayDate.getDay();

     const weekday = {
          0: "weekend",
          1: "weekday",
          2: "weekday",
          3: "weekday",
          4: "weekday",
          5: "weekday",
          6: "weekend"
     };
     console.log(weekday[day]);
}

isWeekend();