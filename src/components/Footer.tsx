export default function Footer() {
    return (
        <footer className="py-8 bg-black border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-600 text-sm hover-gradient-text transition-colors cursor-default">
                    © {new Date().getFullYear()} Sreedev Rajendran. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
