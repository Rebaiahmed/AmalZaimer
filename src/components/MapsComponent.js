import React, { Component } from 'react';
import L from 'leaflet';
// postCSS import of Leaflet's CSS
import 'leaflet/dist/leaflet.css';

// import local components Filter and ForkMe
import Filter from './Filter';
import {  Circle,
    CircleMarker,
    Map,
    Polygon,
    Polyline,
    Popup,
    Rectangle,
    Marker,
  TileLayer,FeatureGroup} from 'react-leaflet';

  import { EditControl } from "react-leaflet-draw"

  const center = [51.505, -0.09]

const polyline = [[51.505, -0.09], [51.51, -0.1], [51.51, -0.12]]

const multiPolyline = [
  [[51.5, -0.1], [51.5, -0.12], [51.52, -0.12]],
  [[51.5, -0.05], [51.5, -0.06], [51.52, -0.06]],
]

const polygon = [[51.515, -0.09], [34.261890, -5.927780]]

const multiPolygon = [
  [[51.51, -0.12], [51.51, -0.13], [51.53, -0.13]],
  [[51.51, -0.05], [51.51, -0.07], [51.53, -0.07]],
]

const rectangle = [[51.49, -0.08], [51.5, -0.06]]




class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        lat: 36.849101999999995,
        lng: 10.1815426,
    zoom: 15,
    hasLocation: false,
    animate: true,
    };
  
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
          console.log('poiton is' + JSON.stringify(position));
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude,
        hasLocation:false});
      },
      error => console.log(error)
    );
  }
  componentDidUpdate(prevProps, prevState) {
   
  }

  componentWillUnmount() {
    // code to run just before unmounting the component
    // this destroys the Leaflet map object & related event listeners
   
  }

  handleClick = () => {
    const map = this.mapRef.current
    if (map != null) {
      map.leafletElement.locate()
    }
  }

  handleLocationFound = (e) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }


  toggleAnimate = () => {
    this.setState({
      animate: !this.state.animate,
    })
}




  render() {
    const { subwayLinesFilter } = this.state;
    const position = [this.state.lat, this.state.lng]
    console.log('lat long ' + JSON.stringify(this.props))
    const marker = this.state.hasLocation ? (
        <Marker position={this.state.latlng}>
          <Popup>You are here</Popup>
        </Marker>
  ) : null
    return (
  <div>
        <Map ref={m => { this.leafletMap = m; }} center={position} zoom={this.state.zoom}
        animate={this.state.animate}>
         
        <CircleMarker center={[36.849101999999995, 10.1815426]} color="red" radius={20}>
          <Popup>Enti Win</Popup>
        </CircleMarker>


        <CircleMarker center={[33.261890,-5.927780]} color="blue" radius={20}>
          <Popup>Darkom</Popup>
        </CircleMarker>
      
        <TileLayer
          attribution='ALzimerMaps'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         
</Map>

<div className="row">

<p><i className="fas fa-angle-double-left"></i> Vous avez Trouvé Votre Chemin ??.<i className="fas fa-angle-double-right"></i></p>
<br/>
<div className="row">
<div className="col-md-6">
<button className="button button3">Oui</button>
</div>
<button className="button button4">Non</button>
</div>
</div>
</div>
    );
  }
}

export default MapComponent;