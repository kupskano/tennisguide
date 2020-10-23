import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private popoverController: PopoverController,
    private router: Router
  ) {}

  options  = {
    centeredSlides:true,
    slidePerView: 1,
    spaceBetween: -60,
    // speed:100,
    autoplay:true,

  }



  starterpacks = [
    {
      "id": 1,
      "title": "Brief History of Tennis",
      "description": "Tennis can be traced back thousands of years with a variation of the sport played in ancient Greece. Historians have pinpointed that tennis was born from a 12th-century French game called ‘paume,’ or ‘jeu de paume.’ Paume resembled handball, where participants would strike and volley a ball back and forth using their hands. Over the years, players of this game started to wear leather gloves, before the technology to create racquets came about."
    },
    {
      "id": 2,
      "title": "Benefits of Playing Tennis",
      "description": "Beyond having a good time out on the court, tennis is excellent for raising your heart rate and is a healthy way to pass the time. It’s common knowledge that regular exercise like playing tennis holds plenty of physical and mental health benefits. Here are just a few reasons why tennis is such a great sport to pick up."
    },
    {
      "id": 3,
      "title": "The Rules",
      "description": "It’s likely that you have watched at least part of a tennis match, and are vaguely familiar with the aim of the game. However, for this article, we are going to start from scratch."
    }
  ]


  filterProductData(event: any) {
    this.starterpacks = [ 
      {
        "id": 1,
        "title": "Brief History of Tennis",
        "description": "Tennis can be traced back thousands of years with a variation of the sport played in ancient Greece. Historians have pinpointed that tennis was born from a 12th-century French game called ‘paume,’ or ‘jeu de paume.’ Paume resembled handball, where participants would strike and volley a ball back and forth using their hands. Over the years, players of this game started to wear leather gloves, before the technology to create racquets came about."
      },
      {
        "id": 2,
        "title": "Benefits of Playing Tennis",
        "description": "Beyond having a good time out on the court, tennis is excellent for raising your heart rate and is a healthy way to pass the time. It’s common knowledge that regular exercise like playing tennis holds plenty of physical and mental health benefits. Here are just a few reasons why tennis is such a great sport to pick up."
      },
      {
        "id": 3,
        "title": "The Rules",
        "description": "It’s likely that you have watched at least part of a tennis match, and are vaguely familiar with the aim of the game. However, for this article, we are going to start from scratch."
      }
    ]

    const val = event.target.value;
    if(val && val.trim() !== '') {
      this.starterpacks = this.starterpacks.filter((starterpack) => {
        return (starterpack.title.toLowerCase().indexOf(val.toLowerCase()) >-1);
      })
    }
  }

  presentDetails(starterpack) {
    this.router.navigate(['/startpack-details', {
        "id": starterpack.id,
        "title": starterpack.title,
        "description": starterpack.description
    }
  ]);
  }







  // async presentPopover(ev: any, starterpack) {
  //   const popover = await this.popoverController.create({
  //     component: PopoverComponent,
  //     cssClass: 'my-custom-class',
  //     event: ev,
  //     componentProps: {starterpack},
  //     translucent: true
  //   });
  //   return await popover.present();
  //   console.log(ev, starterpack);
  // }

}
