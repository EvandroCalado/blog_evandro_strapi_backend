import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'menuLink';
    icon: 'apps';
  };
  attributes: {
    link: Attribute.Text & Attribute.Required;
    text: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'menu.menu-link': MenuMenuLink;
    }
  }
}
