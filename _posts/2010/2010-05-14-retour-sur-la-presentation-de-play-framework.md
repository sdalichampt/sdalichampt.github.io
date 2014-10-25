---
layout: article
title: Retour sur la présentation de Play Framework.
category: rencontre
tags: [JUG, Play Framework]
---

C'est le 6 mai dernier que s'est tenue la 9ieme rencontre du [LorraineJUG](http://www.lorrainejug.org/) dédiée a
[Framework Play](http://www.playframework.org/). Et c'est [Guillaume Bort](http://guillaume.bort.fr/), créateur et
principal développeur de Play qui est venue faire la présentation du Framework.

La soirée s'est déroulée en 2 actes (avec le drink en guise de mi temps). Une première partie sous forme d'un workshop
où Guillaume a présenté de façon concrète les possibilités offertes par Play, suivie d'une présentation plus théorique
sous forme de slides. Bien sur, la soirée s'est finie très tard dans un bon resto, cette fois ci,
l'[Excelsior](http://www.brasserie-excelsior.com/), une institution à Nancy.

![Guillaume Bort pendant sa présentation](/images/2010/guillaumebort_m.jpg "Guillaume Bort pendant sa présentation")

Play est donc un framework java permettant développer des applications Web. Le framework rencontre pas mal de succès
depuis sa sortie et génère pas mal de bruit dans la sphère java. Mais mes connaissances de Play s'arrêtaient ici.
C'était donc une découverte pour moi, et voici de que j'en ai retenu :

##Play est un Framework pour des applications Web.

La cible c'est le Web, des applications faites pour tourner dans un navigateur. A ce titre, j'ai l'impression que Play
s'adresse finalement autant aux développeurs JEE voulant se dégager de la complexité des serveurs d'application Java,
qu'aux développeurs PHP qui veulent bénéficier d'une plateforme plus robuste mais sans renoncer à la simplicité d'un
serveur LAMP.

##Framework léger mais complet.

Play est un framework léger. A ce titre, une application Play n'offre pas tout les fonctionnalités d'un application
basée sur le standard JEE. Il n'est donc pas possible de dialoguer avec des applications tierces avec des appels RMI,
Corba ou autre. Mais cela permet de faire de Play, un framework plus simple à appréhender. Play offre cependant toutes
les fonctionnalités nécessaire pour développer une application Web basée sur HTTP.

##Framework web non basé sur servlet.

Difficile à croire, en tout cas pour quelqu'un qui comme moi utilise Struts et Spring MVC, mais Play n'est basé ni sur
l'API Servlet, ni sur les JSP. Play intègre sont propre moteur MVC et Apache Mina comme serveur HTTP.

##Colle au protocole HTTP.

Certainement la principale chose à retenir. Play colle au protocole HTTP. En fait, la totalité des frameworks web sont
basés sur le protocole HTTP, mais presque aucun autre ne le respecte vraiment. Play quand à lui, utilise tout les
fonctionnalités offertes par le protocole.

##Framework Full-stack.

Si Play est clairement orienté Web, il permet cependant de développer une application dans sa totalité. Play utilise JPA
et Hibernate pour la persistance et JSON et XML pour la couche WebService. Play offre également des fonctionnalités de
caching ou encore OpenID pour l'authentification.

##Tests intégrés.

Les tests étant la base d'une application de qualité, Play intègre de quoi tester l'application développée. Les tests
couvrant toute l'application, de la couche Java (via JUnit) à la couche HTML (via Selenium).

##Gestion des erreurs explicites.

Le but de Play étant d'améliorer la productivité des développeurs, le framework propose une gestion explicites des
erreurs, quelque soit la cause de celle ci.

Pour finir, j'ai rarement était aussi convaincue par une présentation d'un nouveau Framework. Play semble répondre a bon
nombre des problématiques que je rencontre au quotidien sur des applications web qui ne demande pas plus que ce que sait
faire Play. Même si cela demande une toute nouvelle approche par rapport a ce que je connaissais jusque là, je songe
sérieusement à me plonger plus en détails dans ce Framework et faire une petite application de test.
