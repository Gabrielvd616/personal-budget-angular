import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { change } from './d3chart.js';
import * as d3 from './d3.v3.min.js';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  private dataSource = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#41c92c',
          '#7452ff',
          '#63dbd9',
        ],
      },
    ],
    labels: [],
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBudget().subscribe((res: any) => {
      for (var i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
        this.createChart();
      }
      change(
        res.myBudget.map((item) => {
          return { label: item.title, value: item.budget };
        }),
        d3
      );
    });
  }

  createChart() {
    var ctx = document.getElementById('myChart');
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: this.dataSource,
    });
  }
}
