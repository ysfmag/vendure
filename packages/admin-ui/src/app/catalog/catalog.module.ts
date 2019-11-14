import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { catalogRoutes } from './catalog.routes';
import { ApplyFacetDialogComponent } from './components/apply-facet-dialog/apply-facet-dialog.component';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { AssetPreviewComponent } from './components/asset-preview/asset-preview.component';
import { AssignProductsToChannelDialogComponent } from './components/assign-products-to-channel-dialog/assign-products-to-channel-dialog.component';
import { CollectionContentsComponent } from './components/collection-contents/collection-contents.component';
import { CollectionDetailComponent } from './components/collection-detail/collection-detail.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { CollectionTreeNodeComponent } from './components/collection-tree/collection-tree-node.component';
import { CollectionTreeComponent } from './components/collection-tree/collection-tree.component';
import { FacetDetailComponent } from './components/facet-detail/facet-detail.component';
import { FacetListComponent } from './components/facet-list/facet-list.component';
import { GenerateProductVariantsComponent } from './components/generate-product-variants/generate-product-variants.component';
import { OptionValueInputComponent } from './components/option-value-input/option-value-input.component';
import { ProductAssetsComponent } from './components/product-assets/product-assets.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchInputComponent } from './components/product-search-input/product-search-input.component';
import { ProductVariantsEditorComponent } from './components/product-variants-editor/product-variants-editor.component';
import { ProductVariantsListComponent } from './components/product-variants-list/product-variants-list.component';
import { ProductVariantsTableComponent } from './components/product-variants-table/product-variants-table.component';
import { UpdateProductOptionDialogComponent } from './components/update-product-option-dialog/update-product-option-dialog.component';
import { VariantPriceDetailComponent } from './components/variant-price-detail/variant-price-detail.component';
import { ProductDetailService } from './providers/product-detail.service';
import { CollectionResolver } from './providers/routing/collection-resolver';
import { FacetResolver } from './providers/routing/facet-resolver';
import { ProductResolver } from './providers/routing/product-resolver';
import { ProductVariantsResolver } from './providers/routing/product-variants-resolver';

@NgModule({
    imports: [SharedModule, RouterModule.forChild(catalogRoutes), DragDropModule],
    exports: [],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        FacetListComponent,
        FacetDetailComponent,
        GenerateProductVariantsComponent,
        ProductVariantsListComponent,
        ApplyFacetDialogComponent,
        AssetListComponent,
        ProductAssetsComponent,
        VariantPriceDetailComponent,
        CollectionListComponent,
        CollectionDetailComponent,
        CollectionTreeComponent,
        CollectionTreeNodeComponent,
        CollectionContentsComponent,
        ProductVariantsTableComponent,
        AssetPreviewComponent,
        ProductSearchInputComponent,
        OptionValueInputComponent,
        UpdateProductOptionDialogComponent,
        ProductVariantsEditorComponent,
        AssignProductsToChannelDialogComponent,
    ],
    entryComponents: [
        ApplyFacetDialogComponent,
        AssetPreviewComponent,
        UpdateProductOptionDialogComponent,
        AssignProductsToChannelDialogComponent,
    ],
    providers: [
        ProductResolver,
        FacetResolver,
        CollectionResolver,
        ProductDetailService,
        ProductVariantsResolver,
    ],
})
export class CatalogModule {}
