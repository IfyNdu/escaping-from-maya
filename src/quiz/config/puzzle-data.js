export const PUZZLES = [
  'puzzle1',
  'puzzle2'
];

export default {
  [PUZZLES[0]]: [{
    answer: '1.1',
    body: `Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage (七代目火影, Nanadaime Hokage, literally meaning: Seventh Fire Shadow).`,
    id: 'puzzle1.1',
    mediaData: [
      'https://wallpaperset.com/w/full/1/a/f/454841.jpg',
      'https://pm1.narvii.com/6689/532a007a2bbb09b19981e276199faf6070175040_hq.jpg',
      'https://cdn.wallpapersafari.com/56/83/AuPLFk.jpg',
      'https://cdna.artstation.com/p/assets/images/images/011/236/664/large/chelsea-moore-itachi.jpg?1528504776',
      'https://fsa.zobj.net/crop.php?r=G0cpgfZRfEa-pQ2Z2BJLXu_XF5-vHGp4GNF1jfCiuW2EO82BWV3oKMJ8vptmcMn4_e8MqfGNmgmvEst1eHnwzTB2fC993UnfKdld3tY9ABoIBqeu_BsLY28Z0b-14_6SzLDoBQc0SjLYhkhK'
    ],
    mediaType: 'video',
    onTimeout: () => { console.log('Do Something'); },
    question: 'Who is Naruto?',
    timeLeft: 30000,
    title: 'Loreum puzzle 1.1',
    type: 'TEXT'
  }, {
    answer: 'naruto, sasuke',
    body: `Kakashi Hatake (はたけカカシ, Hatake Kakashi) is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan (写輪眼のカカシ, Sharingan no Kakashi), he is one of Konoha's most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility. To his students on Team 7, Kakashi teaches the importance of teamwork, a lesson he received, along with the Sharingan, from his childhood friend, Obito Uchiha. After the Fourth Shinobi World War, Kakashi becomes Konoha's Sixth Hokage (六代目火影, Rokudaime Hokage, literally meaning: Sixth Fire Shadow).`,
    id: 'puzzle1.2',
    mediaData: ['https://pm1.narvii.com/6689/532a007a2bbb09b19981e276199faf6070175040_hq.jpg'],
    onTimeout: () => { console.log('Do Something'); },
    options: [{
      checked: false,
      id: 'naruto',
      label: 'Naruto'
    }, {
      checked: false,
      id: 'sasuke',
      label: 'Sasuke'
    }, {
      checked: false,
      id: 'hinata',
      label: 'Hinata'
    }, {
      checked: false,
      id: 'neji',
      label: 'Neji'
    }],
    timeLeft: 100000,
    title: 'Loreum puzzle 1.2',
    type: 'MULTIPLE_CHOICE'
  }, {
    answer: '1.3',
    body: `Orochimaru (大蛇丸, Orochimaru) is one of Konohagakure's legendary Sannin. With a life-ambition to learn all of the world's secrets, Orochimaru seeks immortality so that he might live all of the lives necessary to accomplish his task. After being caught red-handed performing unethical experiments on his fellow citizens for the sake of this immortality, Orochimaru defected from Konoha rather than be persecuted for his ambitions, and for many years sought the village's destruction in order to take revenge and demonstrate what he had learned. After several apparent deaths in the pursuit of his goals, Orochimaru realises his approach is flawed through Kabuto Yakushi, his former associate, and begins monitoring the choices and actions of his former apprentice, Sasuke Uchiha.`,
    id: 'puzzle1.3',
    onTimeout: () => { console.log('Do Something'); },
    mediaData: ['https://cdn.wallpapersafari.com/56/83/AuPLFk.jpg'],
    timeLeft: 590000,
    title: 'Loreum puzzle 1.3',
    type: 'TEXT'
  }],
  [PUZZLES[1]]: [{
    answer: 'itachi, gai',
    body: `Itachi Uchiha (うちはイタチ, Uchiha Itachi) was a shinobi of Konohagakure's Uchiha clan who served as an Anbu Captain. He later became an international criminal after murdering his entire clan, sparing only his younger brother, Sasuke. He afterwards joined the international criminal organisation known as Akatsuki, whose activity brought him into frequent conflict with Konoha and its ninja — including Sasuke — who sought to avenge their clan by killing Itachi. Following his death, Itachi's motives were revealed to be more complicated than they seemed and that his actions were only ever in the interest of his brother and village, making him remain a loyal shinobi of Konohagakure to the very end.`,
    id: 'puzzle2.1',
    mediaData: ['https://cdna.artstation.com/p/assets/images/images/011/236/664/large/chelsea-moore-itachi.jpg?1528504776'],
    options: [{
      checked: false,
      id: 'jiraya',
      label: 'Jiraya'
    }, {
      checked: false,
      id: 'itachi',
      label: 'Itachi'
    }, {
      checked: false,
      id: 'shikamaru',
      label: 'Shikamaru'
    }, {
      checked: false,
      id: 'gai',
      label: 'Gai'
    }],
    timeLeft: null,
    title: 'Loreum puzzle 2.1',
    type: 'MULTIPLE_CHOICE'
  }, {
    answer: '2.2',
    body: `Madara Uchiha (うちはマダラ, Uchiha Madara) was the legendary leader of the Uchiha clan. He founded Konohagakure alongside his childhood friend and rival, Hashirama Senju, with the intention of beginning an era of peace. When the two couldn't agree on how to achieve that peace, they fought for control of the village, a conflict which ended in Madara's death. Madara, however, rewrote his death and went into hiding to work on his own plans. Unable to complete it in his natural life, he entrusted his knowledge and plans to Obito Uchiha shortly before his actual death. Years later, Madara would be revived, only to see his plans foiled and ultimately, and finally, realising the error of his ways and making amends with Hashirama before his final death.`,
    id: 'puzzle2.2',
    mediaData: ['https://www.epicquotes.com/wp-content/uploads/2020/05/Madara-Uchiha.png?ezimgfmt=ng%3Awebp%2Fngcb25%2Frs%3Adevice%2Frscb25-1'],
    timeLeft: null,
    title: 'Loreum puzzle 2.2',
    type: 'TEXT'
  }, {
    answer: '2.3',
    body: `Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) is one of the last surviving members of Konohagakure's Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them by killing Itachi. He is added to Team 7 upon becoming a ninja and, through competition with his rival and best friend, Naruto Uzumaki, Sasuke starts developing his skills. Dissatisfied with his progress, he defects from Konoha so that he can acquire the strength needed to exact his revenge. His years of seeking vengeance and his actions that followed become increasingly demanding, irrational and isolates him from others, leading him to be branded as an international criminal. After learning the truth of his brother's sacrifice, later proving instrumental in ending the Fourth Shinobi World War, and being happily redeemed by Naruto, Sasuke decides to return to Konoha and dedicate his life to help protect the village and its inhabitants, becoming referred to as the "Supporting Kage" (支う影, Sasaukage, literally meaning: Supporting Shadow).`,
    id: 'puzzle2.3',
    mediaData: ['https://fsa.zobj.net/crop.php?r=G0cpgfZRfEa-pQ2Z2BJLXu_XF5-vHGp4GNF1jfCiuW2EO82BWV3oKMJ8vptmcMn4_e8MqfGNmgmvEst1eHnwzTB2fC993UnfKdld3tY9ABoIBqeu_BsLY28Z0b-14_6SzLDoBQc0SjLYhkhK'],
    onFinish: () => { console.log('Do Something'); },
    timeLeft: null,
    title: 'Loreum puzzle 2.3',
    type: 'TEXT'
  }]
}
