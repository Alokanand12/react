const songs = [
    {
        id: 1,
        title: "Zamaan",
        artist: "Anoushka Maskey",
        image: "https://d2it17hzymuzje.cloudfront.net/f3650bcfcf63af01b85c41bb4f05e8dc028c1316_SRnFNRwlH.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/f3650bcfcf63af01b85c41bb4f05e8dc028c1316_SRnFNRwlH.mp3"
    },
    {
        id: 2,
        title: "Ye Bikhra Hai Saaman",
        artist: "Padmanabh Gaikwad",
        image: "https://d2it17hzymuzje.cloudfront.net/1aa4a854468e241a49b37d21f9f07b29d4c921c3_VMcKZKIv_.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/1aa4a854468e241a49b37d21f9f07b29d4c921c3_VMcKZKIv_.mp3"
    },
    {
        id: 3,
        title: "Yaadon Ke Jharokhon Se",
        artist: "Mithoon, Sonu Nigam & Shreya Ghoshal",
        image: "https://d2it17hzymuzje.cloudfront.net/e7aef6bc0f1a88472aefc78363a50ef0e7d591a7_nkxN_d-fu.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/e7aef6bc0f1a88472aefc78363a50ef0e7d591a7_nkxN_d-fu.mp3"
    },
    {
        id: 4,
        title: "Wingman",
        artist: "Danish Sood",
        image: "https://d2it17hzymuzje.cloudfront.net/d97b231c5eff458326f1748295a79416fcac0c25_cpYGzjOQmz.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/d97b231c5eff458326f1748295a79416fcac0c25_cpYGzjOQmz.mp3"
    },
    {
        id: 5,
        title: "Waaheguru Kahey Mann Mera",
        artist: "Sukhwinder Singh, Haroon-Gavin & Mandeep Khurana",
        image: "https://d2it17hzymuzje.cloudfront.net/7ac47a86d00812b312ba9e44cf8d2cb88bc211b5_Lz_FpIniB.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/7ac47a86d00812b312ba9e44cf8d2cb88bc211b5_Lz_FpIniB.mp3"
    },
    {
        id: 6,
        title: "Tutte Tutte",
        artist: "Ankit Tiwari",
        image: "https://d2it17hzymuzje.cloudfront.net/054f5adf6842340606adac53b39316d92107c74d_5265rkEW_.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/054f5adf6842340606adac53b39316d92107c74d_5265rkEW_.mp3"
    },
    {
        id: 7,
        title: "Tumhe Apna Banane Ki",
        artist: "Anuradha Paudwal, Kumar Sanu, Sameer",
        image: "https://d2it17hzymuzje.cloudfront.net/a5c01f384178fd0bb0c3e9f3f11836aa80f4ea82_nB4PlpbBC.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/a5c01f384178fd0bb0c3e9f3f11836aa80f4ea82_nB4PlpbBC.mp3"
    },
    {
        id: 8,
        title: "Tum Jo Mile Ho",
        artist: "Sachin-Jigar, Vishal Mishra, Priya Saraiya",
        image: "https://d2it17hzymuzje.cloudfront.net/794cf8dad051e08d1e1a3b136286636f37652226_or0NNqGuJt.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/794cf8dad051e08d1e1a3b136286636f37652226_or0NNqGuJt.mp3"
    },
    {
        id: 9,
        title: "To the Moon",
        artist: "Hans Zimmer",
        image: "https://d2it17hzymuzje.cloudfront.net/6cfe14a37c38e359d6fdc96668ba6d65b41ef22b_tHaP1CeLvg.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/6cfe14a37c38e359d6fdc96668ba6d65b41ef22b_tHaP1CeLvg.mp3"
    },
    {
        id: 10,
        title: "Teri Banga Ri",
        artist: "Padmanabh Gaikwad, Aanandi Joshi",
        image: "https://d2it17hzymuzje.cloudfront.net/b751eb1a6046374dfedea255e8ed7156e98e7c18_V6iBhCMwUr.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/b751eb1a6046374dfedea255e8ed7156e98e7c18_V6iBhCMwUr.mp3"
    },
    {
        id: 13,
        title: "Soni Soni",
        artist: "Darshan Raval, Jonita Gandhi, Rochak Kohli",
        image: "https://d2it17hzymuzje.cloudfront.net/95411e20f5d7ad23ec5979a37bbb9938f2d86c6e_gG4BpT0q85.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/95411e20f5d7ad23ec5979a37bbb9938f2d86c6e_gG4BpT0q85.mp3"
    },
    {
        id: 14,
        title: "Singham Again Title Track",
        artist: "Swanand Kirkire, Santhosh, Ravi Basrur",
        image: "https://d2it17hzymuzje.cloudfront.net/0125262959c21eb67b01b10eca77665bda7d1ccd_i45UFTY1HF.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/0125262959c21eb67b01b10eca77665bda7d1ccd_i45UFTY1HF.mp3"
    },
    {
        id: 15,
        title: "Shamaan De Vele",
        artist: "Yo Yo Honey Singh",
        image: "https://d2it17hzymuzje.cloudfront.net/db9a9beb14a7454133dab0ab1a84f20a71ab72e8_V7sU2wZ2B.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/db9a9beb14a7454133dab0ab1a84f20a71ab72e8_V7sU2wZ2B.mp3"
    },
    {
        id: 16,
        title: "Shaidayee",
        artist: "Suvarna Tiwari, Sadhu S. Tiwari",
        image: "https://d2it17hzymuzje.cloudfront.net/65af60b41e1dcba82a11641562da0ddb4e9d85db_lKKdpxm51_.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/65af60b41e1dcba82a11641562da0ddb4e9d85db_lKKdpxm51_.mp3"
    },
    {
        id: 17,
        title: "Sha Dobara",
        artist: "Shashwat Sachdev, Shanya Kashyap",
        image: "https://d2it17hzymuzje.cloudfront.net/1d3e1b52878a9759b394c0db050a052dcc53e180_76Q7t_EM-.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/1d3e1b52878a9759b394c0db050a052dcc53e180_76Q7t_EM-.mp3"
    },
    {
        id: 18,
        title: "Sajna Ve Sajna",
        artist: "Sunidhi Chauhan, Divya Kumar & Sandesh Shandilya",
        image: "https://d2it17hzymuzje.cloudfront.net/d68b66bf376bd2fa28c8e3369cbc67254460072c_zJ6ZdwYTAg.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/d68b66bf376bd2fa28c8e3369cbc67254460072c_zJ6ZdwYTAg.mp3"
    },
    {
        id: 20,
        title: "Sab Theek Hai",
        artist: "Anurag Saikia",
        image: "https://d2it17hzymuzje.cloudfront.net/5434ce48de31b94c194e388fa8937bc8e885985b_sXnlUf_o0.jpg",
        audio: "https://d2it17hzymuzje.cloudfront.net/5434ce48de31b94c194e388fa8937bc8e885985b_sXnlUf_o0.mp3"
    },
]
export default songs;