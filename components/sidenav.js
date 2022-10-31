
export default function SideNav(props) {
    return (
        <aside className="fixed z-20 h-full top-0 left-0 pt-12 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 hidden" aria-label="Sidebar">
            <div className="h-full overflow-y-auto py-4 px-3 bg-gray-50">
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                            <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                            <span className="ml-3">Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}