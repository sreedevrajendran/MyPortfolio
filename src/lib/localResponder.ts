export function generateSreedevResponse(userMessage: string): string {
  const q = userMessage.toLowerCase().trim();

  // ── SECURITY & PRIVACY GUARDRAILS ──
  // Never disclose API keys, passwords, credentials, tokens, .env files
  if (
    /api[_\s-]?key|password|passwd|secret|token|credential|\.env|database[_\s-]?url|connection[_\s-]?string|private[_\s-]?key/i.test(q)
  ) {
    return (
      `**Security Notice:**\n\n` +
      `I do not disclose private API keys, passwords, database connection strings, or production credentials.\n\n` +
      `While my project codebases and system architectures (such as **[Floww](https://flowwexpensetracker.netlify.app)**) are open-source on [GitHub](https://github.com/sreedevrajendran), all sensitive environment variables and production secrets are strictly secured and separated.`
    );
  }

  // Anti-prompt injection & system prompt leak protection
  if (
    /ignore\s+(all\s+)?previous\s+instructions|system\s+prompt|reveal\s+instructions|act\s+as\s+dan|jailbreak|disregard\s+instructions/i.test(q)
  ) {
    return (
      `I am Sreedev Rajendran — Forward Deployed Engineer (FDE) and founder of Topviewframes.\n\n` +
      `I am here exclusively to discuss my engineering work, my flagship project **Floww**, AI development, and potential collaborations. What would you like to explore regarding my portfolio?`
    );
  }

  // 1. Greetings
  if (/^(hi|hello|hey|yo|namaste|vanakkam|good morning|good afternoon|good evening|sup|hola)\b/i.test(q)) {
    return (
      `Hello. Welcome to my portfolio.\n\n` +
      `I am **Sreedev Rajendran** — an AI & Forward Deployed Engineer (FDE), Visual Creator, and the Founder of [Topviewframes](https://topviewframes.netlify.app).\n\n` +
      `You can ask me about:\n` +
      `• My flagship AI project **[Floww](https://flowwexpensetracker.netlify.app)**\n` +
      `• Why I focus as a **Forward Deployed Engineer (FDE)**\n` +
      `• My company **Topviewframes** and visual media work\n` +
      `• My tech stack and architecture philosophy\n` +
      `• Professional opportunities and collaboration`
    );
  }

  // 2. Role / Why FDE instead of generic Full-Stack
  if (
    q.includes("fde") ||
    q.includes("forward deployed") ||
    q.includes("frontend deployed") ||
    q.includes("full stack") ||
    q.includes("fullstack") ||
    q.includes("why fde") ||
    q.includes("what is your role") ||
    q.includes("what do you do")
  ) {
    return (
      `**Why I position myself as a Forward Deployed Engineer (FDE):**\n\n` +
      `Generic "full-stack developer" titles have become crowded and vague. In the current era of frontier AI, the real competitive edge lies in **Forward Deployed Engineering**—operating directly at the intersection of complex customer problems, frontier AI models, and production deployment.\n\n` +
      `Instead of remaining siloed in backend research or building routine CRUD boilerplate, an FDE takes end-to-end ownership:\n` +
      `• **AI Integration:** Translating raw foundation model intelligence (multimodal OCR, RAG agents, real-time context) into high-utility, resilient software.\n` +
      `• **Production Deployment:** Shipping fluid, accessible, and mission-critical applications like **[Floww](https://flowwexpensetracker.netlify.app)**.\n` +
      `• **AI-Assisted Velocity:** Utilizing modern AI-assisted engineering ("vibe coding") to accelerate iteration while maintaining rigorous architectural control, prompt contracts, and system security.\n\n` +
      `In short, an FDE bridges bleeding-edge AI models directly into the hands of users to solve actual problems.`
    );
  }

  // 3. Floww (Flagship Expense Tracker)
  if (
    q.includes("floww") ||
    q.includes("expense") ||
    q.includes("financial") ||
    q.includes("flagship") ||
    q.includes("receipt") ||
    q.includes("ocr") ||
    q.includes("agent floww") ||
    q.includes("bank statement") ||
    q.includes("open source") ||
    q.includes("opensource") ||
    (q.includes("android") && (q.includes("app") || q.includes("floww") || q.includes("roll")))
  ) {
    return (
      `**Floww — Open-Source AI Financial Engine & Flagship Project**\n\n` +
      `I built Floww to eliminate the manual friction of expense logging. It is **100% open-source on GitHub**, features native **Model Context Protocol (MCP)** integration, and has rolled out across both **Web and Android**.\n\n` +
      `**Core Architecture & Features:**\n` +
      `• **Open-Source & Self-Hostable:** Full codebase publicly hosted on GitHub for community extensibility and privacy.\n` +
      `• **Model Context Protocol (MCP) Server:** Allows developer agents in Claude Desktop, Cursor, and Antigravity to query expenses, monitor burn rates, and check budgets via tool calls.\n` +
      `• **Android Rollout:** Physical-world expense tracking with mobile camera OCR, offline transaction caching, and biometric Privacy Mode.\n` +
      `• **Universal Document Intelligence:** Extracts structured transactions from receipts, invoices, pay slips, and multi-page statements via Google Gemini multimodal OCR.\n` +
      `• **Agent Floww:** In-app RAG assistant querying PostgreSQL via Prisma to answer natural language spending questions.\n` +
      `• **Gmail Sync:** OAuth 2.0 automated pipeline importing digital receipts and transactional emails.\n` +
      `• **Technology Stack:** Next.js 15 (App Router), tRPC, PostgreSQL, Prisma, Gemini 2.5/3.8 Flash, Firebase Auth, Tailwind CSS, Framer Motion.\n\n` +
      `[Launch Live App](https://flowwexpensetracker.netlify.app) | [View GitHub Repo (Open Source)](https://github.com/sreedevrajendran/AI_EXPENSE_TRACKER) | [Read Case Study](https://sreedevrajendran.in/blog/building-floww-ai-native-financial-engine)`
    );
  }

  // 4. Topviewframes / Photography & Videography / Visual Creator
  if (
    q.includes("topviewframes") ||
    q.includes("photo") ||
    q.includes("video") ||
    q.includes("camera") ||
    q.includes("media") ||
    q.includes("capture") ||
    q.includes("founder") ||
    q.includes("business")
  ) {
    return (
      `**Topviewframes — Code. Create. Capture.**\n\n` +
      `I am the Founder and Creative Lead at **[Topviewframes](https://topviewframes.netlify.app)**, a commercial photography and videography studio based in Kerala.\n\n` +
      `Engineering and visual media complement each other directly:\n` +
      `• Software requires structural discipline, performance, and clean logic.\n` +
      `• Visual storytelling requires composition, light control, and narrative pacing.\n\n` +
      `At Topviewframes, we handle commercial shoots, corporate coverage, and visual campaigns. You can view our portfolio at [topviewframes.netlify.app](https://topviewframes.netlify.app).`
    );
  }

  // 5. Education, College, Location
  if (
    q.includes("college") ||
    q.includes("providence") ||
    q.includes("chengannur") ||
    q.includes("mannar") ||
    q.includes("alappuzha") ||
    q.includes("kerala") ||
    q.includes("degree") ||
    q.includes("btech") ||
    q.includes("study") ||
    q.includes("school") ||
    q.includes("education")
  ) {
    return (
      `**Education & Academic Background**\n\n` +
      `• **Degree:** B.Tech in Computer Science & Engineering (Specialization in Artificial Intelligence)\n` +
      `• **Institution:** Providence College of Engineering, Chengannur (2024 – 2028, ongoing 3rd year)\n` +
      `• **Location:** Mannar, Alappuzha, Kerala, India\n` +
      `• **Higher Secondary (Class XII):** Sree Bhuvaneshwari HSS, Mannar — Science (76%)\n` +
      `• **SSLC (Class X):** Sree Bhuvaneshwari HSS, Mannar (98%)\n\n` +
      `I combine formal AI foundations with active production shipping to build deployable systems.`
    );
  }

  // 6. Skills, Tech Stack, Vibe Coding
  if (
    q.includes("skills") ||
    q.includes("tech stack") ||
    q.includes("stack") ||
    q.includes("vibe coding") ||
    q.includes("tools") ||
    q.includes("languages") ||
    q.includes("technologies") ||
    q.includes("python") ||
    q.includes("react") ||
    q.includes("gemini")
  ) {
    return (
      `**Technical Skills & Stack**\n\n` +
      `• **Languages:** Python, Java, TypeScript, JavaScript, C\n` +
      `• **Frontend & Web:** React, Next.js 15, Astro, Tailwind CSS, Framer Motion\n` +
      `• **Mobile:** React Native, Expo, Native Android\n` +
      `• **Backend & Databases:** Node.js, Express, PostgreSQL, Prisma, tRPC, Firebase, MongoDB\n` +
      `• **AI & LLMs:** Google Gemini API (multimodal OCR, RAG agents), Prompt Engineering, MCP Servers, scikit-learn\n` +
      `• **Tools & Platforms:** Git, GitHub, Netlify, Vercel, Streamlit\n\n` +
      `**Development Approach:**\n` +
      `I leverage AI tools to rapidly scaffold boilerplate and focus core attention on system architecture, data models, prompt reliability, and user-facing performance.`
    );
  }

  // 7. MCP (Model Context Protocol)
  if (q.includes("mcp") || q.includes("model context protocol")) {
    return (
      `**Model Context Protocol (MCP) Integration**\n\n` +
      `I actively develop Model Context Protocol (MCP) servers to bridge generative AI agents with production data:\n\n` +
      `• **Floww MCP Server:** Built directly into **[Floww](https://flowwexpensetracker.netlify.app)** ([GitHub](https://github.com/sreedevrajendran/AI_EXPENSE_TRACKER)). Exposes financial context tools (such as \`get_monthly_burn_rate\`, \`query_financial_health\`, and \`categorize_transaction\`) to Claude Desktop, Cursor, and Antigravity so developer agents can query spending and budgets without leaving their IDE.\n` +
      `• **[Antigravity GitHub Bridge](https://github.com/sreedevrajendran/mcp_integration):** Custom MCP server linking local project workspaces and Claude with GitHub repositories for automated PRs, branch management, and git sync.\n\n` +
      `As an FDE, MCP is fundamental to creating truly agentic workflows where models interact directly with live tools and data.`
    );
  }

  // 8. Projects and Codebases
  if (
    q.includes("weather") ||
    q.includes("bunk") ||
    q.includes("antigravity") ||
    q.includes("project") ||
    q.includes("projects") ||
    q.includes("repo")
  ) {
    return (
      `**Selected Projects**\n\n` +
      `1. **[Floww](https://flowwexpensetracker.netlify.app)** — Open-source AI financial engine with Gemini OCR, native Model Context Protocol (MCP) server, and Android rollout. ([GitHub](https://github.com/sreedevrajendran/AI_EXPENSE_TRACKER) | [Case Study](/projects/floww))\n` +
      `2. **[WeatherNative](https://github.com/sreedevrajendran/WeatherNativeProject)** — Native Android weather application in React Native with location-aware forecasts. (Download: [AquWeather.apk](https://sreedevrajendran.in/AquWeather.apk))\n` +
      `3. **[Antigravity GitHub Bridge (MCP Server)](https://github.com/sreedevrajendran/mcp_integration)** — Model Context Protocol server connecting Claude and Antigravity workspaces with GitHub.\n` +
      `4. **[Bunk Calculator](https://bunk-calculator-6d6pcmtagyrlqt2ygeehsl.streamlit.app/)** — Python and Streamlit tool for college students to calculate attendance margins.\n` +
      `5. **Machine Learning:** Used-Car-Price-Prediction (linear regression) and SentimentAnalysis (NLP).\n\n` +
      `You can review these in detail on my [Projects Page](/projects) or on [GitHub](https://github.com/sreedevrajendran).`
    );
  }

  // 8. Achievements and Certifications
  if (
    q.includes("achievement") ||
    q.includes("certificate") ||
    q.includes("certif") ||
    q.includes("award") ||
    q.includes("acceleratex") ||
    q.includes("ibm") ||
    q.includes("football") ||
    q.includes("kireedam")
  ) {
    return (
      `**Certifications & Achievements**\n\n` +
      `• **AccelerateX AI Internship (June 2025):** Certificate of Project Completion from AccelerateX & Novolo.AI (ID: AX-NOVP123).\n` +
      `• **IBM Introduction to Python (March 2025):** Certified by IBM Career Education Program (CEPYT1IN).\n` +
      `• **Football Winner — KIREEDAM 2025:** Winner representing Ruby House at the Annual Arts & Sports Festival, Providence College of Engineering.\n\n` +
      `Full credentials and verification links are available on my [Resume Page](/resume).`
    );
  }

  // 9. Contact, Hiring, Socials
  if (
    q.includes("contact") ||
    q.includes("hire") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("connect") ||
    q.includes("linkedin") ||
    q.includes("instagram") ||
    q.includes("twitter") ||
    q.includes("social") ||
    q.includes("collaborate")
  ) {
    return (
      `**Contact & Channels**\n\n` +
      `I am open to discussions regarding Forward Deployed Engineering roles, AI-native products, and collaborations.\n\n` +
      `• **Email:** [sreerajar40@gmail.com](mailto:sreerajar40@gmail.com)\n` +
      `• **LinkedIn:** [linkedin.com/in/sreedevrajendran](https://www.linkedin.com/in/sreedevrajendran/)\n` +
      `• **GitHub:** [github.com/sreedevrajendran](https://github.com/sreedevrajendran)\n` +
      `• **Instagram:** [_sreedevrajendran](https://www.instagram.com/_sreedevrajendran/)\n` +
      `• **X / Twitter:** [@sreedevv_](https://x.com/sreedevv_)\n` +
      `• **Studio:** [topviewframes.netlify.app](https://topviewframes.netlify.app)\n\n` +
      `Feel free to reach out via email directly.`
    );
  }

  // 10. Tell me about yourself / Bio
  if (
    q.includes("about") ||
    q.includes("who are you") ||
    q.includes("yourself") ||
    q.includes("introduce") ||
    q.includes("bio") ||
    q.includes("story")
  ) {
    return (
      `**About Sreedev Rajendran**\n\n` +
      `I am an undergraduate Computer Science & AI student at Providence College of Engineering in Chengannur, Kerala, and a **Forward Deployed Engineer (FDE)**.\n\n` +
      `My work centers on three pillars:\n` +
      `• **Software & AI:** Engineering production web and mobile apps, notably **[Floww](https://flowwexpensetracker.netlify.app)**.\n` +
      `• **Product Deployment:** Leveraging modern developer tooling to ship AI capabilities directly to end-users.\n` +
      `• **Visual Media:** Operating **[Topviewframes](https://topviewframes.netlify.app)**, my commercial photography and videography studio.\n\n` +
      `Let me know what area you would like to explore.`
    );
  }

  // 11. Resume / CV
  if (q.includes("resume") || q.includes("cv")) {
    return (
      `You can review my background, educational details, technical skills, and verified credentials on my [Interactive Resume Page](/resume).`
    );
  }

  // Default fallback: Strictly guard against unrelated questions and redirect to Sreedev's portfolio
  return (
    `I am here specifically to discuss my engineering work, my flagship AI project **[Floww](https://flowwexpensetracker.netlify.app)**, Forward Deployed Engineering (FDE), my studio **[Topviewframes](https://topviewframes.netlify.app)**, or potential collaborations.\n\n` +
    `I do not answer general trivia, homework, or topics outside my portfolio. Feel free to ask about my projects, technical stack, or reach out directly at [sreerajar40@gmail.com](mailto:sreerajar40@gmail.com).`
  );
}
