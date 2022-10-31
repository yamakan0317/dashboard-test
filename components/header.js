
export default function Header(props) {
    return (
        <nav className="fixed w-full bg-gradient-to-r from-cyan-500 to-purple-500 border-gray-200 px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <span className="text-white self-center text-xl font-bold whitespace-nowrap">システム名</span>
                </a>
            </div>
        </nav>
    );
}