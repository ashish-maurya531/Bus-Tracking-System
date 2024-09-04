import React, { useEffect, useRef } from 'react';
import H from '@here/maps-api-for-javascript';
import axios from 'axios';


const Map = ({ apikey },{noOfBuses}) => {
    const mapRef = useRef(null);
    const map = useRef(null);
    const platform = useRef(null);
    const pointList = [
       [28.48095280359979,79.44264614441500 ],
       [29.48095280351000,78.44264614441461],
       [29.480952803591040,81.44264614441461],
       [30.48095280359979,80.44264614441461]]
    

    useEffect(() => {
        // Check if the map object has already been created
        
        
        if (!map.current) {
            // Create a platform object with the API key and useCIT option
            platform.current = new H.service.Platform({
                apikey
            });
            // Obtain the default map types from the platform object:
            const defaultLayers = platform.current.createDefaultLayers({
                pois: true
            });
            
         
            // Instantiate (and display) a map:
            var newMap = new H.Map(
                mapRef.current,
                defaultLayers.vector.normal.map, {
                    zoom: 10,
                    center: {
                        lat: 28.48095280359979,
                        lng: 79.44264614441461,
                    },
                }
            );
            
            
            var icon = new H.map.Icon('./src/assets/icons8-location.gif');
            // var icon2 = new H.map.Icon('./src/assets/location.gif');

            



            const handleList=async () => {
    

                try {
                  const response = await axios.get('http://localhost:3000/driver_location');
                //   console.log((response.data.data));
                  var location = response.data.data;
                  console.log(location);
                  var noOfBuses=location.length;
                  location.forEach((el)=> {
                    console.log(el.busno+" "+el.lat+" "+el.lon);
                    

                    newMap.addObject(new H.map.Marker({lat:el.lat, lng: el.lon},{icon:icon}));
                    newMap.addObject(new H.map.Circle({lat:el.lat, lng: el.lon}, 500));
                });
                } catch (error) {
                    console.error('Login failed:', error.response.data.message);
                }
              };
              handleList();



              const handlePark=async () => {
    

                try {
                  const response = await axios.get('http://localhost:3000/park');
                //   console.log((response.data.data));
                  var park = response.data.data;
                  console.log(park);
                  park.forEach((el)=> {
                    console.log("parked  "+el.busno+" "+el.lat+" "+el.lon);
                    

                    // newMap.addObject(new H.map.Marker({lat:el.lat, lng: el.lon},{icon:icon2}));
                    // newMap.addObject(new H.map.Circle({lat:el.lat, lng: el.lon}, 8000));

                });
                } catch (error) {
                    console.error('Login failed:', error.response.data.message);
                }
              };
              handlePark();
            
          
           
         



        
            const behavior = new H.mapevents.Behavior(
                new H.mapevents.MapEvents(newMap)
            );
           
      
       
            map.current = newMap;
           
            // Create a group that can hold map objects:


        }
    }, [apikey]);

  
    return <div style={{ width: "auto", height: "500px",margin:"20px"}} ref={mapRef} />;
}


export default Map;