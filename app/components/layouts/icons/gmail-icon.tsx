'use client';

import classNames from 'classnames';
import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';

interface GmailIconHandle {
    startAnimation: () => void;
    stopAnimation: () => void;
}

interface GmailIconProps extends HTMLAttributes<HTMLButtonElement> {
    size?: number;
}

const envelopeVariants: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
        transition: {
            duration: 0.4,
            opacity: { duration: 0.1 },
        },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        pathOffset: [1, 0],
        transition: {
            duration: 0.6,
            ease: 'linear',
            opacity: { duration: 0.1 },
        },
    },
};

const flapVariants: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
        transition: {
            duration: 0.4,
            opacity: { duration: 0.1 },
        },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        pathOffset: [1, 0],
        transition: {
            duration: 0.6,
            delay: 0.2,
            ease: 'linear',
            opacity: { duration: 0.1 },
        },
    },
};

const GmailIcon = forwardRef<GmailIconHandle, GmailIconProps>(
    ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
        const envelopeControls = useAnimation();
        const flapControls = useAnimation();

        const isControlledRef = useRef(false);

        useImperativeHandle(ref, () => {
            isControlledRef.current = true;

            return {
                startAnimation: () => {
                    envelopeControls.start('animate');
                    flapControls.start('animate');
                },
                stopAnimation: () => {
                    envelopeControls.start('normal');
                    flapControls.start('normal');
                },
            };
        });

        const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (!isControlledRef.current) {
                envelopeControls.start('animate');
                flapControls.start('animate');
            } else {
                onMouseEnter?.(e);
            }
        };

        const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (!isControlledRef.current) {
                envelopeControls.start('normal');
                flapControls.start('normal');
            } else {
                onMouseLeave?.(e);
            }
        };

        return (
            <button
                type='button'
                className={classNames(
                    `cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center`,
                    className,
                )}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...props}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={size}
                    height={size}
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    viewBox='0 0 24 24'
                    aria-label='Gmail icon'
                >
                    <title>Gmail icon</title>
                    {/* Envelope body */}
                    <motion.rect
                        variants={envelopeVariants}
                        initial='normal'
                        animate={envelopeControls}
                        x='2'
                        y='4'
                        width='20'
                        height='16'
                        rx='2'
                    />
                    {/* Mail flap / arrow */}
                    <motion.polyline
                        variants={flapVariants}
                        initial='normal'
                        animate={flapControls}
                        points='22,6 12,13 2,6'
                    />
                </svg>
            </button>
        );
    },
);

GmailIcon.displayName = 'GmailIcon';

export { GmailIcon };
