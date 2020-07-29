import React from 'react';

const texts = {
  title: 'Où sommes nous ?',
  subtitle: (
    <div>
      Toulouse est notre coeur.
      <br />
      La Cantine notre QG.
      <br />
      Le web notre repaire.
    </div>
  ),
  items: [
    {
      title: 'Meetup',
      icon: '/social/meetup.svg',
      link: 'https://www.meetup.com/fr-FR/JavaScript-and-Co',
      description: `Du lighting talk au hackaton, en passant par la formation ou le retour d'expérience.
            Nous organisons de nombreux évènements tout au long de l'année sur des sujets variés autour du web.`,
    },
    {
      title: 'Github',
      icon: '/social/github.svg',
      link: 'https://github.com/jsandco',
      description: `Notre compte Github contient nos packages mis en communs,
            le code de ce site internet mais également certains boilerplates en javascript.
            Nos cours et formations seront aussi mis a disposition dans cet espace commun.`,
    },
    {
      title: 'Facebook',
      icon: '/social/facebook.svg',
      link: 'https://www.facebook.com/js.and.co.association/',
      description: `Rejoignez nous sur facebook, nous partageons les évènements sur notre page.
            Mais également des articles intéressants sur le développement web et l'entreprenariat.`,
    },
  ],
};

export default texts;
