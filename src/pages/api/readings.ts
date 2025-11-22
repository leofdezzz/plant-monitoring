export const prerender = false;

import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    // Fetch last 50 results to populate the graph
    const url = "https://api.thingspeak.com/channels/3176708/feeds.json?results=50";
    const response = await fetch(url);
    
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch data from ThingSpeak' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    
    // Transform data for the frontend
    const readings = data.feeds.map((feed: any) => ({
      time: feed.created_at,
      temperature: parseFloat(feed.field1),
      humidity: parseFloat(feed.field2)
    }));

    return new Response(JSON.stringify(readings), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
