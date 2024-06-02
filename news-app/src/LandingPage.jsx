import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-6 text-white">
        <h1 className="text-4xl font-bold text-center">Welcome to NewsApp</h1>
      </header>
      
      <main className="container mx-auto p-6">
        <section className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with the Latest News</h2>
          <p className="text-lg text-gray-700">Get the latest news from around the world in various categories.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xcIrcb8DmY2gy3MY1t1x48xrKD1O1hO1Fw&s" 
              alt="News Image" 
              className="w-full h-48 object-contain rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">World News</h3>
            <p className="text-gray-700 mb-4">Stay informed about global events and news.</p>
            <Link to="/world" className="text-blue-500 font-bold">Explore World News</Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46yBabtwDwYTrIquGguoKe3Qa3goq8ymyIA&s" 
              alt="News Image" 
              className="w-full h-48 object-contain rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Business News</h3>
            <p className="text-gray-700 mb-4">Get the latest updates on business and finance.</p>
            <Link to="/business" className="text-blue-500 font-bold">Explore Business News</Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIfzgJov0-EEjHcYgg5OkoRsH4snnn3rd8-VmNaKVdQLzCNIAgIvjWgJ9l99Jh_6mL-A&usqp=CAU" 
              alt="News Image" 
              className="w-full h-48 object-contain rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Technology News</h3>
            <p className="text-gray-700 mb-4">Keep up with the latest advancements in technology.</p>
            <Link to="/technology" className="text-blue-500 font-bold">Explore Technology News</Link>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">How to Navigate</h2>
          <p className="text-lg text-gray-700 mb-4">Use the navigation bar at the top to explore news categories.</p>
          <p className="text-lg text-gray-700">You can also use the links provided in each section to directly access specific news categories.</p>
        </section>
      </main>
      
      {/* <footer className="bg-blue-600 p-6 text-white text-center">
        <p className="text-lg">© 2024 NewsApp. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default LandingPage;
