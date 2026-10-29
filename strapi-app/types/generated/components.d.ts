import type { Schema, Attribute } from '@strapi/strapi';

export interface PricesPriceCategory extends Schema.Component {
  collectionName: 'components_prices_price_categories';
  info: {
    displayName: '\u0420\u0430\u0437\u0434\u0435\u043B \u043F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442\u0430';
  };
  attributes: {
    title_kk: Attribute.String & Attribute.Required;
    title_ru: Attribute.String & Attribute.Required;
    items: Attribute.Component<'prices.price-item', true>;
  };
}

export interface PricesPriceItem extends Schema.Component {
  collectionName: 'components_prices_price_items';
  info: {
    displayName: '\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u043F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442\u0430';
    icon: 'priceTag';
    description: '\u0426\u0435\u043D\u044B \u0432 \u0442\u0435\u043D\u0433\u0435. \u041F\u0443\u0441\u0442\u043E\u0435 \u043F\u043E\u043B\u0435 \u2014 \u0446\u0435\u043D\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F.';
  };
  attributes: {
    equipment_kk: Attribute.String & Attribute.Required;
    equipment_ru: Attribute.String & Attribute.Required;
    unit_kk: Attribute.String & Attribute.Required;
    unit_ru: Attribute.String & Attribute.Required;
    summer_no_vat: Attribute.Decimal;
    summer_with_vat: Attribute.Decimal;
    winter_no_vat: Attribute.Decimal;
    winter_with_vat: Attribute.Decimal;
  };
}

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
    biography: Attribute.Blocks;
  };
}

export interface UiDocument extends Schema.Component {
  collectionName: 'components_ui_documents';
  info: {
    displayName: 'document';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    item_document: Attribute.Media;
    year: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1990;
          max: 2100;
        },
        number
      >;
  };
}

export interface UiPerformNumber extends Schema.Component {
  collectionName: 'components_ui_perform_numbers';
  info: {
    displayName: 'perform_number';
    description: '';
  };
  attributes: {
    year: Attribute.String;
    number: Attribute.Integer;
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

export interface UiYoutubeLink extends Schema.Component {
  collectionName: 'components_ui_youtube_links';
  info: {
    displayName: 'youtube_link';
  };
  attributes: {
    src: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'prices.price-category': PricesPriceCategory;
      'prices.price-item': PricesPriceItem;
      'ui.button': UiButton;
      'ui.director': UiDirector;
      'ui.document': UiDocument;
      'ui.perform-number': UiPerformNumber;
      'ui.social': UiSocial;
      'ui.youtube-link': UiYoutubeLink;
    }
  }
}
