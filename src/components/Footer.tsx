export default function Footer() {
    return (
        <footer className="py-6 bg-black border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Sreedev Rajendran. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
