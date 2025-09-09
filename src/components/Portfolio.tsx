import React, { useState } from 'react';
export function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const projects = [{
    id: 1,
    title: 'Coastal Real Estate',
    category: 'real-estate',
    imageUrl: 'https://images.unsplash.com/photo-1570847188490-c2992b9651cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    videoUrl: 'https://player.vimeo.com/external/517090083.hd.mp4?s=5cd2893f7a64cd9a38a13d3d5e0771d59be4b3bc&profile_id=175'
  }, {
    id: 2,
    title: 'Mountain Wedding',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1506836467174-27f1042aa48c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    videoUrl: 'https://player.vimeo.com/external/517090083.hd.mp4?s=5cd2893f7a64cd9a38a13d3d5e0771d59be4b3bc&profile_id=175'
  }, {
    id: 3,
    title: 'City Skyline',
    category: 'landscape',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1288&q=80',
    videoUrl: 'https://player.vimeo.com/external/517090083.hd.mp4?s=5cd2893f7a64cd9a38a13d3d5e0771d59be4b3bc&profile_id=175'
  }, {
    id: 4,
    title: 'Commercial Property',
    category: 'real-estate',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://player.vimeo.com/external/517090083.hd.mp4?s=5cd2893f7a64cd9a38a13d3d5e0771d59be4b3bc&profile_id=175'
  }, {
    id: 5,
    title: 'Corporate Event',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
    videoUrl: 'https://player.vimeo.com/external/517090083.hd.mp4?s=5cd2893f7a64cd9a38a13d3d5e0771d59be4b3bc&profile_id=175'
  }, {
    id: 6,
    title: 'Forest Aerial',
    category: 'landscape',
    imageUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
    videoUrl: 'https://player.vimeo.com/external/517090083.hd.mp4?s=5cd2893f7a64cd9a38a13d3d5e0771d59be4b3bc&profile_id=175'
  }];
  const tabs = [{
    id: 'all',
    label: 'All Work'
  }, {
    id: 'real-estate',
    label: 'Real Estate'
  }, {
    id: 'events',
    label: 'Events'
  }, {
    id: 'landscape',
    label: 'Landscape'
  }];
  const filteredProjects = activeTab === 'all' ? projects : projects.filter(project => project.category === activeTab);
  const [selectedProject, setSelectedProject] = useState(null);
  return <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through a selection of my recent drone videography and
            photography work.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mt-4"></div>
        </div>
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center bg-white rounded-full p-1 shadow-md">
            {tabs.map(tab => <button key={tab.id} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => setActiveTab(tab.id)}>
                {tab.label}
              </button>)}
          </div>
        </div>
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl" onClick={() => setSelectedProject(project)}>
              <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2 capitalize transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  {project.category.replace('-', ' ')}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <button className="bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-full backdrop-blur-sm transition-colors flex items-center text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                      <path d="M10 16.5L16 12L10 7.5V16.5Z" fill="currentColor" />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    Play Video
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        {/* Video Modal */}
        {selectedProject && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl">
              <button className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors" onClick={() => setSelectedProject(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="aspect-video">
                <video src={selectedProject.videoUrl} controls autoPlay className="w-full h-full object-cover">
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-5 text-white">
                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                <p className="text-gray-300 capitalize">
                  {selectedProject.category.replace('-', ' ')}
                </p>
              </div>
            </div>
          </div>}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </div>
    </section>;
}