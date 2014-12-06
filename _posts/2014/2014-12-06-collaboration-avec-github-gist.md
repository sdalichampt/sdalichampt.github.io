---
layout: article
title: Collaboration avec Github Gist.
category: developpement
tags: [Git, GitHub, Gist]
---

Si vous connaissez [Git](http://http://git-scm.com/), vous connaissez surement [Github](https://github.com/). Mais peux être que vous ne connaissez pas [Gist](https://gist.github.com) de GitHub.

Gist est un [pastebin](http://fr.wikipedia.org/wiki/Pastebin), une application web qui permet de déposer des extraits de texte qui seront alors accessibles facilement à tous.

Github oblige, chaque Gist est en réalité un dépôt Git à part entière. Et cela vas nous permettre d'en détourner l'utilisation pour en faire autre chose qu'un pastbin.

Avec Rémy, nous cherchions un moyen de partager un peu d'infos. Pas un vrai projet en soit, juste quelques idées déposées dans un fichier. Les premiers essais se sont naturellement portés vers Google Docs et/ou Dropbox. Ils sont parfaits pour cela, mais ces outils sont tout les 2 bloqués derrière le proxy qu'utilise Rémy. Nous nous sommes alors tourné vers Github. Mais  bien qu'il n'y ai rien de super sensible, nos échanges n'avait pas vocation à être publique. Exit donc les dépôts publics gratuits de [Github](https://github.com/sdalichampt).

En revanche, même gratuit, Github permet de créer des Gist privés qui ne seront accéssibles que par leur URL sans être référencés dans la liste de vos [Gist](https://gist.github.com/sdalichampt) (Attention: un Gist, même privé, reste accessible sans mot de passe à quiconque connait son URL). Ce sera alors l'endroit parfait pour pousser du code, accessible par Rémy.

Voyons comment mettre en place les dépôts pour démarrer la collaboration :

* Samuel créer un Gist privé via l'interface en ligne

![Create secret Gist](/images/2014/create-secret-gist.png)

* Samuel clone ce dépôt localement

{% highlight bash %}git clone https://gist.github.com/URL_PRIVEE_DE_SAMUEL_GIST.git{% endhighlight %}

* Samuel donne l'URL de son Gist à Rémy
* Rémy fork le Gist en un autre Gist privé

![Fork Gist](/images/2014/fork-gist.png)

* Rémy clone son dépôt localement

{% highlight bash %}git clone https://gist.github.com/URL_PRIVEE_DE_REMY_GIST.git{% endhighlight %}

* Rémy ajout le dépot de Samuel à sa liste de dépot distant

{% highlight bash %}git remote add samuel https://gist.github.com/URL_PRIVEE_DE_SAMUEL_GIST.git{% endhighlight %}

* Rémy donne l'URL de son Gist à Samuel
* Samuel ajout le dépot de Rémy à sa liste de dépot distant

{% highlight bash %}git remote add remy https://gist.github.com/URL_PRIVEE_DE_REMYL_GIST.git{% endhighlight %}

Tout est maintenant en place et nous pouvons à modifier localement nos fichiers et commiter ces modifications dans notre dépot locale.

Nous pouvons également mettre à dispo nos modifications pour que l'autre puisse les récupérer

{% highlight bash %}git push origin master{% endhighlight %}

Et tirer les modififactions mise à dispositions

{% highlight bash %}git pull remy/samuel master{% endhighlight %}

Voila comment détourner Gist de son utilisation première. Cela permet de mettre rapidement en place un système de collaboration entre 2 personnes.

Cela ne permet évidement pas de travailler à grande échelle sur un vrai projet de developpement en équipe. Vous ne bénéficier d'aucun des autres outils proposé par Github. De plus, même s'il ne sont accessible à tout le monde, les Gist privé ne sont protégés par aucun mot de passe ou autre moyen. Quiconque ayant connaissance de l'URL aura accès au dépot. 

