import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZSelectComponent } from './z-select/z-select';
import { IonicModule } from 'ionic-angular';
import { ZRefresherContentComponent } from './z-refresher-content/z-refresher-content';
import { DirectivesModule } from '../directives/directives.module';
import { ZPageComponent } from './z-page/z-page';
import { ZInfiniteScrollContentComponent } from './z-infinite-scroll-content/z-infinite-scroll-content';
@NgModule({
    declarations: [
        ZSelectComponent,
        ZRefresherContentComponent,
        ZInfiniteScrollContentComponent,
        ZPageComponent,
    ],
    imports: [
        DirectivesModule,
        CommonModule,
        IonicModule],
    exports: [
        ZSelectComponent,
        ZRefresherContentComponent,
        ZInfiniteScrollContentComponent,
        ZPageComponent,
    ]
})
export class ComponentsModule { }
