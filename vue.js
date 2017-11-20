var vm  = new Vue({
  el: "#myapp",
  data: {
    lesson_num: null,
    lesson_title: null,
    lessons: [],
    circumference: [10, 7, 5, 3, 3]
  },
  methods: {
    calc_time: function() {
      this.lessons = [];
      for (var i = 0, j = this.circumference.length; i < j; i++) {
        var minute = this.lesson_num * this.circumference[i];
        var hour = Math.floor(minute / 60);
        minute = minute - (hour * 60);
        this.lessons.push({
          info: (i + 1) + "周目",
          time: hour + "時間" + ('00' + minute).slice(-2) + "分"
        })
      }
    }
  }
})
