---
layout: article
title: Retour sur la soirée Maven.
category: rencontre
tags: [Java, JUG, Maven]
---

J'ai encore mis du temps à écrire ce billet, mais voilà enfin mon compte rendu de la soirée Maven qui s'est tenue au
[LorraineJUG](http://www.lorrainejug.org/) la semaine passée à Nancy.

Pour présenter brièvement le speaker de la soirée, Arnaud Hériter ([blog](http://blog.aheritier.net/),
[twitter](http://twitter.com/aheritier)), il travail comme Software Factory Manager chez eXo Plateform mais est surtout
(en tout cas pour ce qui nous intéresse) committer sur le projet Maven depuis 2004. Arnaud est aussi le co-auteur d'un
livre paru chez Pearson.

[Maven](http://maven.apache.org/) est un projet de la fondation [Apache](http://www.apache.org/) initié en 2001 par
Jason Van Zyl. C'est un outil de build automatique pour les projets Java.

Comment le temps était trop limité pour détailler tout ce qu'Arnaud avait prévu, nous avons peu choisir les points sur
lesquels il s'attarderait.

![Arnaud Héritier lors de sa présentation de Maven](/images/2010/arnaudheritier_m.jpg "Arnaud Héritier lors de sa présentation de Maven")

Comment je le disais, 2 semaines se sont déjà passées depuis la soirée. Et comme je n'ai pris aucune note durant la
conférence, j'ai oublier pas mal de chose depuis. Mais voici tout de même les grands points que j'ai retenus.

##Ne pas suivre les conventions est une erreur.

Maven fourni un certain nombre de convention dans le nommage et l'organisation des répertoires. Il peut être tentant de
changer ces conventions pour les personnaliser. C'est une erreur. D'un part parce que certains développeurs de module on
fait l'erreur de hard-coder ces noms, et d'autre par parce-que suivre les conventions Maven permet à un développeur
d'appréhender plus rapidement un nouveau projet.


##Découpage en modules.

Maven permet de découper un projet en sous module pour le rendre plus simple. Attention cependant à ne pas tomber dans
le piège de vouloir trop découper son projet. La majorité des projets n'ont pas besoins d'être séparés en modules.


##Au démarrage d'un projet Maven, commencez petit.

Il existe beaucoup de plugin Maven qui peuvent être mis en place sur un build. Tous ne sont pas obligatoires tout le
temps. Le but de Maven est d'accélérer le développement en facilitant la phase de build, il n'est pas pertinent de
passer plus de temps à mettre en place le build que de faire avancer la projet.


##Repository local - Nexus.

Pour certains, il n'est pas possible de lancer Maven sans télécharger Internet. Cela viens effectivement que Maven
permet de télécharger toutes les dépendances du projet depuis des respositoty sur internet. Afin d'éviter cela, il est
possible de mettre en place des caches locaux (Nexus par exemple) sur le réseau de l'entreprise. Ces repository locaux
permettent d'une part de mettre en cache certaines librairies, d'autre part de fournir les librairies internes à
l'organisation.


##Intégration continue - Hudson/Sonar

Maven seul est puissant. Maven couplé une plateforme d'intégration continue deviens une machine à produire du logiciel.
Construction automatique du projet, analyse de code, contrôle de qualité et suivie des indicateurs dans le temps, voila
ce que permettent ces outils. De quoi améliorer à la fois la qualité des livrables et réduire des temps de
développement.


##Intégration dans les IDE encore imparfaite.

Rien à dire de plus. L'intégration avec les IDE marche, mais sans plus. Il reste des efforts à faire de ce coté la.



##Le futur&nbsp;: Maven 3.

La date de sortie de Maven 3 n'est pas encore fixée et il semble resté du travail à l'équipe. Bien qu'une grande partie
du projet à été réécrite, la prochaine version gardera une pleine compatibilité avec la version actuelle. Cette version
se veux d'offrir de meilleurs performances et une plus grande souplesse. Maven 3 intégrera une meilleur gestion des
erreurs et proposera un shell identique sur toute les plateforme.


Bref, Maven est un formidable outil que je n'ai jamais eu l'occasion d'utiliser dans des conditions réelles (des testes
sur ma machine perso ne sont pas des conditions réelles), mais j'ai maintenant de nouveaux arguments pour pousser à la
mise en place de Maven sur mon projet.


Bonus : [Les slides de la présentation](http://www.slideshare.net/aheritier/lorraine-jug-1st-june-2010-maven)
