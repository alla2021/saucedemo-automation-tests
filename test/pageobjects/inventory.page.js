import { $ } from '@wdio/globals';
import Page from './page.js';

class InventoryPage extends Page {
    get inventoryContainer() { return $('.inventory_container'); }
    get menuButton() { return $('#react-burger-menu-btn'); }
    get logoutButton() { return $('#logout_sidebar_link'); }
    get secondItemTitle() { return $('#item_0_title_link div')}
    get secondItemPrice() { return $$('.inventory_item_price')}
    get addToCartSecondItem() { return $('#add-to-cart-sauce-labs-bike-light'); }
    get shoppingCartBtn () { return $('#shopping_cart_container'); }
    get cartBadge () { return $('.shopping_cart_badge'); }
    get menuItems() { return $$('.bm-item'); }

    get sortDropdown() { return $('.product_sort_container'); }
    get productPrices() { return $$('.inventory_item_price'); }
    get productNames() { return $$('.inventory_item_name'); }

    get footer() { return $('#contents_wrapper'); }
    get twitterLink() { return $('.social_twitter a'); }
    get facebookLink() { return $('.social_facebook a'); }
    get linkedinLink() { return $('.social_linkedin a'); }

    async verifyMenuItemsCount(expectedCount) {
        const items = await this.menuItems;
        return items.length === expectedCount;
    }

    async chooseSortingOption(optionValue) {
        await this.sortDropdown.selectByAttribute('value', optionValue);
    }

    async getProductPrices() {
        return $$('.inventory_item_price');
    }

    async getProductNames() {
        return $$('.inventory_item_price');
    }

    async sortProducts(products, sortingOption) {
        if (sortingOption === 'lohi') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortingOption === 'hilo') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortingOption === 'az') {
            return products.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortingOption === 'za') {
            return products.sort((a, b) => b.name.localeCompare(a.name));
        }
    }
}

export default new InventoryPage();

