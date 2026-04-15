"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Send, Mail, Github, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setError("");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "2333cf35-4ce9-44c2-bba3-398b450032dd");
        formData.append("email", "sreerajar40@gmail.com");
        formData.append("subject", "New Portfolio Contact Form Submission");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                const form = event.target as HTMLFormElement;
                form.reset();
            } else {
                setError(data.message || "Error");
            }
        } catch (err) {
            setError("Connection failed.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-12 flex flex-col font-mono text-sm md:text-base mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4 px-2">
                <span className="text-[#8ab4f8]">~/</span>Contact
                <div className="flex-1 h-px bg-gradient-to-r from-[#333] to-transparent ml-4"></div>
            </h2>

            <div className="flex flex-col bg-[#0a0a0a] rounded-xl border border-[#333] shadow-2xl w-full overflow-hidden">
                {/* Mac Title Bar */}
                <div className="flex items-center bg-[#1a1a1a] border-b border-[#333] px-4 py-3 shrink-0">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="w-full text-center text-[#777] text-xs font-sans tracking-widest">
                        bash: send_message.sh
                    </div>
                </div>

                <div className="flex flex-col md:flex-row">
                {/* Left side info */}
                <div className="w-full md:w-1/3 p-8 md:p-12 bg-[#111] border-b md:border-b-0 md:border-r border-[#333]">
                    <div className="flex items-center gap-3 text-[#4af626] font-bold text-2xl mb-6 tracking-tight">
                        <Terminal size={28} />
                        <h2>Let&apos;s Connect</h2>
                    </div>
                    <p className="text-[#888] leading-relaxed mb-12">
                        My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                    
                    <div className="flex flex-col gap-6 w-full">
                        <div className="text-[#666] tracking-widest text-xs font-bold w-full uppercase mb-2">Available Nodes</div>
                        <Link href="https://github.com/sreedevrajendran" target="_blank" className="flex items-center gap-4 text-[#8ab4f8] hover:text-[#4af626] transition-colors group">
                            <div className="p-3 bg-[#1a1a1a] border border-[#333] rounded-lg group-hover:border-[#4af626] transition-colors"><Github size={20} /></div>
                            <span className="font-bold">GitHub</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sreedev-rajendran-3296b5321/" target="_blank" className="flex items-center gap-4 text-[#8ab4f8] hover:text-[#4af626] transition-colors group">
                           <div className="p-3 bg-[#1a1a1a] border border-[#333] rounded-lg group-hover:border-[#4af626] transition-colors"><Linkedin size={20} /></div>
                            <span className="font-bold">LinkedIn</span>
                        </Link>
                        <Link href="https://www.instagram.com/zrr.dev/" target="_blank" className="flex items-center gap-4 text-[#8ab4f8] hover:text-[#4af626] transition-colors group">
                            <div className="p-3 bg-[#1a1a1a] border border-[#333] rounded-lg group-hover:border-[#4af626] transition-colors"><Instagram size={20} /></div>
                            <span className="font-bold">Instagram</span>
                        </Link>
                        <Link href="https://x.com/HeyItsSreedev" target="_blank" className="flex items-center gap-4 text-[#8ab4f8] hover:text-[#4af626] transition-colors group">
                            <div className="p-3 bg-[#1a1a1a] border border-[#333] rounded-lg group-hover:border-[#4af626] transition-colors"><Twitter size={20} /></div>
                            <span className="font-bold">Twitter</span>
                        </Link>
                    </div>
                </div>

                {/* Right side form */}
                <div className="w-full md:w-2/3 p-8 md:p-12 relative flex items-center justify-center">
                    {isSuccess ? (
                        <div className="text-center flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-[#4af626]/10 rounded-full flex items-center justify-center mb-4">
                                <Send size={40} className="text-[#4af626] translate-x-1" />
                            </div>
                            <div className="text-3xl font-bold text-white tracking-tight">Message Transmitted</div>
                            <div className="text-[#888]">Connection closed by remote server.</div>
                            <button onClick={() => setIsSuccess(false)} className="mt-8 px-6 py-3 bg-[#1a1a1a] border border-[#333] hover:border-[#8ab4f8] hover:text-[#8ab4f8] font-bold rounded-lg transition-all">
                                Send another payload
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="w-full space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold text-[#ffbd2e] tracking-wider uppercase">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-5 py-4 text-white focus:outline-none focus:border-[#8ab4f8] focus:bg-[#111] transition-all placeholder:text-[#555]"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-[#ffbd2e] tracking-wider uppercase">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-5 py-4 text-white focus:outline-none focus:border-[#ff5f56] focus:bg-[#111] transition-all placeholder:text-[#555]"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold text-[#ffbd2e] tracking-wider uppercase">Message Layout</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-5 py-4 text-white focus:outline-none focus:border-[#4af626] focus:bg-[#111] transition-all resize-y placeholder:text-[#555]"
                                    placeholder="Execute initialization sequence..."
                                />
                            </div>

                            {error && <div className="text-[#ff5f56] text-sm font-bold p-4 bg-[#ff5f56]/10 rounded-lg border border-[#ff5f56]/20 text-center">&gt; [ERROR] {error}</div>}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-6 bg-[#27c93f] text-black hover:bg-white hover:text-black font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:bg-[#4ddf62] group"
                            >
                                {isSubmitting ? "Sending..." : (
                                    <>
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
            </div>
        </section>
    );
}
