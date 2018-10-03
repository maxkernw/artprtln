export interface Sightning {
    author: string;
    commonName: string
    scientificName: string;
    sightingObservers: string;
    sightingState: string;
    owner: string;
    site: {
        coordinates: Coordinates[]
    }
}

export interface Coordinates {
    easting: number;
    northing: number
}
