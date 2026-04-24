import React from 'react';
import styles from './Inicio.module.css';
import Link from 'next/link';

let InicioData:String = 'Josue Trinidad Potrero'

export default function Inicio() {
    return (
        <>
        <section className={styles.hero + ' ' + styles.section} id="home">
            <div className={styles.hero__container}>
                <div className={styles.hero__content}>
                    <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>
                    <h1 className={styles.hero__title}>Josue Trinidad Potrero</h1>
                    <h2 className={styles.hero__subtitle}>
                        <span className={styles.highlight}>Matemático Aplicado y Computación</span> en Crecimiento
                    </h2>
                    <p className={styles.hero__description}>
                        Estudiante de Matemáticas Aplicadas y Computación en la Facultad de Estudios Superiores Acatlán, apasionado 
                        por crear soluciones digitales innovadoras. Combino el rigor analítico con el diseño de algoritmos
                        eficientes para crear sistemas digitales claros, funcionales y orientados a resultados.
                        Mi enfoque integra estadística, programación y modelado computacional para convertir datos en
                        conocimiento y conocimiento en innovación.

                    </p>

                    <div className={styles.hero__buttons}>
                        <a href="#projects" className={styles.btn + ' ' + styles['btn--primary']}> 
                            <i className="fas fa-rocket"></i> Ver mis proyectos
                        </a>
                        <a href="#contact" className={styles.btn + ' ' + styles['btn--outline']}> 
                        <i className="fas fa-envelope"></i> Contáctame
                        </a>
                    </div>
                </div>
                
                <div className={styles.hero__image}>
                    <div className={styles.hero__blob}>
                        <div className={styles.hero__avatar}>
                            <i className="fas fa-user-astronaut"></i>
                        </div>
                    </div>
                    <div className={'section${styles.hero__decoration--1}'}></div>
                    <div className={'section${styles.hero__decoration--2}'}></div>
                    <div className={'section${styles.hero__decoration--3'}></div>
                </div>
            </div>
            
            <div className={styles.hero__scroll}>
                <a href="#interests" className={styles['hero__scroll-link']}>
                    <span>Scroll</span>
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>
        </section>
    </>
    );
}