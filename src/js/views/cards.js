import React, {useState, useEffect} from "react";
import axios from "axios";
import Character from "./characters";
import Planet from "./planets";
import Vehicle from "./vehicles";

const Cards = () => {
    const [char, setChar] = useState ([]);
    const [plan, setPlan] = useState ([]);
    const [veh, setVeh] = useState ([]);

    useEffect(() => {
        async function fetchCharData() {
          try {
            const charResponse = await axios.get(`https://swapi.dev/api/people/`, {
              headers: {
                "Content-Type": "application/json",
              },
            });
            const charItems = charResponse.data.results;
            setChar(charItems);
            console.log(charItems)
          } catch (error) {
            console.log(error);
          }
        }
    
        async function fetchPlanData() {
          try {
            const planResponse = await axios.get(`https://swapi.dev/api/planets/`, {
              headers: {
                "Content-Type": "application/json",
              },
            });
            const planItems = planResponse.data.results;
            setPlan(planItems);
          } catch (error) {
            console.log(error);
          }
        }
    
        async function fetchVehData() {
          try {
            const vehResponse = await axios.get(`https://swapi.dev/api/vehicles/`, {
              headers: {
                "Content-Type": "application/json",
              },
            });
            const vehItems = vehResponse.data.results;
            setVeh(vehItems);
          } catch (error) {
            console.log(error);
          }
        }
    
        fetchCharData();
        fetchPlanData();
        fetchVehData();
      }, []);

      
  return ( 
    <>
    <div className="text-center m-5">
        <h1>Characters</h1>
        <div className="d-flex flex-nowrap overflow-auto m-3">
          {char && char.map((item, index) => {
            const charUrl = item.url;
            const arraySplitter = charUrl.split("/");
            const itemIndex = arraySplitter[5];
            return (
                <Character 
                     key={index}
                     characterImage={`https://starwars-visualguide.com/assets/img/characters/${itemIndex}.jpg`}
                     characterName={item.name}
                     gender={item.gender}
                     hair_color={item.hair_color}
                     eye_color={item.eye_color}
                     number={itemIndex}
                />
            )
        })}
        </div>      
      </div>
      <div className="text-center m-5">
        <h1>Vehicles</h1>
        <div className="d-flex flex-nowrap overflow-auto m-3">
          {veh && veh.map((item, index) => {
            const vehUrl = item.url;
            const arraySplitter = vehUrl.split("/");
            const itemIndex = arraySplitter[5];
            return (
                <Vehicle
                    key={index}
                    vehicleImage={`https://starwars-visualguide.com/assets/img/vehicles/${itemIndex}.jpg`}
                    vehicleName={item.name}
                    model={item.model}
                    manufacturer={item.manufacturer}
                    length={item.length}
                    number={itemIndex}
            />
            )
      })}
        </div>      
      </div>
      <div className="text-center m-5">
        <h1>Planets</h1>
        <div className="d-flex flex-nowrap overflow-auto m-3">
          {plan && plan.map((item, index) => {
            const planUrl = item.url;
            const arraySplitter = planUrl.split("/");
            const itemIndex = arraySplitter[5];
            return (
                 <Planet 
                    key={index}
                    planetImage={`https://starwars-visualguide.com/assets/img/planets/${itemIndex}.jpg`}
                    planetName={item.name}
                    population={item.population}
                    terrain={item.terrain}
                    number={itemIndex}
            />
            )
       })}
        </div>      
      </div>
    </>
  )

}

export default Cards;