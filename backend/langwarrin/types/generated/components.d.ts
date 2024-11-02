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

export interface GridGridItem extends Schema.Component {
  collectionName: 'components_grid_grid_items';
  info: {
    displayName: 'GridItem';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Description: Attribute.Text;
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
    ServiceCard: Attribute.Component<'grid.grid-item', true>;
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

export interface RoomCardRoomCard extends Schema.Component {
  collectionName: 'components_room_card_room_cards';
  info: {
    displayName: 'RoomCard';
    description: '';
  };
  attributes: {
    RoomName: Attribute.String;
    CasualHire: Attribute.String;
    PermHire: Attribute.String;
    CommGroups: Attribute.String;
    Capacity: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home-card.card-text': HomeCardCardText;
      'header.cover-image': HeaderCoverImage;
      'carousel.carousel-item': CarouselCarouselItem;
      'list.dot-point': ListDotPoint;
      'grid.grid-item': GridGridItem;
      'grid.grid-group': GridGridGroup;
      'cards.card-text': CardsCardText;
      'room-card.room-card': RoomCardRoomCard;
    }
  }
}
