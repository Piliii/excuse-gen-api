export async function GET() {
  const excuses = [
    "My dog ate the fiber optic cable.",
    "The WiFi joined the teachers' strike.",
    "Aliens asked me for my homework as proof of human intelligence.",
    "My parrot submitted an empty Google Form.",
    "The printer unionized and refused to cooperate."
  ];

  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];

  return Response.json({ excuse: randomExcuse });
}