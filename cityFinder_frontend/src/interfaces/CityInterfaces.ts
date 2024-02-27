export interface CityList {
  id: number;
  name: string;
  description: string;
  img: string;
  key: number;
}
export interface CityAttribute {
    id: number;
    name: string;
    img: string;
    url: string;
    city_id: number;
    created_at: string;
    updated_at: string;
}
export interface CityDetails {
    id: number;
    name: string;
    img: string;
    description: string;
    created_at: string;
    update_at: string;
    lat: string;
    lng: string;
    universities?: CityAttribute[];
    activities?: CityAttribute[];
    accommodations?: CityAttribute[];
    shops?: CityAttribute[];
    transports?: CityAttribute[];
}