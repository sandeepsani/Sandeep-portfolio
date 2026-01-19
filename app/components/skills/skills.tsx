'use client';

import { motion } from 'motion/react';

const skillCategories = [
    {
        name: 'Programming Languages',
        skills: ['Java', 'Go', 'TypeScript', 'JavaScript', 'SQL'],
        icon: '💻',
    },
    {
        name: 'Frameworks & Libraries',
        skills: ['Spring Boot', 'Node.js', 'Express.js', 'React', 'Next.js', 'Redux'],
        icon: '🛠️',
    },
    {
        name: 'Cloud & DevOps',
        skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins'],
        icon: '☁️',
    },
    {
        name: 'Databases & Storage',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'Elasticsearch'],
        icon: '🗄️',
    },
    {
        name: 'System Design',
        skills: ['RESTful APIs', 'GraphQL', 'Microservices', 'gRPC', 'Event-Driven'],
        icon: '🏗️',
    },
    {
        name: 'Monitoring & Observability',
        skills: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch'],
        icon: '📊',
    },
];

export default function Skills() {
    return (
        <section
            id='skills'
            className='section-padding bg-neutral-50 dark:bg-neutral-950'
        >
            <div className='container-wide'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                        Technical <span className='text-primary-500'>Expertise</span>
                    </h2>
                    <p className='text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto'>
                        5 years of hands-on experience with enterprise technologies and modern cloud infrastructure
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            className='bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-primary-500/50 transition-colors'
                        >
                            <div className='flex items-center gap-3 mb-4'>
                                <span className='text-2xl'>{category.icon}</span>
                                <h3 className='font-semibold text-lg'>{category.name}</h3>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className='skill-badge'
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
