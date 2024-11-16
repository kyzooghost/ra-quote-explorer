import { ofetch } from "ofetch";

export async function GET(req: Request) {
  try {

    const response = await ofetch(
      `http://3.25.205.182:4000`,
    );

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
