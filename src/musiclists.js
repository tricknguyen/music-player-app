import {writable} from "svelte/store";

export const musicList = writable([
    {
        image:"paris.jpg",
        audio:"loveinparis.mp3",
        name:"Love in Paris",
        artist:"Jo Sung Mo"
    },
    {
        image:"happyforyou.jpg",
        audio:"happyforyou.mp3",
        name:"Happy For You",
        artist:"Vu ft Lukas Graham"
    },
    {
        image:"dotoc2.jpg",
        audio:"dotoc2.mp3",
        name:"Độ Tộc 2",
        artist:"Masew x Độ Mixi x Pháo x Phúc Du"
    },
    {
        image:"anyoneofus2.jpg",
        audio:"anyoneofus.mp3",
        name:"Anyone of us",
        artist:"Gareth Gates"
    },
    {
        image:"7Years.jpeg",
        audio:"7years.mp3",
        name:"7 Years",
        artist:"Lukas Graham"
    },
]);
