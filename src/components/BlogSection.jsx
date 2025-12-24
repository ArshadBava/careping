import React, { useEffect, useState } from 'react';
import { getBlogs } from '../services/api';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await getBlogs();
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    if (loading) {
        return <div className="py-24 text-center text-gray-500">Loading insights...</div>;
    }

    if (blogs.length === 0) {
        return null; // Or show empty state
    }

    // Show only the first 4 blog posts (1 featured + 3 side list)
    const featuredPost = blogs[0];
    const sidePosts = blogs.slice(1, 4);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return (
        <section className="py-24 bg-gray-50 font-poppins text-navy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Our Journal</span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Latest <span className="text-primary italic">Insights</span> & <br />
                            Health Awareness
                        </h2>
                    </div>
                    <Link to="/blog" className="group flex items-center gap-2 text-navy font-semibold border-b-2 border-navy/20 pb-1 hover:border-primary hover:text-primary transition-all">
                        View All Articles
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Magazine Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* LEFT: Featured Post (Span 7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="group relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                                    Healthcare
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug group-hover:text-secondary transition-colors">
                                    {featuredPost.title}
                                </h3>
                                <div className="flex items-center gap-4 text-gray-300 text-sm mb-6">
                                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> CarePing Team</span>
                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {formatDate(featuredPost.created_at)}</span>
                                </div>
                                <Link to={`/blog/${featuredPost.slug}`}>
                                    <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-navy transition-all">
                                        Read Editorial
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Side List (Span 5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col justify-between space-y-8"
                    >
                        {sidePosts.map((post, index) => (
                            <div key={post.id} className="group flex gap-6 items-center p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                                <div className="h-24 w-24 md:h-28 md:w-28 flex-shrink-0 rounded-xl overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                                        <span className="font-bold text-primary">Wellness</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {formatDate(post.created_at)}</span>
                                    </div>
                                    <Link to={`/blog/${post.slug}`}>
                                        <h4 className="text-lg font-bold text-navy leading-snug group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                                            {post.title}
                                        </h4>
                                    </Link>
                                    <Link to={`/blog/${post.slug}`} className="text-sm font-medium text-gray-400 mt-2 inline-flex items-center hover:text-primary">
                                        Read Story <ArrowUpRight className="w-3 h-3 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
