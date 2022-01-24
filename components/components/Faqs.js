import React,{ useEffect, useState } from 'react';

import Faq from "react-faq-component";


export default function Faqs() {
  
    const data = {
        title: "FAQ (How it works)",
        rows: [
            {
                title: "Is the 15 minute trial free?,",
                content: `Yes, it is free for the first call.`,
            },
            {
                title: "Do I need anything for the lesson?",
                content:
                    `No, everything is provided.`,
            },
            {
                title: "How do I book lessons?",
                content: `You can visit the pricing page. Once you receive a confirmation. Email me and I will share my calendar.`,
            },
            {
                title: "What will your course teach me ?",
                content: `My course will teach you hot speak confidently and fluently without focusing on grammar rules. It is conversation focused.`,
            },
            {
                title: "Can anyone do the course?",
                content: `Yes, anyone can. All levels are welcome as each lesson is carefully structured for each student.`,
            },
            {
                title: "Can anyone do the course?",
                content: `Yes, anyone can. All levels are welcome as each lesson is carefully structured for each student.`,
            },
            {
                title: "How to join the group lesson?",
                content: `In order to do a group lesson, you need to find some friends that want to do it with you. Or wait for an email from me letting you know there is a space available.`,
            },
        ],
    };

    const styles = {
        bgColor: '#0a253b',
        titleTextColor: "white",
        rowTitleColor: "white",
        rowContentColor: 'white',
        arrowColor: "white",
    };
    
    const config = {
        animate: true,
        arrowIcon: "➕",
        tabFocus: true
    };
  
    return (
  <div className='mb-10 p-2 lg:p-10'>
    <Faq
        data={data}
        styles={styles}
        config={config}
            />
  </div>
  )
}
