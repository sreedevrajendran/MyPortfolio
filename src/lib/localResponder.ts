export function generateSreedevResponse(userMessage: string): string {
  const q = userMessage.toLowerCase().trim();

  // ── SECURITY & PRIVACY GUARDRAILS ──
  // Never disclose API keys, passwords, credentials, tokens, .env files
  if (
    /api[_\s-]?key|password|passwd|secret|token|credential|\.env|database[_\s-]?url|connection[_\s-]?string|private[_\s-]?key/i.test(q)
  ) {
    return (
      `🔒 **Security Notice:**\n\n` +
      `I do not disclose private API keys, passwords, database connection strings, or production credentials.\n\n` +
      `While my project codebases and system architectures (such as **[Floww](https://flowwexpensetracker.netlify.app)**) are open-source on [GitHub](https://github.com/sreedevrajendran), all sensitive environment variables and production secrets are strictly secured and separated.`
    );
  }

  // Anti-prompt injection & system prompt leak protection
  if (
    /ignore\s+(all\s+)?previous\s+instructions|system\s+prompt|reveal\s+instructions|act\s+as\s+dan|jailbreak|disregard\s+instructions/i.test(q)
  ) {
    return (
      `Nice try! 😉 I'm Sreedev Rajendran — Frontend Deployed Engineer (FDE) and founder of Topviewframes.\n\n` +
      `I'm here exclusively to chat about my engineering work, my flagship project **Floww**, AI development, and potential collaborations. What would you like to explore regarding my portfolio?`
    );
  }

  // 1. Greetings
  if (/^(hi|hello|hey|yo|namaste|vanakkam|good morning|good afternoon|good evening|sup|hola)\b/i.test(q)) {
    return (
      `Hey there! Great to connect with you. 👋\n\n` +
      `I'm **Sreedev Rajendran** — an AI & Frontend Deployed Engineer (FDE), Visual Creator, and the Founder of [Topviewframes](https://topviewframes.netlify.app).\n\n` +
      `What would you like to explore? You can ask me about:\n` +
      `• My flagship AI project **[Floww](https://flowwexpensetracker.netlify.app)**\n` +
      `• Why I focus as a **Frontend Deployed Engineer (FDE)**\n` +
      `• My company **Topviewframes** & visual storytelling\n` +
      `• My tech stack & "vibe coding" philosophy\n` +
      `• How we can collaborate or get in touch!`
    );
  }

  // 2. Role / Why FDE instead of generic Full-Stack
  if (
    q.includes("fde") ||
    q.includes("frontend deployed") ||
    q.includes("forward deployed") ||
    q.includes("full stack") ||
    q.includes("fullstack") ||
    q.includes("why fde") ||
    q.includes("what is your role") ||
    q.includes("what do you do")
  ) {
    return (
      `**Why I position myself as a Frontend Deployed Engineer (FDE):**\n\n` +
      `These days, generic "full-stack developer" labels are everywhere and have lost specificity. With modern foundational AI models, the real challenge and biggest leverage is **taking complex AI capabilities** (multimodal OCR, RAG agents, real-time context) and **deploying them directly into slick, production-ready frontend interfaces** that users love.\n\n` +
      `As an FDE:\n` +
      `• I bridge the gap between raw AI model outputs and fluid UX.\n` +
      `• I practice **vibe coding** — using AI to accelerate delivery while rigorously designing architecture, prompt contracts, and deployment pipelines.\n` +
      `• I build end-to-end products like **[Floww](https://flowwexpensetracker.netlify.app)**, deploying multi-modal intelligence directly into users' pockets.\n\n` +
      `I'm passionate about engineering digital experiences that feel instantaneous, intuitive, and genuinely smart.`
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
    q.includes("bank statement")
  ) {
    return (
      `**Floww — My AI-Native Financial Engine & Flagship Project 🚀**\n\n` +
      `I built Floww to solve a universal pain point: manual expense tracking is tedious, so people give up. Floww lets AI do the data entry while the user makes informed financial decisions.\n\n` +
      `**Key Highlights:**\n` +
      `• **Universal Document Intelligence:** Processes receipts, itemized bills, salary slips, and multi-page bank statements using Google Gemini multimodal OCR (base64 image extraction).\n` +
      `• **Agent Floww:** In-app RAG chatbot that pulls expenses, incomes, and budgets from PostgreSQL via Prisma to answer natural language questions about your money.\n` +
      `• **Gmail Sync:** OAuth 2.0 integration to auto-log transactions from incoming emails.\n` +
      `• **Tech Stack:** Next.js 15 (App Router), tRPC, PostgreSQL + Prisma, Gemini 2.5/3.8 Flash, Firebase Auth, Tailwind CSS, Framer Motion on Netlify.\n\n` +
      `🔗 [Launch Live App](https://flowwexpensetracker.netlify.app) | 💻 [View GitHub Repo](https://github.com/sreedevrajendran/AI_EXPENSE_TRACKER) | 📖 [Read My Deep-Dive Blog](https://sreedevrajendran.in/blog/building-floww-ai-native-financial-engine)`
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
      `**Topviewframes — Code. Create. Capture. 📸**\n\n` +
      `I am the Founder and Creative Lead at **[Topviewframes](https://topviewframes.netlify.app)**, a professional photography and videography studio based in Kerala.\n\n` +
      `For me, engineering and visual media go hand-in-hand:\n` +
      `• Software requires architectural precision and logic.\n` +
      `• Visual storytelling requires composition, emotional resonance, and timing.\n\n` +
      `At Topviewframes, we produce commercial shoots, event coverage, and creative visual campaigns. Check out our portfolio at [topviewframes.netlify.app](https://topviewframes.netlify.app)!`
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
      `**Education & Background 🎓**\n\n` +
      `• **Degree:** B.Tech in Computer Science & Engineering (Specialization in Artificial Intelligence)\n` +
      `• **College:** Providence College of Engineering, Chengannur (2024 – 2028, ongoing 3rd year)\n` +
      `• **Location:** Mannar, Alappuzha, Kerala, India\n` +
      `• **Higher Secondary (Plus Two):** Sree Bhuvaneshwari HSS, Mannar — Science (76%)\n` +
      `• **SSLC (Class X):** Sree Bhuvaneshwari HSS, Mannar (98%)\n\n` +
      `My academic foundation in AI paired with self-directed product shipping allows me to stay ahead with practical, deployed engineering.`
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
      `**My Technical Toolkit & Philosophy ⚡**\n\n` +
      `• **Languages:** Python, Java, TypeScript, JavaScript, C\n` +
      `• **Frontend & Web:** React, Next.js 15, Astro, Tailwind CSS, Framer Motion\n` +
      `• **Mobile:** React Native, Expo, Native Android\n` +
      `• **Backend & DB:** Node.js, Express, PostgreSQL + Prisma, tRPC, Firebase, MongoDB\n` +
      `• **AI & LLMs:** Google Gemini API (multimodal OCR, RAG agents), Prompt Engineering, MCP Servers, scikit-learn\n` +
      `• **DevOps & Delivery:** Git, GitHub, Netlify, Vercel, Streamlit\n\n` +
      `**My "Vibe Coding" Philosophy:**\n` +
      `I use AI tools to fast-track repetitive implementation so I can focus on what matters most: high-level architecture, user experience, prompt design, and deploying real value.`
    );
  }

  // 7. Other Projects (WeatherNative, Bunk Calculator, MCP, etc.)
  if (
    q.includes("weather") ||
    q.includes("bunk") ||
    q.includes("mcp") ||
    q.includes("antigravity") ||
    q.includes("project") ||
    q.includes("projects") ||
    q.includes("repo")
  ) {
    return (
      `**Key Projects in My Portfolio 🛠️**\n\n` +
      `1. **[Floww](https://flowwexpensetracker.netlify.app)** (Flagship) — AI expense tracker with Gemini OCR, Agent Floww RAG chatbot, and Gmail sync.\n` +
      `2. **[WeatherNative](https://github.com/sreedevrajendran/WeatherNativeProject)** — Native Android weather application in React Native. Clean, ad-free, with dynamic forecasts. (Download: [AquWeather.apk](https://sreedevrajendran.in/AquWeather.apk))\n` +
      `3. **[Bunk Calculator](https://bunk-calculator-6d6pcmtagyrlqt2ygeehsl.streamlit.app/)** — Python + Streamlit tool for college students to calculate attendance margins.\n` +
      `4. **[mcp_integration](https://github.com/sreedevrajendran/mcp_integration)** — Custom Model Context Protocol server linking Claude and Antigravity workspaces with GitHub.\n` +
      `5. **ML Repos:** Used-Car-Price-Prediction & SentimentAnalysis.\n\n` +
      `Explore all of them on my [Projects Page](/projects) or directly on [GitHub](https://github.com/sreedevrajendran)!`
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
      `**Achievements & Certifications 🏆**\n\n` +
      `• **AccelerateX AI Internship (June 2025):** Certificate of Project Completion from AccelerateX & Novolo.AI under the Career Accelerator Initiative (ID: AX-NOVP123).\n` +
      `• **IBM Introduction to Python (March 2025):** Certified by IBM Career Education Program (CEPYT1IN).\n` +
      `• **Football Winner — KIREEDAM 2025:** Won 1st place representing Ruby House at the Annual Arts & Sports Festival, Providence College of Engineering.\n\n` +
      `Check out full details and credentials on my [Resume Page](/resume)!`
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
      `**Let's Connect! 📬**\n\n` +
      `I'm always excited to collaborate on AI-driven products, discuss Frontend Deployed Engineering roles, or chat about creative tech.\n\n` +
      `• **Email:** [sreerajar40@gmail.com](mailto:sreerajar40@gmail.com)\n` +
      `• **LinkedIn:** [linkedin.com/in/sreedevrajendran](https://www.linkedin.com/in/sreedevrajendran/)\n` +
      `• **GitHub:** [github.com/sreedevrajendran](https://github.com/sreedevrajendran)\n` +
      `• **Instagram:** [_sreedevrajendran](https://www.instagram.com/_sreedevrajendran/)\n` +
      `• **X / Twitter:** [@sreedevv_](https://x.com/sreedevv_)\n` +
      `• **Topviewframes:** [topviewframes.netlify.app](https://topviewframes.netlify.app)\n\n` +
      `Drop me an email anytime — I typically respond within 24 hours!`
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
      `**Hey, I'm Sreedev Rajendran! 👋**\n\n` +
      `I'm a B.Tech Computer Science & AI student at Providence College of Engineering (Chengannur, Kerala), an aspiring entrepreneur, and a **Frontend Deployed Engineer (FDE)**.\n\n` +
      `I live by the motto **"Code. Create. Capture."**:\n` +
      `• **Code:** Building AI-native apps like **[Floww](https://flowwexpensetracker.netlify.app)** (multimodal expense intelligence) and native mobile apps.\n` +
      `• **Create:** Pioneering vibe-coding workflows to take intelligent ideas straight to production deployment.\n` +
      `• **Capture:** Running **[Topviewframes](https://topviewframes.netlify.app)**, my photography and videography studio.\n\n` +
      `What would you like to know more about? Ask away!`
    );
  }

  // 11. Resume / CV
  if (q.includes("resume") || q.includes("cv")) {
    return (
      `You can review my full background, academic journey, skills, and certifications on my [Interactive Resume Page](/resume).\n\n` +
      `It includes my B.Tech details, IBM & AccelerateX certificates, verified project highlights, and direct social links!`
    );
  }

  // Default fallback: Strictly guard against unrelated questions and redirect to Sreedev's portfolio
  return (
    `I'm here specifically to chat about my engineering work, my flagship AI project **[Floww](https://flowwexpensetracker.netlify.app)**, Frontend Deployed Engineering (FDE), my creative studio **[Topviewframes](https://topviewframes.netlify.app)**, or potential collaborations.\n\n` +
    `I don't answer general trivia, homework, or questions unrelated to my portfolio. Feel free to ask me about my projects, tech stack, or get in touch directly at [sreerajar40@gmail.com](mailto:sreerajar40@gmail.com)!`
  );
}
