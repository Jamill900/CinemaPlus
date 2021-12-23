import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  campaigns = [
    { src: "/assets/img/campaign1.png", label: "Super Day & Family Day"},
    { src: "/assets/img/campaign2.png", label: "Super Day"},
    { src: "/assets/img/campaign3.png", label: "Ulduzum"},
    { src: "/assets/img/campaign4.png", label: "Combo Menu"},
    { src: "/assets/img/campaign5.png", label: "Carlsberg Combo"},
    { src: "/assets/img/campaign6.png", label: "McDonald’s Combo"},
  ]
}
