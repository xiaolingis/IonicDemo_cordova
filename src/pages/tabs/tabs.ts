import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1Root: any = 'HomePage';
    tab2Root: any = 'EchartsPage';
    tab3Root: any = 'CordovaPage';
    tab4Root: any = 'ArcgisPage';
    tab5Root: any = 'AMapPage';

    tab1Title = "Home";
    tab2Title = "Echarts";
    tab3Title = "Cordova";
    tab4Title = "Arcgis";
    tab5Title: any = 'AMap';

    constructor(public navCtrl: NavController) {

    }
}
