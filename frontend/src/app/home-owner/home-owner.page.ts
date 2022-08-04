import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home-owner',
  templateUrl: './home-owner.page.html',
  styleUrls: ['./home-owner.page.scss'],
})
export class HomeOwnerPage implements OnInit {
  @ViewChild('barCanvas') public barCanvas: ElementRef;
  barChart: any;
  constructor() { }

  ionViewWillEnter() {
    this.barChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Jun", "Jul", "Aug", "Sept", "Oct"],
        datasets: [{
          barPercentage: 0.8,
          barThickness: 'flex',
          label: "Bourbon Bliss's Monthly Visitors",
          backgroundColor: "#2E8B57",
          data: [20, 50, 30, 15, 45],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'No. of Visitors',
            },
            ticks: {
              color: 'black',
              autoSkip: true,
              maxTicksLimit: 10,
            }            
          },
          x: {
            title: {
              display: true,
              text: 'Month',
            },
            grid: {
              display: false,
            },
            ticks: {
              color: 'black',
            }  
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Bourbon Bliss',
            color: 'black',
            align: 'start',
            font: {
              size: 20,
            }
          },
          legend: {
            position: 'bottom',
            labels: {
              color: 'black',
            }
          }
        }
      }
    })
  }

  

  ngOnInit() {
  }

}
