import type { Schema, Attribute } from '@strapi/strapi';

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface UiDirector extends Schema.Component {
  collectionName: 'components_ui_directors';
  info: {
    displayName: 'Director';
    description: '';
  };
  attributes: {
    position: Attribute.String;
    full_name: Attribute.String;
    number: Attribute.String;
    reception_schedule: Attribute.String;
    photo: Attribute.Media;
  };
}

export interface UiSocial extends Schema.Component {
  collectionName: 'components_ui_socials';
  info: {
    displayName: 'social';
  };
  attributes: {
    icon: Attribute.Media;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.button': UiButton;
      'ui.director': UiDirector;
      'ui.social': UiSocial;
    }
  }
}
