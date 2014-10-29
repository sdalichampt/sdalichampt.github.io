---
layout: article
title : Diff de fichiers Word avec Git.
category: developpement
tags : [Git]
---

Parmis tout les outils qui peuvent être utilisés pour un projet informatique (et je ne parle pas que des outils de dev), 
Word est sans doute celui que je deteste le plus. Ce n'est pas Word en lui même que je n'aime pas mais, c'est plutôt un 
bon traitement de texte même si j'utilise plus facilement [LibreOffice Writer](https://fr.libreoffice.org/), mais 
généralement la façon de travailler qui vas avec. C'est à dire travailler sur des fichiers partagés sur le réseaux et 
versionnés "à la main" (version dans le nom du doc, suivi des modifications activé et note de révision en début du 
document).

Bon nombre de plateforme de gestion documentaire pourrait améliorer grandement ce processus, mais il n'est pas toujours 
possible de les mettre en place. Dans ce cas, il est toujours possible de faire mieux, à moindre frais et avec les 
moyens du bord.

Tout les developpeurs ont l'habitude de travailler avec un gestionaire de version (CVS, SNV, Git) pour le code source. 
Ces outils répondent à un certains nombre de points déjà évoqués plus haut :

1. Savoir qui a fait une modification,
2. Savoir quand la modification a été faite,
3. Savoir ce qui à été modifié,
4. Garder trace de toute les versions.

Avec des fichiers texte, cela fonctionne très bien depuis des années, même bien avant l'apparition de 
[Git](http://git-scm.com/).

Cela est en revanche un peu plus délicat avec des fichiers binaires tels que des fichiers Word. Les points 1, 2 et 4 
reste valables, mais le 3ieme pose plus de problème. Difficile en effet de voir la différence entre 2 fichiers qui 
necessitent un programme spécifique pour être lisible par un humain.

2 solutions sont alors possible :

* Afficher les différences dans un outil externe. Word est lui-même capable d'afficher la différence en 2 fichiers word.
* Afficher les différences dans l'outil en rendant le contenu binaire lisible.

C'est cette deuxieme solution qui rentre le mieux dans le schema déjà bien connu pour les fichiers texte et Git offre 
la possibilité de le faire avec peux d'effort.

La première étape est d'être capable d'extraire le contenu du fichier Word pour le rendre lisible. Pour cela, il éxiste 
2 outils, [catdoc](http://www.wagner.pp.ru/~vitus/software/catdoc/), capable de lire un fichier Word au format doc et 
[docx2txt](http://sourceforge.net/projects/docx2txt/) pour les fichiers au format docx. Ces 2 outils peuvent lire les 
fichiers Word pour n'en garder que le contenu au format texte.

Pour *catdoc*, rien de plus à faire que de l'installer. En revanche, *docx2txt* fonctionne un peu différement. En effet là
ou catdoc écrit par defaut dans la sortie standard, *docx2txt* ecrit par défaut dans un fichier txt portant le même nom 
que le fichier Word. L'écriture dans la sortie standard se faisant par un paramètre. Or, Git n'est pas capable de faire
le passage de ce paramètre. Il faut alors le passé par un wrapper. Pour le raliser, il suffit d'un simple fichier shell
dans **$HOME/.scripts/gitdocx2txt.sh** contenant les 2 lignes suivantes (le fichier doit aussi être éxécutable):

{% highlight bash %}
#!/bin/sh
docx2txt <$1
{% endhighlight %}

Tout est maintenant prêt pour configurer Git. D'abord en lui indiquant que les fichiers Word sont des fichiers binaires.
Puis en indiquant à Git comment transformer les fichiers Word en fichier texte comparable. Nous allons pour cela créer 
2 filtres pour les fichiers Word au format doc d'un part et docx d'autre part.


{% highlight bash %}
git config --global diff.word.binary true
git config --global diff.wordx.binary true
git config --global diff.word.textconv catdoc
git config --global diff.wordx.textconv $HOME/.scripts/gitdocx2txt.sh
{% endhighlight %}

Enfin, il ne reste plus qu'a associer les fichiers Word avec les 2 filtres en ajoutant ces 2 lignes dans le fichier
**.gitattributes** du projet.

{% highlight bash %}
*.doc diff=word
*.docx diff=wordx
{% endhighlight %}

Tout est maintenant terminé et **git diff** affichera les différences de contenu dans le fichier binaire directement
dans la console.
