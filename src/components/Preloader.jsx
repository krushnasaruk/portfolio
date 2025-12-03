import React from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <div className="loader-content">
                <motion.div
                    className="loader-logo"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Krushna<span className="dot">.</span>
                </motion.div>
                <div className="loader-bar-wrapper">
                    <motion.div
                        className="loader-bar"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
