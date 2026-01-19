'use client';

import { motion } from 'motion/react';

const experiences = [
    {
        title: 'Software Development Engineer II',
        company: 'Berkshire Hathaway',
        location: 'USA',
        period: 'Jul 2025 – Present',
        bullets: [
            'Built distributed RESTful APIs processing 2.1M daily requests with 34% latency improvement via caching and async event handling',
            'Architected Kubernetes-based microservices reducing latency by 25% with dynamic horizontal scaling across 12 nodes',
            'Optimized PostgreSQL performance achieving 39% faster reporting through schema optimization and index tuning',
            'Configured CloudWatch monitoring with Lambda auto-scaling, improving uptime by 17%',
        ],
        technologies: ['Java', 'Spring Boot', 'Kubernetes', 'PostgreSQL', 'AWS'],
    },
    {
        title: 'Backend Software Engineer',
        company: 'Principal Financial Group',
        location: 'USA',
        period: 'Jul 2024 – Jun 2025',
        bullets: [
            'Engineered secure payment APIs processing $8.3M+ monthly transactions with 99.96% uptime',
            'Streamlined real-time pipelines with Kafka/Redis/PostgreSQL, reducing reconciliation time by 31%',
            'Containerized 6 legacy apps with Docker, decreasing deployment cycles by 64%',
            'Implemented AES-256 encryption achieving 100% compliance audit success',
        ],
        technologies: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'Docker'],
    },
    {
        title: 'Application Developer',
        company: 'Allstate',
        location: 'USA',
        period: 'Dec 2023 – May 2024',
        bullets: [
            'Designed Python-based AWS Lambda ingestion processing 5.2GB logs daily with 34% cost reduction',
            'Created Prometheus/Grafana dashboards reducing incident detection by 43%',
            'Built REST/GraphQL gateways in Node.js reducing endpoint definitions by 28%',
        ],
        technologies: ['Python', 'AWS Lambda', 'Node.js', 'Prometheus', 'Grafana'],
    },
    {
        title: 'Associate Software Engineer',
        company: 'Hexaware Technologies',
        location: 'India',
        period: 'Jun 2020 – May 2022',
        bullets: [
            'Developed 4 multi-tenant Spring Boot platforms supporting 65K+ concurrent users',
            'Improved load distribution efficiency by 21% via Redis caching',
            'Increased automated test coverage to 96% through JUnit integration',
        ],
        technologies: ['Java', 'Spring Boot', 'Redis', 'MySQL', 'JUnit'],
    },
    {
        title: 'Junior Software Engineer',
        company: 'Macro Software Solutions',
        location: 'India',
        period: 'Sep 2019 – May 2020',
        bullets: [
            'Created reusable Java modules reducing redundant code by 27%',
            'Improved service uptime to 99.9% through optimized job scheduling',
            'Authored 82 REST API specifications, reducing onboarding time by 41%',
        ],
        technologies: ['Java', 'Spring MVC', 'SQL', 'REST APIs'],
    },
];

export default function Experience() {
    return (
        <section id='experience' className='section-padding bg-white dark:bg-black'>
            <div className='container-narrow'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                        Professional <span className='text-primary-500'>Experience</span>
                    </h2>
                    <p className='text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto'>
                        5 years of building enterprise-grade systems at Fortune 500 companies
                    </p>
                </motion.div>

                <div className='relative'>
                    {/* Timeline line */}
                    <div className='absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-transparent' />

                    <div className='space-y-12'>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={`${exp.company}-${exp.period}`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='relative pl-8 md:pl-12'
                            >
                                {/* Timeline dot */}
                                <div className='absolute left-0 md:left-4 top-2 w-3 h-3 bg-primary-500 rounded-full -translate-x-1/2 ring-4 ring-white dark:ring-black' />

                                <div className='bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-primary-500/50 transition-colors'>
                                    <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                                        <div>
                                            <h3 className='text-xl font-bold'>{exp.title}</h3>
                                            <p className='text-primary-500 font-medium'>{exp.company}</p>
                                        </div>
                                        <div className='text-sm text-neutral-500 dark:text-neutral-400 mt-2 md:mt-0 md:text-right'>
                                            <p>{exp.period}</p>
                                            <p>{exp.location}</p>
                                        </div>
                                    </div>

                                    <ul className='space-y-2 mb-4'>
                                        {exp.bullets.map((bullet, bulletIndex) => (
                                            <li
                                                key={bulletIndex}
                                                className='text-neutral-700 dark:text-neutral-300 text-sm flex items-start'
                                            >
                                                <span className='text-primary-500 mr-2 mt-1'>▸</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className='flex flex-wrap gap-2'>
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className='text-xs px-2 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
