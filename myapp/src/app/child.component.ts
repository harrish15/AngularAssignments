import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "app-child",
    template: `
    <h2>Child Component</h2>
    <button type="button" class="btn btn-outline-primary childBtn"
    (click)="AddMobile()"
    >Click Me</button>
    <div class="container">
    <h3 class="h3">Mobile Products</h3>
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6" *ngFor="let md of mobileData">
            <div class="product-grid">
                <div class="product-image">
                    <a href="#">
                        <img class="pic-1" src="{{md.imgURL}}">
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <ul class="rating">
                    <li class="fa fa-star"  *ngFor="let rating of md.rating"></li>
                </ul>
                <div class="product-content">
                    <h3 class="title"><a href="#">{{md.name}}</a></h3>
                    <div class="price">{{md.price}}
                    </div>
                    <a class="add-to-cart" href="">+ Add To Cart</a>
                </div>
            </div>
        </div>
    </div>
</div>    
    
    `,
    styles: [`
    .childBtn{
        margin: 10px 30px 30px 30px;
    }
    
    h3.h3{text-align:center;margin:1em;text-transform:capitalize;font-size:1.7em;}

.product-grid{font-family:Raleway,sans-serif;text-align:center;padding:0 0 72px;margin:0 0 30px 0;border:1px solid rgba(0,0,0,.1);overflow:hidden;position:relative;z-index:1}
.product-grid .product-image{position:relative;transition:all .3s ease 0s}
.product-grid .product-image a{display:block}
.product-grid .product-image img{width:auto;height:200px}
.product-grid .pic-1{opacity:1;transition:all .3s ease-out 0s}
.product-grid:hover .pic-1{opacity:1}
.product-grid .social{width:150px;padding:0;margin:0;list-style:none;opacity:0;transform:translateY(-50%) translateX(-50%);position:absolute;top:60%;left:50%;z-index:1;transition:all .3s ease 0s}
.product-grid:hover .social{opacity:1;top:50%}
.product-grid .social li{display:inline-block}
.product-grid .social li a{color:#fff;background-color:#333;font-size:16px;line-height:40px;text-align:center;height:40px;width:40px;margin:0 2px;display:block;position:relative;transition:all .3s ease-in-out}
.product-grid .social li a:hover{color:#fff;background-color:#ef5777}
.product-grid .social li a:after,.product-grid .social li a:before{content:attr(data-tip);color:#fff;background-color:#000;font-size:12px;letter-spacing:1px;line-height:20px;padding:1px 5px;white-space:nowrap;opacity:0;transform:translateX(-50%);position:absolute;left:50%;top:-30px}
.product-grid .social li a:after{content:'';height:15px;width:15px;border-radius:0;transform:translateX(-50%) rotate(45deg);top:-20px;z-index:-1}
.product-grid .social li a:hover:after,.product-grid .social li a:hover:before{opacity:1}
.product-grid .rating{color:#FFD200;font-size:12px;padding:12px 0 0;margin:0;list-style:none;position:relative;z-index:-1}
.product-grid .product-content{background-color:#fff;text-align:center;padding:10px 0;margin:0 auto;position:absolute;left:0;right:0;bottom:-27px;z-index:1;transition:all .3s}
.product-grid:hover .product-content{bottom:0}
.product-grid .title{font-size:13px;font-weight:400;letter-spacing:.5px;text-transform:capitalize;margin:0 0 10px;transition:all .3s ease 0s}
.product-grid .title a{color:#828282}
.product-grid .title a:hover,.product-grid:hover .title a{color:#ef5777}
.product-grid .price{color:#333;font-size:17px;font-family:Montserrat,sans-serif;font-weight:700;letter-spacing:.6px;margin-bottom:8px;text-align:center;transition:all .3s}
.product-grid .price span{color:#999;font-size:13px;font-weight:400;text-decoration:line-through;margin-left:3px;display:inline-block}
.product-grid .add-to-cart{color:#000;font-size:13px;font-weight:600}
    `]
})

export class ChildComponent{
    @Input() mobileData;
    @Output() evEmit = new EventEmitter();
    AddMobile(){
        let newMobile ={
                name: "RealMe C2",
                price: 9000,
                imgURL: "../assets/img/mobiles/realme-c2.jpeg",
                rating: [1,2,3,4]
            };  
        this.evEmit.emit(newMobile);
    }
}