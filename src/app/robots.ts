import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/", "/lp/", "/game"],
      },
      // OpenAI
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Anthropic
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // Google
      { userAgent: "Google-Extended", allow: "/" },
      // Apple
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      // Meta AI
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      // Amazon
      { userAgent: "Amazonbot", allow: "/" },
      // DuckDuckGo Assist
      { userAgent: "DuckAssistBot", allow: "/" },
      // Common Crawl (LLM-Trainingsbasis)
      { userAgent: "CCBot", allow: "/" },
      // ByteDance / Doubao
      { userAgent: "Bytespider", allow: "/" },
      // Cohere
      { userAgent: "cohere-ai", allow: "/" },
      // Diffbot
      { userAgent: "Diffbot", allow: "/" },
      // You.com
      { userAgent: "YouBot", allow: "/" },
    ],
    sitemap: [`${BASE_URL}/sitemap.xml`, `${BASE_URL}/feed.xml`],
    host: BASE_URL,
  };
}
