// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["Lê Quang D", "Đoàn Đức B", "Trần Quang A", "Hoàng Công H", "Nguyễn văn A", "Heelo world"],
    datasets: [{
      label: "Score",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [  9821, 8031,  7841,6251, 5312, 4215],
    }],
  },
  options: {
    scales: {
      xAxes: [{

        time: {
          unit: 'score'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 10000,
          
        autoSkip: false
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
