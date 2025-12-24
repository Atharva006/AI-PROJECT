import { NextResponse } from "next/server";

export async function GET() {
  // Static list of Perplexity models
  // You can update this list as Perplexity releases new models
  const models = [
    { 
      name: "sonar-pro", 
      displayName: "Sonar Pro", 
      description: "Perplexity's most capable model (Search & Reasoning)" 
    },
    { 
      name: "sonar", 
      displayName: "Sonar", 
      description: "Efficient search-based model" 
    },
    { 
      name: "sonar-reasoning-pro", 
      displayName: "Sonar Reasoning Pro", 
      description: "High-reasoning model (similar to o1)" 
    }
  ];

  return NextResponse.json({ 
    count: models.length,
    models: models 
  });
}