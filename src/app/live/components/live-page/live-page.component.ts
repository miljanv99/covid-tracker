import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts/highmaps'
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json'
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.css']
})
export class LivePageComponent implements OnInit {
  
  liveData: any[] = [];

  constructor(private dataService: DataService) { }

  Highcharts: typeof Highcharts  = Highcharts
  chartConstructor = 'mapChart';

  //any jer izbacije gresku u redu 79
  chartOptions: Highcharts.Options | any = {
    chart:{
          //worldMap iz import-a
      map: worldMap
    },
    title:{
      text: "Covid-19 World Data"
    },
    subtitle:{
      text: "Confirmed Cases Live"
    },
    //za zoom i pomeranje po mapi
    mapNavigation:{
      enabled: true,
      buttonOptions:{
        //van mape da se nalaze dugmici
        alignTo: 'spacingBox'
      }
    },
    legend:{
      enabled: true,
    },
    colorAxis:{
      min: 0
    },
    series:[{
      type: 'map',
      name: 'COVID-19 Data',
      states:{
        hover:{
          color: "#dc3545"
        }
      },
      dataLabels:{
        enabled: true,
        format: '{point.name}'
      },
      //sva podrucija u zemlji
      allAreas: false,
      data: [
        ["fo",0],
        ["um",1],
        ["us",2],
        ["jp",3],
        ["sc",4],
        ["in",5],
        ["fr",6],
        ["fm",7],
        ["cn",8],
        ["pt",9]
      ]
    }]
  }

  ngOnInit(): void {
    this.dataService.getSummaryData().subscribe((data:any)=>{
      this.liveData = data.Countries.map((country:any)=>[country.CountryCode.toLowerCase(), country.  TotalConfirmed]);

      this.chartOptions.series[0].data = this.liveData;

      //redraw mape
      //container je id mape
      this.Highcharts.mapChart('container', this.chartOptions)
      
    },
    (error: any)=>{
      console.log(error)
    }
    );
  }

}
