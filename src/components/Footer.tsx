export default function Footer() {
    return (
        <footer className="pb-12 bg-transparent">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm hover:text-white transition-colors cursor-default font-medium">
                    © {new Date().getFullYear()} Sreedev Rajendran. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
