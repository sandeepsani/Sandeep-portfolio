'use client';

import { motion } from 'motion/react';

const education = [
    {
        degree: "Master's in Computer & Information Sciences",
        institution: 'Concordia University, WI',
        period: 'Aug 2022 – May 2024',
        icon: '🎓',
    },
    {
        degree: "Bachelor's in Computer Science",
        institution: 'AVN Institute of Engineering and Technology',
        period: 'Jul 2016 – May 2020',
        icon: '📚',
    },
];

export default function Education() {
    return (
        <section id='education' className='section-padding bg-white dark:bg-black'>
            <div className='container-narrow'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-12'
                >
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                        <span className='text-primary-500'>Education</span>
                    </h2>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto'>
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-primary-500/50 transition-colors text-center'
                        >
                            <span className='text-4xl mb-4 block'>{edu.icon}</span>
                            <h3 className='text-lg font-bold mb-2'>{edu.degree}</h3>
                            <p className='text-primary-500 font-medium mb-1'>{edu.institution}</p>
                            <p className='text-sm text-neutral-500 dark:text-neutral-400'>{edu.period}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
