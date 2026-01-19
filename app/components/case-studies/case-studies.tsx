'use client';

import { motion } from 'motion/react';

const caseStudies = [
    {
        id: 'payment-api-architecture',
        title: 'High-Throughput Payment API Architecture',
        subtitle: 'Principal Financial Group',
        problem: 'Principal Financial Group needed to modernize their legacy payment infrastructure to handle increasing transaction volumes while maintaining stringent compliance requirements.',
        approach: 'Designed secure payment API architecture using Spring Boot with connection pooling. Integrated AES-256 encryption and built real-time data pipelines with Kafka and Redis.',
        outcome: 'Successfully processed $8.3M+ monthly transactions with 99.96% service uptime. Achieved 100% compliance audit success.',
        technologies: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL'],
        metrics: [
            { value: '$8.3M+', label: 'Monthly Transactions' },
            { value: '99.96%', label: 'Service Uptime' },
            { value: '100%', label: 'Compliance Success' },
        ],
    },
    {
        id: 'kubernetes-microservices',
        title: 'Kubernetes Microservices Platform',
        subtitle: 'Berkshire Hathaway',
        problem: 'Enterprise systems required modernization to handle 2.1M+ daily API requests while reducing latency and enabling dynamic scaling without service interruption.',
        approach: 'Architected containerized microservices on Kubernetes with horizontal pod autoscaling across 12 nodes. Implemented distributed caching and load balancing.',
        outcome: 'Reduced service latency by 25% and improved overall API performance by 34%. Achieved zero-downtime deployments.',
        technologies: ['Kubernetes', 'Docker', 'AWS', 'Spring Boot', 'PostgreSQL'],
        metrics: [
            { value: '2.1M+', label: 'Daily Requests' },
            { value: '34%', label: 'Latency Improvement' },
            { value: 'Zero', label: 'Deployment Downtime' },
        ],
    },
    {
        id: 'serverless-log-ingestion',
        title: 'Serverless Log Ingestion Pipeline',
        subtitle: 'Allstate',
        problem: 'Required a cost-effective solution to process over 5.2GB of logs daily while maintaining real-time monitoring and reducing incident response times.',
        approach: 'Designed Python-based ingestion using AWS Lambda and S3. Created Prometheus/Grafana dashboards with alert-driven root-cause tracking.',
        outcome: 'Reduced compute costs by 34% while processing 5.2GB daily. Decreased incident detection time by 43%.',
        technologies: ['Python', 'AWS Lambda', 'S3', 'Prometheus', 'Grafana'],
        metrics: [
            { value: '5.2GB', label: 'Daily Processing' },
            { value: '34%', label: 'Cost Reduction' },
            { value: '43%', label: 'Faster Detection' },
        ],
    },
];

export default function CaseStudies() {
    return (
        <section id='case-studies' className='section-padding bg-neutral-50 dark:bg-neutral-950'>
            <div className='container-wide'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                        Featured <span className='text-primary-500'>Case Studies</span>
                    </h2>
                    <p className='text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto'>
                        Deep dives into high-impact projects and architectural decisions
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {caseStudies.map((study, index) => (
                        <motion.article
                            key={study.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className='bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-primary-500/50 transition-all group'
                        >
                            {/* Gradient header */}
                            <div className='h-2 bg-gradient-to-r from-primary-500 to-primary-400' />

                            <div className='p-6'>
                                <div className='mb-4'>
                                    <p className='text-sm text-primary-500 font-medium mb-1'>{study.subtitle}</p>
                                    <h3 className='text-xl font-bold group-hover:text-primary-500 transition-colors'>
                                        {study.title}
                                    </h3>
                                </div>

                                {/* Metrics */}
                                <div className='grid grid-cols-3 gap-2 mb-6'>
                                    {study.metrics.map((metric) => (
                                        <div key={metric.label} className='text-center p-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg'>
                                            <p className='text-lg font-bold text-primary-500'>{metric.value}</p>
                                            <p className='text-xs text-neutral-500'>{metric.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Problem */}
                                <div className='mb-4'>
                                    <h4 className='text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-1'>Challenge</h4>
                                    <p className='text-sm text-neutral-700 dark:text-neutral-300'>{study.problem}</p>
                                </div>

                                {/* Approach */}
                                <div className='mb-4'>
                                    <h4 className='text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-1'>Solution</h4>
                                    <p className='text-sm text-neutral-700 dark:text-neutral-300'>{study.approach}</p>
                                </div>

                                {/* Outcome */}
                                <div className='mb-6'>
                                    <h4 className='text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-1'>Outcome</h4>
                                    <p className='text-sm text-neutral-700 dark:text-neutral-300 font-medium'>{study.outcome}</p>
                                </div>

                                {/* Technologies */}
                                <div className='flex flex-wrap gap-2'>
                                    {study.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className='text-xs px-2 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
