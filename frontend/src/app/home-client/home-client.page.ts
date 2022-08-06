import { Component, OnInit, ViewChild } from '@angular/core';
import {IonContent} from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.page.html',
  styleUrls: ['./home-client.page.scss'],
})
export class HomeClientPage {
  @ViewChild ( IonContent, { static:true })
  content: IonContent

  searchTerm: any;
  house = [
    {
      "houseimg": 'assets/img/house1.jpg',
      "housename": "Bourbon Bliss",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house2.jpg",
      "housename": "Hotel De La Cruise",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,000",
      "rating": "3.5 Home-rating",
    },
    {
      "houseimg": "assets/img/house3.jpg",
      "housename": "The Venetian",
      "address": "Alangilan, Batangas City",
      "rent": "Php 1,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house4.jpg",
      "housename": "Peninsula",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,000",
      "rating": "4.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house5.jpg",
      "housename": "The Palazzo",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house6.jpg",
      "housename": "The Riverwood",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,000",
      "rating": "4.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house7.jpg",
      "housename": "Serene Stay",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house8.jpg",
      "housename": "Grand Hyatt",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house9.jpg",
      "housename": "Roosevelt",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,000",
      "rating": "3.5 Home-rating",
    },
    {
      "houseimg": "assets/img/house10.jpg",
      "housename": "Villa Florence",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },

    {
      "houseimg": "assets/img/house11.jpg",
      "housename": "Green Acres",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house12.jpg",
      "housename": "Country Charm",
      "address": "Alangilan, Batangas City",
      "rent": "Php 4,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house13.jpg",
      "housename": "Tranquil Acres",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house14.jpg",
      "housename": "Park Grand London",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house15.jpg",
      "housename": "Silver Sun",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house16.jpg",
      "housename": "The Downtown",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house17.jpg",
      "housename": "Bella View Lounge",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house18.jpg",
      "housename": "Chestnut Tree",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house19.png",
      "housename": "Astro",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house20.jpg",
      "housename": "The Lucky Rabbit B&B",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },

    {
      "houseimg": "assets/img/house21.jpg",
      "housename": "Home Away From Home",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house22.jpg",
      "housename": "The Houstonian",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house23.jpg",
      "housename": "Giraffe Manor",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house24.jpg",
      "housename": "Serene Horizons",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house25.jpg",
      "housename": "Dreamland",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house26.jpg",
      "housename": "The Eternity",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house27.png",
      "housename": "Hotel Grizzly",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house28.jpg",
      "housename": "Cape Grace",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house29.jpg",
      "housename": "The Scarlet House",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house30.jpg",
      "housename": "The Goldberg",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,000",
      "rating": "3.0 Home-rating",
    },

    {
      "houseimg": "assets/img/house31.jpg",
      "housename": "Est Hem",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house32.jpg",
      "housename": "Silversmith",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house33.jpg",
      "housename": "Like Home",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house34.jpg",
      "housename": "The Standard High Line",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house35.jpg",
      "housename": "Lexington",
      "address": "Alangilan, Batangas City",
      "rent": "Php 1,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house36.jpg",
      "housename": "Slumber Falls",
      "address": "Alangilan, Batangas City",
      "rent": "Php 1,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house37.jpg",
      "housename": "Primland",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house38.jpg",
      "housename": "The Hoxton",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house39.jpg",
      "housename": "Royal Orbit",
      "address": "Alangilan, Batangas City",
      "rent": "Php 1,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house40.jpg",
      "housename": "The Manhattan",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },

    {
      "houseimg": "assets/img/house41.jpg",
      "housename": "Sunny Canopy",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house42.jpg",
      "housename": "Millennium Times Square",
      "address": "Alangilan, Batangas City",
      "rent": "Php 3,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house43.jpg",
      "housename": "The Duke Rooms",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house44.jpg",
      "housename": "Happy Stay",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house45.jpg",
      "housename": "Enchanted Isle",
      "address": "Alangilan, Batangas City",
      "rent": "Php 1,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house46.jpg",
      "housename": "The St. Mathew",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house47.jpg",
      "housename": "Ivy Bloom Homes",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house48.jpg",
      "housename": "The Daniels Balcony",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,000",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house49.jpg",
      "housename": "Knights of Eric",
      "address": "Alangilan, Batangas City",
      "rent": "Php 2,500",
      "rating": "3.0 Home-rating",
    },
    {
      "houseimg": "assets/img/house50.jpg",
      "housename": "Lilies Pad",
      "address": "Alangilan, Batangas City",
      "rent": "Php 1,500",
      "rating": "3.0 Home-rating",
    }    
    
    
  ];

  constructor() { }

  ngOnInit() {
  }

  scrollToTop() {
    this.content.scrollToTop(1500);
  }

  scrollToBottom() {
    this.content.scrollToBottom(1500);
  }


}
