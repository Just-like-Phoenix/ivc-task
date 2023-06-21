import React from "react";
import {
  InfoCell,
  InfoRow,
  UserGeo,
  UserInfo,
  UserInfoDiv,
} from "./StyledComponents";
import MapComponent from "./MapComponent";
import { Geo } from "../../types/Geo.type";

interface data {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  street?: string;
  suite?: string;
  geo?: Geo;
}
const UserInfoComponents = (props: data) => {
  return (
    <UserInfoDiv>
      <UserInfo>
        <InfoRow>
          <InfoCell $width={20}>Имя:</InfoCell>
          <InfoCell $width={80}>{props.name}</InfoCell>
        </InfoRow>
        <InfoRow>
          <InfoCell $width={20}>email:</InfoCell>
          <InfoCell $width={80}>{props.email}</InfoCell>
        </InfoRow>
        <InfoRow>
          <InfoCell $width={20}>Телефон:</InfoCell>
          <InfoCell $width={80}>{props.phone}</InfoCell>
        </InfoRow>
        <InfoRow>
          <InfoCell $width={20}>Город:</InfoCell>
          <InfoCell $width={80}>{props.city}</InfoCell>
        </InfoRow>
        <InfoRow>
          <InfoCell $width={20}>Улица:</InfoCell>
          <InfoCell $width={80}>{props.street}</InfoCell>
        </InfoRow>
        <InfoRow>
          <InfoCell $width={20}>Квартира:</InfoCell>
          <InfoCell $width={80}>{props.suite}</InfoCell>
        </InfoRow>
      </UserInfo>
      <UserGeo>
        <MapComponent lat={props.geo?.lat} lng={props.geo?.lng} />
      </UserGeo>
    </UserInfoDiv>
  );
};

export default UserInfoComponents;
