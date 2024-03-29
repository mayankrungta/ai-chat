const baseUrl = 'https://general.viveks.info/'


export const POST = async (req: Request) => {
  try {
    const prompt = await req.json();
    console.log("prompt: ", prompt);

    const endPoint = `${baseUrl}/set_json_data`
    const response = await fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    // console.log(response);
  } catch (error) {
    console.error(error);
    return new Response(`Flask Error: ${error}`, {
        status: 400,
      })
  }

  return new Response("Post on Flask Success!", { status: 200 });
}
