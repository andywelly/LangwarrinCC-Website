import type { Schema, Attribute } from '@strapi/strapi';

export interface ListDotPoint extends Schema.Component {
  collectionName: 'components_list_dot_points';
  info: {
    displayName: 'DotPoint';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    DotPoint: Attribute.Text;
  };
}

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

export interface GridGridItem extends Schema.Component {
  collectionName: 'components_grid_grid_items';
  info: {
    displayName: 'GridItem';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Attribute.String;
    Title: Attribute.String;
    Text: Attribute.Text;
  };
}

export interface GridGridGroup extends Schema.Component {
  collectionName: 'components_grid_grid_groups';
  info: {
    displayName: 'GridGroup';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
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

export interface CardsCardText extends Schema.Component {
  collectionName: 'components_cards_card_texts';
  info: {
    displayName: 'CardText';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description1: Attribute.Text;
    Description2: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.dot-point': ListDotPoint;
      'home-card.card-text': HomeCardCardText;
      'header.cover-image': HeaderCoverImage;
      'grid.grid-item': GridGridItem;
      'grid.grid-group': GridGridGroup;
      'carousel.carousel-item': CarouselCarouselItem;
      'cards.card-text': CardsCardText;
    }
  }
}
