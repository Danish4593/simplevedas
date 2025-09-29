    import React from 'react';
    import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
    import { Box, Divider } from '@mui/material'; // For Material-UI Box component

    const containerStyle = {
      width: '1000px',
      height: '400px'
    };

    const center = {
      lat: -3.745,
      lng: -38.523
    };

    function Map() {
      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyDC9gAi3AVs2VGbDczI88CqT6QdZCaoOjk' // Replace with your actual API key
      });

      return isLoaded ? (
        <Box sx={{ p: 2 }}> {/* Material-UI Box for padding */}
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
          <Divider sx={{ my: 4,  borderStyle : 'dashed'}} />
        </Box>
      ) : 
      <p>Loading Map...</p>;
    }

    export default Map;