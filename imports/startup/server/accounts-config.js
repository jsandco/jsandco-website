import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const name = 'JS&Co';
const email = '<contact@jsandco.fr>';
const from = `${name} ${email}`;

Accounts.config({
  forbidClientAccountCreation: true,
});

Accounts.emailTemplates.siteName = name;
Accounts.emailTemplates.from = from;

// RESET PASSWORD

Accounts.urls.resetPassword = (token) => Meteor.absoluteUrl(`missing/${token}`, { secure: true });

Accounts.emailTemplates.resetPassword = {
  subject: () => `${name} - Nouveau mot de passe`,
  text: (user, url) => `
    Une demande de réinitialisation de mot de passe
    a été demandée par le compte associé à l'adresse ${user.emails[0].address}.
    \n\nPour définir un nouveau mot de passe, suivez le lien ci-dessous :
    \n\n${url}\n\n
    Si vous n'avez pas demandé à réinitialiser votre mot de passe, ne tenez pas compte de cet email.
    \nSi vous n'êtes pas adhérent à ${name} et n'avez pas de compte sur notre plateforme, contactez-nous
    au plus vite à cette adresse : ${email}.
  `,
};

// ENROLLMENT EMAIL

Accounts.urls.enrollAccount = (token) => Meteor.absoluteURL(`activate/${token}`, { secure: true });

Accounts.emailTemplates.enrollAccount = {
  subject: () => `Bienvenue chez ${name} !`,
  text: (user, url) => `
    Félicitation ! Vous êtes désormais adhérent chez JS&Co !!
    \n\nVotre compte utilisateur vient d'être créé sur le site internet de l'association.
    Pour activer ce compte, suivez sur le lien ci-dessous et choisissez un mot de passe.
    \n\n${url}\n\n
    Si vous n'avez pas pris d'adhésion à ${name}, contactez-nous au plus vite à cet adresse : ${email}.
  `,
};
