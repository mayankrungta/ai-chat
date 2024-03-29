const baseUrl = "https://general.viveks.info/";

export const GET = async (req: Request) => {
  try {
    const endPoint = `${baseUrl}/json_schema`
    const response = await fetch(endPoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
    return Response.json(data) // new Response(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(`Flask Error: ${error}`, {
      status: 400,
    });
  }
};
