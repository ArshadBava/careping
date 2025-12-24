import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug } from '../services/api';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await getBlogBySlug(slug);
                setBlog(response.data);
            } catch (err) {
                console.error("Error fetching blog details:", err);
                setError("Failed to load article.");
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [slug]);

    if (loading) return <div className="min-h-screen pt-32 text-center text-gray-500">Loading article...</div>;
    if (error || !blog) return <div className="min-h-screen pt-32 text-center text-red-500">{error || "Article not found."}</div>;

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    return (
        <article className="min-h-screen bg-white font-poppins pb-24">
            {/* Hero Image */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
                    <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Journal
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                        {blog.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2"><User className="w-5 h-5" /> CarePing Team</span>
                        <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> {formatDate(blog.created_at)}</span>
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">Healthcare</span>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-2 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-lg prose-blue mx-auto text-gray-700 leading-relaxed"
                >
                    {/* Since description is plain text in our simple model, we just render it. 
                        In a real app, this might be HTML or Markdown. */}
                    {blog.description.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-6 text-lg">
                            {paragraph}
                        </p>
                    ))}
                </motion.div>

                {/* Footer / Share / More */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                    <div>
                        © 2025 CarePing Journal
                    </div>

                </div>
            </div>
        </article>
    );
};

export default BlogDetail;
