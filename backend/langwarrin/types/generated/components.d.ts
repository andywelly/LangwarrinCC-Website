import type { Schema, Attribute } from '@strapi/strapi';


export interface HomeCardCardText extends Schema.Component {
  collectionName: 'components_home_card_card_texts';
  info: {
    displayName: 'Card Text';
    icon: 'bold';
    description: '';
  };
  attributes: {
    Description: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Caption: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {}
}
