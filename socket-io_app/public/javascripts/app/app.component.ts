import {Component} from '@angular/core';

@Component({
    selector: 'price-app',
    templateUrl: 'templates/product.html'
})

export class PriceComponent {
    price: number = 0.0;
    socket = null;
    bidValue = '';

    constructor(){
        this.socket = io('http://localhost:3000');
        this.socket.on('update', function(data){
            this.price = data;
        }.bind(this));    
    }

    bid(){
        this.socket.emit('priceUp', this.bidValue);
        this.bidValue = '';
    }
	
	reinit(){
		this.socket.emit('reinit');
	}
}