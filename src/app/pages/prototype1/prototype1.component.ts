import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-prototype1',
  templateUrl: './prototype1.component.html',
  styleUrls: ['./prototype1.component.less']
})
export class Prototype1Component implements OnInit {

  chartEarnings: any;

  constructor() { }

  ngOnInit() {
    const self = this;
    this.chartEarningsOption.xAxis.labels.formatter = function() {
      console.log(this);
      console.log(self);
      if (this.value == 0 || this.value == 5) return '';
      if (this.value % 2 == 1) {
        return '<span style="fill: #787979; font-size: 8px">1/2</span>';
      } else {
        return '<span style="fill: #343434; font-size: 11px">' + self.earningInfo.categories[self.earningInfo.current + this.value / 2] + '</span>';
      }
    }

    this.chartEarnings = new Chart(<any>this.chartEarningsOption);
  }

  payoutInfo = {
    categories: ["Jun 15", "Jul 15", "Aug 15", "Sep 15", "Oct 15", "Nov 15", "Dec 15",
      "Jan 16", "Feb 16", "Mar 16", "Apr 16", "May 16"],
    values1: [1, 2, 3, 0.5, 1.5, 4, 2, 5, 2, 4, 2, 3],
    values2: [2, 4, 1, 1, 3, 2, 0.5, 0.5, 1, 1.5, 1, 1],
    current: 6
  };

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });

  chartPayoutInfo = new Chart(<any>{
    chart: {
      type: 'column',
      margin: [10, 0, 20, 25],
      // backgroundColor: "#F4F4F4"
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    title: {
      text: ''
    },
    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },
    legend: {
      symbolHeight: 5,
      symbolRadius: 3,
      symbolWidth: 12,
      symbolPadding: 3,
      floating: true,
      verticalAlign: 'top',
      align: 'right',
      itemStyle: {
        color: "#6e6e6f",
        fontSize: "11px",
        fontWeight: "normal",
        marginTop: "30px"
      },
      y: -100
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    xAxis: {
      categories: ['Jan 16', 'Feb 16', 'Mar 16', 'Apr 16', 'May 16', 'Jun 16'],
      tickLength: 0,
      lineWidth: 2,
      lineColor: "#e0e0e0",
      labels: {
        style: {
          color: "#343434",
          fontWeight: "bold",
          fontSize: "11px",
          fontFamily: "Helvetica"
        },
        useHTML: true
      }
    },
    yAxis: {
      title: '',
      min: 0,
      gridLineWidth: 0,
      lineColor: "#e0e0e0",
      lineWidth: 2,
      tickInterval: 1,
      labels: {
        style: {
          color: "#a9a8a8",
          fontWeight: "bold",
          fontSize: "10px",
          fontFamily: "Helvetica"
        },
        x: -5,
        format: "{value}k",
        useHTML: true
      }
    },
    series: [{
      name: 'Deductions',
      data: [2, 2, 3, 2, 8, 4],
      color: "#badada",
      borderColor: "#badada"
    }, {
      name: 'Payout',
      data: [5, 3, 4, 7, 2, 9],
      color: "#7da8c6",
      borderColor: "#7da8c6"
    }]
  })

  earningInfo = {
    categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    values1: [3, 6, 2, 6, 3, 7, 4, 2, 3, 7, 9, 2],
    values2: [7, 4, 8, 1, 8, 4, 3, 2, 6, 3, 9, 3],
    current: 4
  };

  chartEarningsOption = {
    chart: {
      type: 'areaspline',
      margin: [10, 4, 20, 25],
      // backgroundColor: "#F4F4F4"
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    title: {
      text: ''
    },
    legend: {
      symbolHeight: 5,
      symbolRadius: 3,
      symbolWidth: 12,
      symbolPadding: 3,
      floating: true,
      verticalAlign: 'top',
      align: 'right',
      itemStyle: {
        color: "#6e6e6f",
        fontSize: "11px",
        fontWeight: "normal",
        marginTop: "30px"
      },
      y: -100
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.8
      }
    },
    xAxis: {
      title: {
        enabled: false
      },
      labels: {
        enabled: true,
        formatter: () => {}
      },
      tickLength: 0,
      tickInterval: 1,
      minPadding: 0,
      maxPadding: 0,
      startOnTick: false,
      endOnTick: false
    },
    yAxis: {
      title: '',
      min: 0,
      gridLineWidth: 0,
      lineColor: "#e0e0e0",
      lineWidth: 2,
      labels: {
        style: {
          color: "#a9a8a8",
          fontSize: "10px",
          fontFamily: "Helvetica",
          fontWeight: "bold"
        },
        x: -5,
        format: "{value}k",
        useHTML: true
      }
    },
    series: [{
      name: 'Payout',
      data: [4, 3, 5, 4, 7, 6],
      pointStart: 0,
      lineWidth: 0,
      color: "#c3dddd",
      marker: {
        fillColor: 'white',
        borderColor: "#399685",
        lineWidth: 1,
        lineColor: "#399685",
        radius: 2
      }
    },
    {
      name: 'Gross Income',
      data: [3, 4, 3, 3, 5, 4],
      pointStart: 0,
      color: "#9bb6df",
      lineWidth: 0,
      marker: {
        fillColor: 'white',
        borderColor: "#497797",
        lineWidth: 1,
        lineColor: "#497797",
        radius: 2,
        symbol: 'circle'
      }
    }]
  }

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
