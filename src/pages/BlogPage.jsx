import React from 'react';
import { blogData } from '../data/BlogData';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, User } from 'lucide-react';

const BlogPage = () => {
    return (
        <div className="pt-28 pb-20 min-h-screen bg-gray-50 font-poppins text-navy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Minimal Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border-b border-gray-200 pb-8"
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">CarePing Editorial</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-navy">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journal</span>.
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl font-light leading-relaxed">
                            Deep dives into healthcare innovation, patient stories, and the future of digital medicine.
                        </p>
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
                    {blogData.map((blog, index) => {
                        // First item is large (2x2)
                        const isLarge = index === 0;

                        return (
                            <motion.article
                                key={blog.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500
                                ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
                            >
                                {/* Image Background */}
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${isLarge ? 'from-black/80 via-black/20' : 'from-black/90 via-black/40'} to-transparent transition-opacity duration-300`}></div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <div className="mb-4">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3
                                            ${isLarge ? 'bg-primary text-white' : 'bg-white/20 backdrop-blur-md text-white border border-white/20'}`}>
                                            {blog.category}
                                        </span>
                                    </div>

                                    <h2 className={`font-bold text-white mb-3 leading-tight group-hover:text-secondary transition-colors
                                        ${isLarge ? 'text-4xl md:text-5xl' : 'text-xl md:text-2xl'}`}>
                                        {blog.title}
                                    </h2>

                                    {isLarge && (
                                        <p className="text-gray-200 text-lg mb-6 line-clamp-2 max-w-2xl">
                                            {blog.excerpt}
                                        </p>
                                    )}

                                    <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-auto">
                                        <div className="flex items-center space-x-4 text-xs md:text-sm text-gray-300 font-medium">
                                            <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blog.author}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.date}</span>
                                        </div>

                                        <button className="bg-white text-navy rounded-full p-2 group-hover:bg-secondary group-hover:text-white transition-colors">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
