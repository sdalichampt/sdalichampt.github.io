---
layout: article
title: Stockage de mot de passe en clair, mauvaise pratique chez mon opérateur mobile.
category: autre
tags: [sécurité informatique]
---

Je rencontre en ce moment un petit soucis avec mon mobile. Rien de grave je pense, juste ma carte SIM qui ne fonctionne
plus. Comme tout le monde, après quelques tests infructueux effectués dans mon coin, j'ai pris contact avec la hotline
de mon opérateur. Mais là n'est pas vraiment le sujet.

Je suis abonné chez Virgin Mobile depuis 3 ans et j'ai déjà plusieurs fois appeler la hotline à qui ne je n'ai pas de
reproche à faire. Mais cette fois, alors que le conseiller remplissait le dossier pour le transmettre au service
technique, une de ses questions m'a vraiment interloquée.

> J'aurais besoin de votre mot de passe?

Je lui ai alors dis que NON je ne lui donnerais pas mon mot de passe par téléphone, que ça ne se faisait pas de donner
son mot de passe.

> De toute façon, je l'ai sous les yeux, c'est juste pour vérification.

Et il me donne alors le premier et dernier chiffre de mon mot de passe. Il a effectivement mon mot de passe sous les
yeux. Puisqu'il a déjà mon mot de passe, autant pas se battre et lui donner en entier, au moins mon dossier pourras
partir au service technique plus vite.

**Et maintenant?**

Chez Virgin Mobile, les mots de passe sont donc stockés en clair et sont de plus accessibles par les employés. On est
ici face à un très bel exemple de ce qu'il ne faut surtout jamais faire en terme de sécurité informatique. Ça tout le
monde le sais, mais visiblement, pas eux.</p>

Même un stagiaire sait qu'il faut [hasher](http://fr.wikipedia.org/wiki/Fonction_de_hachage "Fonction de hachage'")
(voir même mieux [saler](http://fr.wikipedia.org/wiki/Attaque_par_dictionnaire#Salage_de_mot_de_passe "Salage de mot de passe")
puis hacher) les mots de passe avant de les enregistrer où que ce soit. Et qu'un hash [SHA-1](http://fr.wikipedia.org/wiki/SHA-1 "SHA-1")
(ou au pire un [MD5](http://fr.wikipedia.org/wiki/MD5 "MD5")) permet de répondre au besoin d'authentification du client.

Le problème, c'est qu'en cas d'attaque informatique sur le réseau de Virgin Mobile, mon mot de passe (et celui des
autres clients) se retrouvera cette fois dans la nature, en clair, avec toute les conséquences que cela implique. Et en
voyant comment la plus élémentaire des protection n'est pas appliquée, j'imagine que les failles doivent être nombreuses
chez vm.

Pour finir, voila pourquoi il faut utiliser des mots de passe différents pour chaque comptes que vous utilisez, car même
si votre mot de passe est solide et que vous l'avez choisis avec soin, il n'est pas impossible qu'il se retrouve chez
quelqu'un pour qui votre propre sécurité n'est pas une priorité. Bien sûr, il est aussi possible de changer d'opérateur
pour un autre, plus sérieux, ce qui est peut être ce que je vais finalement faire.
