const ZONE_ID = process.env.CLOUDFLARE_ZONE_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
async function purgeCache() {
console.log(" Purging Cloudflare cache");
const response = await fetch(
`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache`,
{
method: "POST",
headers: {
"Authorization": `Bearer ${API_TOKEN}`,
"Content-Type": "application/json",
},
body: JSON.stringify({ purge_everything: true }),
}
);
const data = await response.json();
if (data.success) {
console.log("Cache purged successfully!");
} else {
console.error("Failed to purge cache:", data.errors);
}
}
   purgeCache();
