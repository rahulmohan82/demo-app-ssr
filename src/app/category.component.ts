import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Category, CATEGORIES } from './model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit, OnDestroy {

    routeSubscription: Subscription;
    pageName = '';
    category: Category;
    constructor(
        private route: ActivatedRoute,
        private titleService: Title,
        private metaService: Meta
    ) {

    }
    ngOnInit() {

        this.routeSubscription = this.route.params.subscribe(params => {
            this.pageName = params['pagename'];
            if (this.pageName) {
                this.category = CATEGORIES
                    .find(cat => cat.name.toUpperCase() === this.pageName.toUpperCase());
                if (this.category) {
                    this.populateMetaTags();
                }
            }

        });
    }

    populateMetaTags() {

        this.titleService.setTitle(this.category.metaTitle);
        const metaTags: MetaDefinition[] = [];
        metaTags.push({ name: 'description', content: this.category.metaDescription });
        metaTags.push({ property: 'og:title', content: this.category.metaTitle });
        metaTags.push({ property: 'og:description', content: this.category.metaDescription });
        metaTags.push({ property: 'og:image', content: this.category.metaImageUrl });
        this.metaService.addTags(metaTags);
    }


    ngOnDestroy() {
        if (this.routeSubscription && this.routeSubscription !== null && !this.routeSubscription.closed) {
            this.routeSubscription.unsubscribe();
        }
    }

}
