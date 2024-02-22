import React from 'react'

export const MainPage = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
        <header className='bg-white shadow'>
            <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
            </div>
        </header>
        <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0">
            <ul className="space-y-2">
                <li>
                <a href="#" className="flex items-center space-x-2 px-4 py-3 rounded-md bg-gray-900">
                    <span>My Documents</span>
                </a>
                </li>
                <li>
                <a href="#" className="flex items-center space-x-2 px-4 py-3 rounded-md hover:bg-gray-700">
                    <span>Shared with Me</span>
                </a>
                </li>
                <li>
                <a href="#" className="flex items-center space-x-2 px-4 py-3 rounded-md hover:bg-gray-700">
                    <span>Settings</span>
                </a>
                </li>
            </ul>
        </aside>
        <main>
            <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
                Content
                <div className='px-4 py-6 sm:px-0'>
                    <div className='border-4 border-dashed border-gray-200 rounded-lg h-96'>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                {/* Content like document list */}
                                Your content here
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
};
