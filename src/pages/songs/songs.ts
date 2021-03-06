import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MusicList} from "../../providers/music-list";

/*
  Generated class for the Songs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html'
})
export class SongsPage {
  public user:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public ml:MusicList) {
    this.AllUsers();
  }

  AllUsers(){
    this.ml.getAllQuestions()
      .subscribe(
        res=>{
          this.user = res.items;
          console.log(this.user);
        })
  }
  ionViewDidLoad() {
    console.log('UsersPage');
  }

}
