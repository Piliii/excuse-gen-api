export const runtime = "nodejs";

const excuses = {
  tech: [
    "My computer was hacked by a 14-year-old in Siberia.",
    "A subsea internet cable was cut, but it somehow affected only me.",
    "A scheduled rolling blackout in my brain's prefrontal cortex got rescheduled without my consent.",
    "Sorry, windows update.",
    "Hold on I'm installing a new software update.",
    "Cloudflare services are down.",
    "A minor DNS spoofing attack rerouted all my motivation to a server in another country.",
    "My location was accidentally used as a test server for the new daylight saving time update. It didn't go well.",
    "A rare solar flare somehow only affected my phone meaning I couldn't use it.",
    "My kernel had a panic attack.",
    "The script for my morning routine had a syntax error on line 1.",
    "404",
    "My consciousness is experiencing high latency, the ping to real life is 9000ms.",
  ],
  pets: [
    "My dog ate the fiber optic cable.",
    "My dog ate my homework.",
    "I have to walk my goldfish.",
    "My emotional support pet rock needed an emergency polishing session.",
    "I was busy negotiating world peace with my parrot.",
  ],
  meme: [
    "Never gonna give you up, never gonna let you down.",
    "Never gonna run around and desert you.",
    "Never gonna make you cry, never gonna say goodbye.",
    "Never gonna tell a lie and hurt you.",
    "zZzZzZz",
    "You've been Rickrolled.",
  ],
};

const categoryAliases = {
  tech: "tech",
  technology: "tech",
  computers: "tech",
  computer: "tech",
  it: "tech",
  dev: "tech",
  developer: "tech",
  developers: "tech",
  programming: "tech",
  programing: "tech",
  code: "tech",
  coding: "tech",
  software: "tech",
  hardware: "tech",
  internet: "tech",
  network: "tech",
  //
  pets: "pets",
  animals: "pets",
  pet: "pets",
  animal: "pets",
  //
  memes: "meme",
  jokes: "meme",
  funny: "meme",
  joke: "meme",
  humor: "meme",
  humour: "meme",
  lol: "meme",
  lmao: "meme",
  rofl: "meme",
};

const MAX_REQUESTS = 10;
const WINDOW_MS = 60 * 1000;
const ipMap = new Map();

export async function GET(req) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  const now = Date.now();
  const record = ipMap.get(ip) || { count: 0, start: now };

  if (now - record.start > WINDOW_MS) {
    record.count = 0;
    record.start = now;
  }

  record.count++;
  ipMap.set(ip, record);

  if (record.count > MAX_REQUESTS) {
    return new Response(JSON.stringify({ error: "Rate limit exceeded. Try again later." }), {
      status: 429,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }

  const url = new URL(req.url);
  const categoryParam = url.searchParams.get("category");
  let list = [];

  if (categoryParam) {
    const categories = categoryParam
      .split(",")
      .map((c) => categoryAliases[c.trim().toLowerCase()])
      .filter(Boolean);

    categories.forEach((cat) => {
      list.push(...excuses[cat]);
    });
  }

  if (list.length === 0) {
    list = Object.values(excuses).flat();
  }

  const randomExcuse = list[Math.floor(Math.random() * list.length)];

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