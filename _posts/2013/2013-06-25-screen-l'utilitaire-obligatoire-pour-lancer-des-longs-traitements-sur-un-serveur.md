---
layout: article
title: Screen, l'utilitaire obligatoire pour lancer des longs traitements sur un serveur.
category: developpement
tags: [Linux, SSH]
---

Récemment, j'ai travaillé sur un programme de migration de donnée de base à base. Ce traitement est composé d'un 
ensemble de script shell, db2, sed, awk, mais cela n'a que peu d'importance. Ce qui est important c'est de noter que ce 
batch pouvait prendre plusieurs heures pour se dérouler complètement.

Le lancement pour les tests se faisait via une connexion SSH depuis ma machine de développement (Linux Mint) vers les
serveur de test sous RHEL. Et quoi de plus énervant que d'avoir son traitement interrompue après 1 ou 2 heures suite à
une déconnexion du réseaux, plantage de l'ordi ou même une erreur de fenêtre (si si, j'ai réussi à fermer la terminal où
s’exécuter mon traitement).

C'est la que [Screen](http://www.gnu.org/software/screen/ "GNU Screen") rentre en jeu.

Screen est un multiplexeur de terminaux. Il permet à un utilisateur de séparer plusieurs sessions dans un même terminal
et de passer de l'une à l'autre sans fermer celles-ci. Mais là ou Screen deviens vraiment intéressant, c'est qu'il rend
les sessions persistantes. Ainsi, la déconnexion d'un session pour n'importe quelle raison n’entraînera pas l’arrêt des
processus de cette dernière.

Une fois installé (sur le serveur), il ne reste plus qu'à démarrer un nouveau screen après s’être connecté en SSH sur la
machine.

{% highlight bash %}screen -S nom_du_screen{% endhighlight %}

Puis de se détacher du screen sans le fermer via les touches *ctrl  + ad* pour revenir à la session SSH.

Il est alors possible de se déconnecter en laissant le screen tourner. C'est alors très pratique pour lancer un
traitement sur un serveur le soir et pouvoir éteindre son PC avant de partir.

Une fois reconnecté (le lendemain matin par exemple), un simple&nbsp;:

{% highlight bash %}screen -r nom_du_screen{% endhighlight %}

permet de retrouver la session précédemment crée.

Si vous ne lancer qu'une seule session, il n'est pas nécessaire de la nommée.
{% highlight bash %}screen{% endhighlight %}
et
{% highlight bash %}screen -r{% endhighlight %}
feront tout à fait l'affaire.

La sortie définitive du screen se faisant par un simple exit.

Screen permet également de débuter une session depuis un client et de la reprendre sur un autre, offrant alors la
possibilité à une autre personne, de reprendre la main sur votre session. Ce qui peu être pratique pour demander de
l'aide a une personne ne pouvant pas se déplacer à votre bureau.
