import appleWatch from './static/productListing/appleWatch.jpg'
import ps5 from './static/productListing/ps5.jpg'
import dellLaptop from './static/productListing/dell.jpg'
import freezer from './static/productListing/freezer.jpg'
import shoes from './static/productListing/boots.jpg'
import tv from './static/productListing/tv.jpg'
import camera from './static/productListing/camera.jpg'
import orangeCouch from './static/productListing/orangeCouch.jpg'
import samsungPhone from './static/productListing/samsungPhone.jpg'
import monitor from './static/productListing/monitor.jpg'
import printer from './static/productListing/printer-new.jpg'
import carCharger from './static/productListing/carCharger.jpg'
import glasses from './static/productListing/glasses.jpg'
import toyCar from './static/productListing/toyCar.jpg'


// title: 53 char max
export const products =[
    {title: 'New Apple Watch Series 6 44mm', imgURL: appleWatch, price: 100000, id:0, category: ['phones'], location: 'Ikeja, Lagos', status: 'Ongoing'},
    {title: 'PS5 PlayStation 5 Console', imgURL: ps5, price: 350000, id:1, category: ['electronics'], location: 'Ikeja, Lagos' , status: 'Ongoing'},
    {title: 'Dell XPS 13 Laptop 256GB SSD Intel Core i7, 8GB RAM', imgURL: dellLaptop, price: 250000, id:2, category: ['computers'], location: 'Ikeja, Lagos', status: 'Completed'},
    {title: 'Thomson 7.5 cu. ft. Top-Freezer Refrigerator', imgURL: freezer, price: 120000, id:3, category: ['household items'], location: 'Ikeja, Lagos', status: 'Ongoing'},
    {title: 'Tv', imgURL: tv, price: 150000, id:4, category: ['electronics'], location: 'Ikeja, Lagos', status: 'Completed'},
    {title: 'Sony Camera', imgURL: camera, price: 270000, id:5, category: ['electronics'], location: 'Ikeja, Lagos', status: 'Ongoing'},
    {title: 'Orange Couch', imgURL: orangeCouch, price: 500000, id:6, category: ['furniture', 'home and office'], location: 'Ikeja, Lagos', status: 'Completed'},
    {title: 'Boots', imgURL: shoes, price: 15000, id:7, category: ['clothing'], location: 'Ikeja, Lagos', status: 'Ongoing'},
    {title: 'Samsung Galaxy A02', imgURL: samsungPhone, price: 50000, id:8, category: ['phones'], location: 'Ikeja, Lagos', status: 'Completed'},
    {title: 'DELL 23.8" Wide Angle IPS MONITOR', imgURL: monitor, price: 98000, id:9, category: ['computers'], location: 'Ikeja, Lagos', status: 'Ongoing'},
    {title: 'HP Deskjet 2548 Printer', imgURL: printer, price: 15800, id:10, category: ['computers'], location: 'Ikeja, Lagos', status: 'Ongoing'},
    {title: 'New Apple Watch Series 6 44mm', imgURL: appleWatch, price: 100000, id:11, category: ['phones'], location: 'Ikeja, Lagos', status: 'Completed'},
    {title: 'PS5 PlayStation 5 Console Disc Version New Sealed', imgURL: ps5, price: 350000, id:12, category: ['electronics'], location: 'Ikeja, Lagos', status: 'Ongoing'},
    {title: 'Dell XPS 13 Laptop 256GB SSD Intel Core i7, 8GB RAM', imgURL: dellLaptop, price: 250000, id:13, category: ['computers'], location: 'Ikeja, Lagos', status: 'Completed'},
    {title: 'Thomson 7.5 cu. ft. Top-Freezer Refrigerator', imgURL: freezer, price: 120000, id:14, category: ['household items'], location: 'Ikeja, Lagos', status: 'Completed'},
    {title: 'Car Charger Power Bank Buletooth MP3 Player', imgURL: carCharger, price: 5000, id:15, category: ['cars'], location: 'Ikeja, Lagos', status: 'Completed'},
    {title: 'Anti Blue Ray Computer Glasses Grey', imgURL: glasses, price: 3000, id:16, category: ['health and beauty'], location: 'Ikeja, Lagos', status: 'Ongoing'},
    {title: 'Anti Blue Ray Computer Glasses Grey', imgURL: toyCar, price: 6000, id:17, category: ['children and toys'], location: 'Ikeja, Lagos', status: 'Completed'},
]

export const categories = [
    {value: 'furniture', name: 'Furniture', iconName: 'fa-couch'},
    {value: 'electronics', name: 'Electronics', iconName: 'fa-tv'},
    {value: 'home and office', name: 'Home & Office', iconName: 'fa-home'},
    {value: 'household items', name: 'Household Items', iconName: 'fa-blender'},
    {value: 'computers', name: 'Computers', iconName: 'fa-laptop'},
    {value: 'phones', name: 'Phones', iconName: 'fa-mobile'},
    {value: 'clothing', name: 'Clothing', iconName: 'fa-tshirt'},
    {value: 'children and toys', name: 'Children & Toys', iconName: 'fa-puzzle-piece'},
    {value: 'health and beauty', name: 'Health & Beauty', iconName: 'fa-plus-square'},
    {value: 'cars', name: 'Cars', iconName: 'fa-car'}
]

