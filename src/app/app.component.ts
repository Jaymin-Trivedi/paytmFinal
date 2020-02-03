import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paytmProject';

  
  mobileArray=[{
    name:'Movies',
    img:'../../assets/mobile/mob1.png',
    desc:'At Rs 6497'
  },
  {
    name:'Train',
    img:'../../assets/mobile/mob2.png',
    desc:'At Rs 15510'
  },
  {
    name:'Bus',
    img:'../../assets/mobile/mob3.png',
    desc:'At Rs 14099'
  },
  {
    name:'flights',
    img:'../../assets/mobile/mob4.png',
    desc:'At Rs 12988 '
  },
  {
    name:'Shop',
    img:'../../assets/mobile/mob5.png',
    desc:'At Rs 6780'
  },
  {
    name:'Hot-Deals',
    img:'../../assets/mobile/mob6.png',
    desc:'At Rs 8720'
  }
];


shoppingArray=[{
  name:'Shop On Mall',
  img:'',
},
{
  name:'FASTag',
  img:'',
},
{
  name:'Electronics',
  img:'',
},
{
  name:'Men fashion',
  img:'',
},
{
  name:'Women fashion',
  img:'',
},
{
  name:'Home & Kitchen',
  img:'',
},
{
  name:'Mobiles',
  img:'',
},
{
  name:'Laptops',
  img:'',
},
];





fashionArray=[{
  name:'Prepaid Bill',
  img:'../../assets/fashion/f1.png',
  desc:'Upto 50% off'
},
{
  name:'Postpaid Bill',
  img:'../../assets/fashion/f2.png',
  desc:'Min 40% off'
},
{
  name:'Electricity',
  img:'../../assets/fashion/f3.png',
  desc:'Min 50% off'
},
{
  name:'Metro',
  img:'../../assets/fashion/f4.png',
  desc:'Min 10% cashback'
},
{
  name:'Landline',
  img:'../../assets/fashion/f5.png',
  desc:'Under rs 999'
},
{
  name:'BroadBand',
  img:'../../assets/fashion/f6.png',
  desc:'40% - 70% off'
}
];

travelArray=[{
  name:'Prepaid Bill',
  img:'../../assets/travel/t1.png',
  desc:'Book With Zero Extra Charges'
},
{
  name:'Postpaid Bill',
  img:'../../assets/travel/t2.png',
  desc:'Save more on your First Flight'
},
{
  name:'Electricity',
  img:'../../assets/travel/t3.png',
  desc:'Offer Valid on RTC Bus Bookings'
},
{
  name:'Metro',
  img:'../../assets/travel/t4.png',
  desc:'Reasons to Book Trains on Paytm'
},
{
  name:'Landline',
  img:'../../assets/travel/t5.png',
  desc:'Get 100% Confirmed Tickets!'
},
{
  name:'BroadBand',
  img:'../../assets/travel/t6.png',
  desc:'Save BIG on your First International Flight!'
}
];

entertainmentArray=[{
  name:'Prepaid Bill',
  img:'../../assets/entertainment/e1.png',
  desc:'Upto 50% off'
},
{
  name:'Postpaid Bill',
  img:'../../assets/entertainment/e2.png',
  desc:'Min 40% off'
},
{
  name:'Electricity',
  img:'../../assets/entertainment/e3.png',
  desc:'Min 50% off'
},
{
  name:'Metro',
  img:'../../assets/entertainment/e4.png',
  desc:'Min 10% cashback'
},
{
  name:'Landline',
  img:'../../assets/entertainment/e5.png',
  desc:'Under rs 999'
},
{
  name:'BroadBand',
  img:'../../assets/entertainment/e6.png',
  desc:'40% - 70% off'
}
];

gadgetArray=[{
  name:'Prepaid Bill',
  img:'../../assets/gadget/g1.png',
  desc:'Starting Rs 199'
},
{
  name:'Postpaid Bill',
  img:'../../assets/gadget/g2.png',
  desc:'Starting Rs 99'
},
{
  name:'Electricity',
  img:'../../assets/gadget/g3.png',
  desc:'Starting Rs 75'
},
{
  name:'Metro',
  img:'../../assets/gadget/g4.png',
  desc:'Up to 30% Off'
},
{
  name:'Landline',
  img:'../../assets/gadget/g5.png',
  desc:'Starting Rs 279'
},
{
  name:'BroadBand',
  img:'../../assets/gadget/g6.png',
  desc:'Up to 25% Off'
}
];

investArray=[{
  name:'Prepaid Bill',
  img:'../../assets/invest/i1.png',
  desc:'Invest Now'
},
{
  name:'Postpaid Bill',
  img:'../../assets/invest/i2.png',
  desc:'Save Tax'
},
{
  name:'Electricity',
  img:'../../assets/invest/i3.png',
  desc:'Invest Now'
},
{
  name:'Metro',
  img:'../../assets/invest/i4.png',
  desc:'Switch to direct'
},
{
  name:'Landline',
  img:'../../assets/invest/i5.png',
  desc:'Invest Now'
},
{
  name:'BroadBand',
  img:'../../assets/invest/i6.png',
  desc:'Invest Now'
}
];


appliancesArray=[{
  name:'Prepaid Bill',
  img:'../../assets/appliances/a1.png',
  desc:'Up to 60% off'
},
{
  name:'Postpaid Bill',
  img:'../../assets/appliances/a2.png',
  desc:'Up to 65% off'
},
{
  name:'Electricity',
  img:'../../assets/appliances/a3.png',
  desc:'Up to 20% cashback'
},
{
  name:'Metro',
  img:'../../assets/appliances/a4.png',
  desc:'Up to 70% off'
},
{
  name:'Landline',
  img:'../../assets/appliances/a5.png',
  desc:'Up to 15% cashback'
},
{
  name:'BroadBand',
  img:'../../assets/appliances/a6.png',
  desc:'Up to 60% off'
}
];


brandArray=[{
  name:'Prepaid Bill',
  img:'../../assets/brand/b1.png',
  desc:'Up to ₹800 Cashback'
},
{
  name:'Postpaid Bill',
  img:'../../assets/brand/b2.png',
  desc:'Up to ₹500 Cashback'
},
{
  name:'Electricity',
  img:'../../assets/brand/b3.png',
  desc:'Up to ₹1800 Cashback'
},
{
  name:'Metro',
  img:'../../assets/brand/b4.png',
  desc:'Up to ₹80 Cashback'
},
{
  name:'Landline',
  img:'../../assets/brand/b5.png',
  desc:'Up to ₹720 Cashback'
},
{
  name:'BroadBand',
  img:'../../assets/brand/b6.png',
  desc:'Up to ₹300 Cashback'
}
];


hotdealsArray=[{
  name:'Prepaid Bill',
  img:'../../assets/hotdeals/h1.png',
  desc:'Trending Toys | Starting Rs 51'
},
{
  name:'Postpaid Bill',
  img:'../../assets/hotdeals/h2.png',
  desc:'Top Selling Sports Gear | Under Rs 499'
},
{
  name:'Electricity',
  img:'../../assets/hotdeals/h3.png',
  desc:'Indoor Games Collection | Starting Rs 51'
},
{
  name:'Metro',
  img:'../../assets/hotdeals/h4.png',
  desc:'Fitness Accessories | Under Rs 399'
},
{
  name:'Landline',
  img:'../../assets/hotdeals/h5.png',
  desc:'Car & Bike Accessories | Starting Rs 60'
},
{
  name:'BroadBand',
  img:'../../assets/hotdeals/h6.png',
  desc:'Ride Ons | Up to Rs 2000 Cashback'
}
];


}
