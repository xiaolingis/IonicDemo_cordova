import { Directive, ElementRef, Renderer2 } from "@angular/core";
import { Content, ScrollEvent } from "ionic-angular";

@Directive({
    selector: '[fixed-scroll]',
})
/**
 * 滚动时固定在顶部的指令，此指令只适用于ion-content的子view
 */
export class FixedScrollDirective {
    private _elRect: any;

    private _isFixed: boolean = false;

    constructor(private _content: Content, private _renderer: Renderer2, private _el: ElementRef) {
        _content.ionScroll.subscribe(this._onScroll.bind(this))

    }

    _updateRect() {
        this._elRect = this._el.nativeElement.getBoundingClientRect();
    }

    _setFixed() {
        this._renderer.setStyle(this._el.nativeElement.parentElement, 'padding-top', `${this._elRect.height}px`);
        this._renderer.addClass(this._el.nativeElement, 'fixed');

        this._isFixed = true;
    }

    _removeFixed() {
        this._isFixed = false;
        this._renderer.removeStyle(this._el.nativeElement.parentElement, 'padding-top');
        return this._renderer.removeClass(this._el.nativeElement, 'fixed');
    }

    _onScroll(ev: ScrollEvent) {
        let d = this._content.getContentDimensions();

        if (!this._elRect) {
            return this._updateRect();
        }

        if (!this._isFixed && d.scrollTop >= this._elRect.top) {
            return this._setFixed();
        }


        if (this._isFixed && d.scrollTop < this._elRect.top) {
            return this._removeFixed();
        }

        return;

    }
}
