import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-startpack-details',
  templateUrl: './startpack-details.page.html',
  styleUrls: ['./startpack-details.page.scss'],
})
export class StartpackDetailsPage implements OnInit {

  id: any;
  title: any;
  description: any;

  constructor(
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.title = this.actRoute.snapshot.paramMap.get('title');
    this.description = this.actRoute.snapshot.paramMap.get('description');
  }

}
