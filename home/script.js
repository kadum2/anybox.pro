
        ////setting up 

        const map = L.map('map').setView([33.396600, 44.356579], 9); //leaflet basic map
        //tile layer
        const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: apiKey
        }).addTo(map);


        // stored data 
        ////current ID
        let currentID


        ////set icons 
        let oldIcon = L.icon({
            iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
            shadowSize: [50, 64], // size of the shadow
            shadowAnchor: [4, 62], // the same for the shadow
            iconSize: [25, 41],
            iconAnchor: [12, 41],
        });


        ////getting icon; icon is special object not just an image
        markerIcon = L.icon({
            iconUrl: "https://github.com/pointhi/leaflet-color-markers/blob/master/img/marker-icon-2x-red.png?raw=true",
            shadowSize: [50, 64], // size of the shadow
            shadowAnchor: [4, 62], // the same for the shadow
            iconSize: [25, 41],
            iconAnchor: [12, 41],
        });



        //get data and deploy them
        ////triple linked list
        //make the dom elements; labels, profile, adding a per conts panel 
        ///addeventlistener for them; 
        ///show the related dom element 
        ///set the current id to the selected element id 

        window.onload = async () => {
            ///fetching data; 
            let data = await fetch("/confirmed")
            let rdata = await data.json()
            console.log("get routes; ")
            console.log(rdata)

            ///deploy them; store
            Object.values(rdata.map(e => e.path)).forEach(e => {

                if (e.length != 1) { ////routes part
                    let pathob = L.polyline(e, {
                        color: "red",
                    }).addTo(map)
                    // oldObjects.push(pathId) //dont need old objects
                    pathob.addEventListener("click", (e) => console.log(e.target))
                } else { ////labels part 
                    let label = L.circle(e.path, {
                        fillColor: '#3388FF',
                        fillOpacity: 0.8,
                        radius: 100
                    }).addTo(map)
                }
            })
        }




        /////// features 

        /////add per conts images


        ///////sending 
        let send = document.querySelector("#send")
        send.addEventListener("click", () => {

        })




        //////////// test code; 
        window.onclick = () => {}

