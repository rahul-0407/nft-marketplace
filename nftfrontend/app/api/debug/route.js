export async function POST(req) {
  const body = await req.json();
  console.log("🔥 CLIENT REQUEST:");
  console.log(body);

  console.log("🔥 DATA RECEIVED FROM CLIENT:");
  console.log(body);

  return Response.json({ success: true });
}
