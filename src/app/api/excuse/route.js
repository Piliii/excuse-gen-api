export async function GET() {
  const excuses = [
    "My dog ate the fiber optic cable.",
    "I have to walk my goldfish.",
    "A subsea internet cable was cut, but it somehow affected only me.",
    "A scheduled rolling blackout in my brain's prefrontal cortex got rescheduled without my consent.",
    "Hold on I'm installing a new software update.",
    "Cloudflare services are down.",
    "A minor DNS spoofing attack rerouted all my motivation to a server in another country.",
    "My emotional support pet rock needed an emergency polishing session.",
    "My location was accidentally used as a test server for the new daylight saving time update. It didn't go well.",
    "A rare solar flare somehow only affected my phone meaning I couldn't use it.",
    "My kernel had a panic attack.",
    "The script for my morning routine had a syntax error on line 1.",
    "404",
    "My consciousness is experiencing high latency, the ping to real life is 9000ms.",
  ];

  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];

  return new Response(JSON.stringify({ excuse: randomExcuse }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}