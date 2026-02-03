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
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

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
        <section id="contact" className="py-20 relative overflow-hidden bg-black/50">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Let&apos;s <span className="text-pink-500">Connect</span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-12">
                        Specific project in mind or just want to connect? Send me a message below.
                    </p>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 backdrop-blur-sm">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-6 text-pink-400 hover:text-pink-300 underline"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 text-left">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 hover:border-pink-500/50 transition-all"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 hover:border-pink-500/50 transition-all"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 hover:border-pink-500/50 transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                {error && (
                                    <div className="text-red-400 text-sm text-center bg-red-500/10 py-2 rounded-lg">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group"
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

                    <div className="flex justify-center gap-8">
                        <Link
                            href="https://github.com/sreedevrajendran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                        >
                            <Github size={24} />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/sreedev-rajendran-3296b5321/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-full"
                        >
                            <Linkedin size={24} />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href="https://www.instagram.com/zrr.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-500 transition-colors p-2 hover:bg-white/10 rounded-full"
                        >
                            <Instagram size={24} />
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-500">
                        <p className="flex items-center justify-center gap-2">
                            Kerala, India 🇮🇳
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
