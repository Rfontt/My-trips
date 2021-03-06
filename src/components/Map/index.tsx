import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapsProps = {
  places?: Place[]
}

const Map = ({ places }: MapsProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {places?.map(({ id, name, location }) => {
      const { longitude, latitude } = location

      return (
        <Marker
          position={[latitude, longitude]}
          title={name}
          key={`place - ${id}`}
        />
      )
    })}
  </MapContainer>
)

export default Map
