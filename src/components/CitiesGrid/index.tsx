import { Grid } from "@chakra-ui/react";
import { useState } from "react";
import { CityCard } from "./CityCard";
import { data } from "../../services/fakeApi";

interface CitiesGridProps {
    continent: string;
}

export function CitiesGrid( { continent }: CitiesGridProps) {

    const [cities, setCities] = useState(data[continent]);

    return (
        <Grid templateColumns='repeat(auto-fit, minmax(250px, 1fr))' gap='6'>
            {cities.map(city => {
                return (
                    <CityCard
                        key={city.city}
                        imgCover={city.imgCover}
                        city={city.city}
                        country={city.country}
                        imgFlag={city.imgFlag}
                    />
                );
            })}
        </Grid>
    )
}