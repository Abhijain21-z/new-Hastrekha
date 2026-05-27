import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const { image, name, dob, birthTime, birthPlace } = await req.json();

    // Extract base64 from data URL
    const base64Data = image.split(",")[1];
    const mimeType = image.match(/:(.*?);/)?.[1] || "image/jpeg";

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const palmreadingPrompt = `You are an expert Vedic palmist and astrologer with deep knowledge of Hastrekha Vigyan (palmistry) and Jyotish (astrology).

Analyze this palm image in detail and provide predictions based on:
1. The major palm lines (Heart Line, Head Line, Life Line, Fate Line)
2. Palm shape and size
3. Finger lengths and positions
4. Mount formations
5. Special marks or patterns

User Details:
- Name: ${name}
- Date of Birth: ${dob}
- Birth Time: ${birthTime}
- Birth Place: ${birthPlace}

Provide your analysis in the following JSON format (respond ONLY with valid JSON, no markdown):
{
  "personality": {
    "en": "English text about personality traits derived from palm analysis",
    "hi": "हिंदी में व्यक्तित्व विश्लेषण"
  },
  "qualities": {
    "en": ["Quality 1", "Quality 2", "Quality 3"],
    "hi": ["गुण 1", "गुण 2", "गुण 3"]
  },
  "weaknesses": {
    "en": ["Weakness 1", "Weakness 2"],
    "hi": ["कमजोरी 1", "कमजोरी 2"]
  },
  "lifePurpose": {
    "en": "English text about life purpose",
    "hi": "जीवन के उद्देश्य के बारे में हिंदी पाठ"
  },
  "careerProfession": {
    "en": "English career guidance",
    "hi": "करियर के लिए हिंदी सुझाव"
  },
  "wealth": {
    "en": "English wealth prediction",
    "hi": "धन संबंधी हिंदी भविष्यवाणी"
  },
  "marriage": {
    "en": "English marriage prediction",
    "hi": "विवाह संबंधी हिंदी भविष्यवाणी"
  },
  "partner": {
    "en": "English partner nature description",
    "hi": "साथी के स्वभाव का हिंदी विवरण"
  },
  "education": {
    "en": "English education prediction",
    "hi": "शिक्षा संबंधी हिंदी भविष्यवाणी"
  },
  "challengingPhases": {
    "en": [{"age": "20-25", "description": "Description"}],
    "hi": [{"age": "20-25", "description": "विवरण"}]
  },
  "property": {
    "en": "English property luck prediction",
    "hi": "संपत्ति भाग्य संबंधी हिंदी भविष्यवाणी"
  },
  "health": {
    "en": "English health indicators",
    "hi": "स्वास्थ्य संबंधी हिंदी संकेत"
  },
  "spiritual": {
    "en": "English spiritual signs",
    "hi": "आध्यात्मिक संकेत संबंधी हिंदी पाठ"
  },
  "luckyElements": {
    "lucky_number": {"en": "7", "hi": "7"},
    "lucky_color": {"en": "Gold", "hi": "सोना"},
    "lucky_day": {"en": "Sunday", "hi": "रविवार"}
  },
  "remedies": {
    "en": ["Remedy 1", "Remedy 2"],
    "hi": ["उपाय 1", "उपाय 2"]
  }
}`;

    const response = await model.generateContent([
      {
        inlineData: {
          data: base64Data,
          mimeType: mimeType,
        },
      },
      {
        text: palmreadingPrompt,
      },
    ]);

    const text = response.response.text();

    // Extract JSON from response (in case it's wrapped in markdown)
    let jsonStr = text;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      jsonStr = jsonMatch[0];
    }

    const analysis = JSON.parse(jsonStr);

    return Response.json(analysis);
  } catch (error) {
    console.error("[v0] Palm analysis error:", error);
    return Response.json(
      {
        error: "Failed to analyze palm",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
