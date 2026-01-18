import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetail = ({ project, onBack }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const scrollRef = useRef(null);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <section className="min-h-screen pt-32 pb-20 px-5 md:px-10 lg:px-20 bg-bg-main relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/2 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="group mb-12 flex items-center gap-2 text-text-secondary hover:text-white transition-colors cursor-pointer"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="font-mono text-sm uppercase tracking-widest">Back to Projects</span>
                </button>

                {/* Header */}
                <div className="mb-20 space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                    >
                        {project.title}
                    </motion.h1>
                    {project.subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            className="text-accent-primary text-xl md:text-2xl font-mono max-w-3xl italic"
                        >
                            {project.subtitle}
                        </motion.p>
                    )}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-text-secondary text-lg md:text-2xl font-mono max-w-3xl leading-relaxed"
                    >
                        {project.intent}
                    </motion.p>
                </div>

                {/* Main Content: 2-Column */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Left: Story */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent-primary">Story & Vision</h2>
                            <div className="space-y-6 text-text-primary text-lg leading-relaxed whitespace-pre-line">
                                {project.story}
                            </div>
                        </div>

                        {project.whatBuilt && (
                            <div className="space-y-6">
                                <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent-primary">What I Built</h2>
                                <div className="space-y-6 text-text-primary text-lg leading-relaxed whitespace-pre-line">
                                    {project.whatBuilt}
                                </div>
                            </div>
                        )}

                        <div className="space-y-6">
                            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent-primary">
                                {project.systemSteps ? 'How the System Works' : project.whatBuilt ? 'How the System Works' : 'Refinement & Learning'}
                            </h2>
                            {project.systemSteps ? (
                                <ol className="space-y-6 text-text-primary text-lg leading-relaxed">
                                    {project.systemSteps.map((step, index) => (
                                        <li key={index} className="flex gap-4">
                                            <span className="font-mono text-accent-primary font-bold shrink-0">{index + 1}.</span>
                                            <div>
                                                <strong className="text-white font-semibold">{step.title}</strong>
                                                <br />
                                                <span className="text-text-primary">{step.description}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            ) : (
                                <div className="space-y-6 text-text-primary text-lg leading-relaxed whitespace-pre-line">
                                    {project.learned}
                                </div>
                            )}
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-mono text-sm uppercase tracking-widest"
                            >
                                Source Code
                            </a>
                            {project.href && (
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-accent-primary text-white rounded-full hover:brightness-110 transition-all duration-300 font-mono text-sm uppercase tracking-widest"
                                >
                                    Check Live Site
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right: Tech List */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 p-8 lg:p-10 glass-card">
                        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent-primary mb-8">What I worked with</h2>
                        <ul className="space-y-4">
                            {project.techUsedList.map((tech, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-text-secondary font-mono text-lg">
                                    <span className="w-2 h-2 rounded-full bg-accent-primary/60" />
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Visual Proof Section */}
                <div className="mt-32 space-y-12">
                    <div className="space-y-4 text-center lg:text-left">
                        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent-primary">Visual Proof</h2>
                        <p className="text-text-secondary font-mono">Exploring the build through snapshots</p>
                    </div>

                    <div className="relative group">
                        <div className="overflow-hidden rounded-3xl aspect-video bg-white/5 border border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full h-full relative"
                                >
                                    <img
                                        src={project.images[currentImageIndex].url}
                                        alt={project.images[currentImageIndex].caption}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <p className="text-white font-mono text-sm md:text-base opacity-80 max-w-2xl">
                                            {project.images[currentImageIndex].caption}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Controls */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-10">
                            <button
                                onClick={prevImage}
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                ←
                            </button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-10">
                            <button
                                onClick={nextImage}
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                →
                            </button>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center gap-3 mt-8">
                            {project.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`w-12 h-1 transition-all duration-300 ${idx === currentImageIndex ? 'bg-accent-primary' : 'bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;
