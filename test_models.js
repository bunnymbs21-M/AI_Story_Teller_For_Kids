const API_KEY = "AIzaSyD52F8Qf2E50e9u7SIVt7Vx2cQ1U-DumME";

async function testApi() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  const models = data.models.map(m => m.name);
  console.log("Models:", models.join('\n'));
}

testApi();
