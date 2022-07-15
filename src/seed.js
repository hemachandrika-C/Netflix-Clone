export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const piece = (Math.random() * 16) | 0;
        const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
        return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Series
    ============================================ */
  // Documentaries

  
  

  // Comedies
  firebase.firestore().collection('series').add({
   
  });
  firebase.firestore().collection('series').add({
  
  });
  firebase.firestore().collection('series').add({
   
  });
  firebase.firestore().collection('series').add({
   
  });
  firebase.firestore().collection('series').add({
  
  });

  // Children
  firebase.firestore().collection('series').add({
   
  });
  firebase.firestore().collection('series').add({
  
  });
  firebase.firestore().collection('series').add({
 
  });
  firebase.firestore().collection('series').add({
   
  });
  firebase.firestore().collection('series').add({
  
  });

  // Crime
  firebase.firestore().collection('series').add({
   
  });
  firebase.firestore().collection('series').add({
   
  });
  firebase.firestore().collection('series').add({
   
  });
  firebase.firestore().collection('series').add({
   
  });
  firebase.firestore().collection('series').add({
  
  });

  // Feel-good
  firebase.firestore().collection('series').add({
  
  });
  firebase.firestore().collection('series').add({
  
  });
  firebase.firestore().collection('series').add({
   
  });
  firebase.firestore().collection('series').add({
   
  });
  firebase.firestore().collection('series').add({
    
  });

  /* Films
    ============================================ */
  // Drama
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Prestige',
    description:
      'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',
    genre: 'drama',
    maturity: '15',
    slug: 'the-prestige',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Fight Club',
    description:
      'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
    genre: 'drama',
    maturity: '15',
    slug: 'fight-club',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Kings Speech',
    description:
      'King George VI tries to overcome his stammering problem with the help of speech therapist Lionel Logue and makes himself worthy enough to lead his country through World War II.',
    genre: 'drama',
    maturity: '15',
    slug: 'kings-speech',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Revenant',
    description:
      'Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion, who betrayed him.',
    genre: 'drama',
    maturity: '15',
    slug: 'the-revenant',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Social Network',
    description:
      'Mark Zuckerberg creates a social networking site, Facebook, with the help of his friend Eduardo Saverin. But soon, a string of lies tears their relationship apart even as Facebook connects people.',
    genre: 'drama',
    maturity: '12',
    slug: 'the-social-network',
  });

  // Suspense
  firebase.firestore().collection('films').add({
    
  });
  firebase.firestore().collection('films').add({
  
  });
  firebase.firestore().collection('films').add({
  
  });
  firebase.firestore().collection('films').add({
   
  });
  firebase.firestore().collection('films').add({
   
  });

  // Children
  firebase.firestore().collection('films').add({
    
  });
  firebase.firestore().collection('films').add({
   
  });
  firebase.firestore().collection('films').add({
  
  });
  firebase.firestore().collection('films').add({
 
  });
  firebase.firestore().collection('films').add({
 
  });

  // Thriller
  firebase.firestore().collection('films').add({
  
  });
  firebase.firestore().collection('films').add({
  
  });
  firebase.firestore().collection('films').add({
   
  });
  firebase.firestore().collection('films').add({
  
  });
  firebase.firestore().collection('films').add({
   
  });

  // Romance
  firebase.firestore().collection('films').add({
   
  });
  firebase.firestore().collection('films').add({
   
  });
  firebase.firestore().collection('films').add({
   
  });
  firebase.firestore().collection('films').add({

  });
  firebase.firestore().collection('films').add({
  
  });
}