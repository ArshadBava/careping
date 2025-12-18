import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const MobileAccordion = ({ title, number, children, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${className}`}>
            {/* Header - Clickable on Mobile */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-6 flex items-center justify-between cursor-pointer md:cursor-default"
            >
                <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                    {number && (
                        <span className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                            {number}
                        </span>
                    )}
                    {title}
                </h3>
                {/* Mobile Toggle Icon */}
                <div className="md:hidden text-secondary">
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                </div>
            </div>

            {/* Content - Collapsible on Mobile, Always Visible on Desktop */}
            <div className="hidden md:block px-6 pb-6">
                {children}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden px-6 pb-6"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileAccordion;
