interface SimpleGeoData {
    display_name: string;
    lat: string;
    lon: string;
}


export const geoCoding = async (address: string): Promise<string[][] | null> => {
    const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    const geoData: SimpleGeoData[] = await geoRes.json();
    console.log(geoData)
    return geoData[0] ? geoData.map(e => [e["display_name"], e["lat"], e["lon"]]) : null
}