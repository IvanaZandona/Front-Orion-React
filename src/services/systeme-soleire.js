export async function fetchNasaImages(page = 1) {

  const query = "nebula";

  const response = await fetch(
    `https://images-api.nasa.gov/search?q=${query}&page=${page}&media_type=image`
  );

  if (!response.ok) {
    throw new Error("Error al obtener imágenes");
  }

  const data = await response.json();

  return data.collection.items;
}