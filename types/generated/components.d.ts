import type { Schema, Attribute } from '@strapi/strapi';

export interface LinkProjectLink extends Schema.Component {
  collectionName: 'components_link_project_links';
  info: {
    displayName: 'ProjectLink';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    project_host: Attribute.Relation<
      'link.project-link',
      'oneToOne',
      'api::project-host.project-host'
    >;
    link: Attribute.String & Attribute.Required;
  };
}

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
      'link.project-link': LinkProjectLink;
      'menu.menu-link': MenuMenuLink;
    }
  }
}
