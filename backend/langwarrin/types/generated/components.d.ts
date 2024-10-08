import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeCardCardText extends Schema.Component {
  collectionName: 'components_home_card_card_texts';
  info: {
    displayName: 'Card Text';
    icon: 'bold';
  };
  attributes: {
    Description: Attribute.Text;
  };
}

export interface HeaderCoverImage extends Schema.Component {
  collectionName: 'components_header_cover_images';
  info: {
    displayName: 'Cover Image';
    icon: 'collapse';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImageText: Attribute.String;
  };
}

export interface CarouselCarouselItem extends Schema.Component {
  collectionName: 'components_carousel_carousel_items';
  info: {
    displayName: 'CarouselItem';
    icon: 'grid';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Caption: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home-card.card-text': HomeCardCardText;
      'header.cover-image': HeaderCoverImage;
      'carousel.carousel-item': CarouselCarouselItem;
    }
  }
}
