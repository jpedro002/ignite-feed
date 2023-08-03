import { Post } from "@/types/types";

export const posts:Post[] = [
    {
        id:1,
        author:{
            avatarUrl: 'https://github.com/jpedro002.png',
            name: 'João Pedro',
            role: 'juninho @ Triaddevs'
        },
        content:[
            {type: 'paragraph',content: 'Fala galera 👋'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link',content: 'jane.design/doctorcare'}
        ]
        
        
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/jpedro002.png',
            name: 'Maria Silva',
            role: 'Marketing Specialist'
        },
        content: [
            { type: 'paragraph', content: 'Hey everyone, check out our latest product launch!' },
            { type: 'paragraph', content: 'We are excited to bring this innovative solution to you.' },
            { type: 'link', content: 'example.com/products' }
        ]
    },
    {
        id: 3,
        author: {
            avatarUrl: 'https://github.com/jpedro002.png',
            name: 'Alex Johnson',
            role: 'Data Scientist'
        },
        content: [
            { type: 'paragraph', content: 'Greetings to the data science community!' },
            { type: 'paragraph', content: 'Let\'s discuss the latest trends in machine learning.' },
            { type: 'link', content: 'datascienceforum.com' }
        ]
    },
    {
        id: 4,
        author: {
            avatarUrl: 'https://github.com/jpedro002.png',
            name: 'Laura Martinez',
            role: 'Travel Blogger'
        },
        content: [
            { type: 'paragraph', content: 'Hello, travel enthusiasts!' },
            { type: 'paragraph', content: 'Join me on my latest adventure to an exotic destination.' },
            { type: 'link', content: 'laurastravels.com' }
        ]
    },
    {
        id: 5,
        author: {
            avatarUrl: 'https://github.com/jpedro002.png',
            name: 'Michael Johnson',
            role: 'Fitness Trainer'
        },
        content: [
            { type: 'paragraph', content: 'Hey fitness fam!' },
            { type: 'paragraph', content: 'Let\'s crush our workout goals together.' },
            { type: 'link', content: 'fitnesstips.com' }
        ]
    },
    {
        id: 6,
        author: {
            avatarUrl: 'https://github.com/jpedro002.png',
            name: 'Sarah Lee',
            role: 'Foodie'
        },
        content: [
            { type: 'paragraph', content: 'Food lovers, unite!' },
            { type: 'paragraph', content: 'Join me in exploring the culinary delights of different cultures.' },
            { type: 'link', content: 'sarahsfoodblog.com' }
        ]
    }

]