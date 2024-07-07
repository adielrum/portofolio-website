import React from 'react';

const Projects = () => {
    const list_project = [
        {"judul":"PTD 2024 Mock Website", "company":"KSEP", "tanggal":"Dec 23 - Jan 24", "link":"https://github.com/MGabrielI45/WebsitePTDKSEP2024"},
        {"judul":"INFEST 2024", "company":"KSEP", "tanggal":"May 24 - June 24", "link":"www.infestitb2024.com"},
        {"judul":"Personal Mini Project", "company":"personal", "tanggal":"May 24", "link":"https://training-0.vercel.app/"}
    ];

    return (
        <div className="container mx-auto mt-8 p-10">
            <h2 className="text-3xl font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {list_project.map((project, index) => (
                    <div key={index} className="bg-white p-4 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{project.judul}</h3>
                        <p className="text-gray-600 mb-2">{project.company}</p>
                        <p className="text-gray-600 mb-2">{project.tanggal}</p>
                        <a href={project.link} className="text-blue-500 hover:underline">{project.link}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
