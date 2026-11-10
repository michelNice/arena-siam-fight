import './LocationAndSchedule.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
function LocationAndSchedule() {
  const position: [number, number] = [-8.1255, -34.9380];

  const handleDirectionsClick = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      'Rua Gregório de Matos Guerra, 154, Ibura, Jaboatão dos Guararapes, PE'
    )}`;
    window.open(mapsUrl, '_blank');
  };
  return (
    <section className="location-and-schedule">
      <div className="location-and-schedule__header">
        <span className="location-and-schedule__main-subtitle">Horários & Localização</span>
        <h2 className="location-and-schedule__title">Nosso Local</h2>
      </div>

      <div className="location-and-schedule__container">
        <div className="location-and-schedule__details">
          <ul className="location-and-schedule__features plan-card__features">
            <li>✓ SEG, QUA, SEX</li>
            <li>✓ 06:00 - 07:00</li>
            <li>✓ 20:30 - 21:50</li>
          </ul>
        </div>
        <div className="location-and-schedule__map-block">
          <div className="location-and-schedule__map-container">
            <MapContainer
              center={position}
              zoom={16}
              scrollWheelZoom={false}
              style={{ width: '100%', height: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={customIcon}>
                <Popup>Arena Siam Fight</Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="location-and-schedule__info">
            <p className="location-and-schedule__address location-card__address">
              <span className="location-card__prefix">ENDEREÇO COMPLETO:</span>
              <br />
              Rua Gregório de Matos Guerra, 154, Ibura, Jaboatão dos Guararapes, PE, Brazil
            </p>
            <button
              type="button"
              className="location-and-schedule__button plan-card__button plan-card__button--primary"
              onClick={handleDirectionsClick}
            >
              COMO CHEGAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationAndSchedule;