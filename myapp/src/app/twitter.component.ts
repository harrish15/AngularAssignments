import { Component } from '@angular/core';

@Component({
    selector: 'app-twitter',
    template: `
    <h2>Twitter<i class="fa fa-twitter" aria-hidden="true"></i></h2>
      <div class="container">      
        <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">      
          <div class="userlogo col-lg-1 col-md-1 col-sm-1 col-xs-1">
            <img class="img-fluid rounded-circle" src="../assets/img/face2.jpg" alt="userlogo">
          </div>
          <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
            <div class="row name">
              <span class="first">Chennai Super Kings</span><span class="atB">@ChennaiIPL</span>
            </div>
            <div class="row hastagrow">
              <span>In Seven, V trust!</span><div class="hashtag"><span class="FourDismissals">#FourDismissals</span><span class="WhistleForIndia">#WhistleForIndia</span><span class="INDvSL">#INDvSL</span><span class="CWC19">#CWC19</span></div>
            </div>
            <div class="row contentimg">
              <img class="img-fluid rounded" src="../assets/img/ChennaiSuperKingslarge.jpg" alt="Chennai Super Kings" heigth="400px" width="400px">
            </div>
            <i class="fa fa-comment-o" aria-hidden="true" title="Comments"></i>
            <i class="fa fa-retweet" aria-hidden="true" title="Retweet"></i>
            <i class="fa fa-envelope-o" aria-hidden="true" title="Messages"></i>
            <app-like (evEmit)="LikeCount($event)" [like]="likeCount"></app-like>
          </div>      
        </div>   
      </div>
    `,
    styles: [`
    h2{
      color: #1DA1F2;
      padding: 60px 0px 0px 30px;
      text-decoration: underline;
    }
    
    div.container{
      float: center;
      padding: 30px 30px 30px 30px;
    }

    div.name:hover span.first{
      color: #1DA1F2;
      text-decoration: underline;
    }

    i{
      padding: 5px 90px 5px 10px;
    }

    div.name span{
      font-weight: bold;
      margin-left: 20px;
    }
    div.name span.atB{
        font-weight: normal;
        text-decoration-color: grey;
        font-size: 14px;
        margin:0px;
      }
    
    div.hastagrow{
        margin-left: 5px;
    } 

    div.hashtag {   
        color: #1DA1F2;
    }

    div.hashtag span.FourDismissals,div.hashtag span.WhistleForIndia,div.hashtag span.INDvSL,div.hashtag span.CWC19{
      padding: 0px 5px 0px 5px;
    }
      
    div.hashtag span.FourDismissals:hover,div.hashtag span.WhistleForIndia:hover,div.hashtag span.INDvSL:hover,div.hashtag span.CWC19:hover {
        text-decoration: underline;
      }
    
    div.contentimg{
        margin-left: 5px;
    }
      `]
})

export class TwitterComponent{
  likeCount:number=10;  
  LikeCount(item){
      this.likeCount = item;
    }
}