"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Send, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setError("");

        const formData = new FormData(event.currentTarget);

        // Get your free access key from https://web3forms.com/
        // Sign up with sreerajar40@gmail.com to receive form submissions
        formData.append("access_key", "2333cf35-4ce9-44c2-bba3-398b450032dd");

        // This ensures emails are sent to your address
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
                setError(data.message || "Something went wrong. Please try again.");
            }
        } catch (err) { // eslint-disable-line @typescript-eslint/no-unused-vars
            setError("Failed to send message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">
                        Let&apos;s Connect
                    </h2>

                    <p className="text-xl text-gray-400 mb-12 font-medium">
                        Specific project in mind or just want to connect? Send me a message below.
                    </p>

                    <div className="bg-[#1c1c1f] border border-white/5 rounded-[40px] p-8 md:p-12 mb-12 shadow-xl">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-violet-600/20 to-black/20 text-violet-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send size={40} className="translate-x-1" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                                <p className="text-gray-400 text-lg mb-8">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold transition-all"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 text-left">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-300 ml-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full bg-[#28292d] border border-transparent rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#8ab4f8] hover:bg-[#33353a] transition-all placeholder:text-gray-500"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-gray-300 ml-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full bg-[#28292d] border border-transparent rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#f28b82] hover:bg-[#33353a] transition-all placeholder:text-gray-500"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-300 ml-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        className="w-full bg-[#28292d] border border-transparent rounded-3xl px-5 py-5 text-white focus:outline-none focus:border-[#fdd663] hover:bg-[#33353a] transition-all resize-none placeholder:text-gray-500"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                {error && (
                                    <div className="text-[#f28b82] text-sm font-medium text-center bg-[#f28b82]/10 py-3 rounded-2xl">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-violet-600 to-black text-white hover:from-violet-500 hover:to-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed font-bold py-4 rounded-full transition-all flex items-center justify-center gap-2 group hover:scale-[1.02] shadow-lg mt-4"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    <div className="flex justify-center gap-6">
                        <Link
                            href="https://github.com/sreedevrajendran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white hover:bg-white/10 transition-all p-4 rounded-full bg-[#1c1c1f] hover:scale-110 duration-300"
                        >
                            <Github size={24} />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/sreedev-rajendran-3296b5321/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#0077b5] hover:bg-[#0077b5]/10 transition-all p-4 rounded-full bg-[#1c1c1f] hover:scale-110 duration-300"
                        >
                            <Linkedin size={24} />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href="https://www.instagram.com/zrr.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#E1306C] hover:bg-[#E1306C]/10 transition-all p-4 rounded-full bg-[#1c1c1f] hover:scale-110 duration-300"
                        >
                            <Instagram size={24} />
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </div>

                    <div className="mt-16 pt-8 text-sm text-gray-500 font-medium">
                        <p className="flex items-center justify-center gap-2">
                            Kerala, India 🇮🇳
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
