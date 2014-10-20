---
layout: article
title: Recompiler automatique un fichier à la sauvegarde.
category: developpement
tags: [Linux]
---


Un des points fort des outils recent comme Play!, restX ou même Jekyll qui anime ce blog, c'est la recompilation 
automatique dès la sauvegarde d'un fichier. Cela permet de voir immediatement le resultat par un simple F5. Nous
sommes bien loin des redeploiement interminable des serveurs JEE, même si JRebel améliore grandement les choses.

Aujourd'hui, j'ai remis le nez dans FOP. Outil que j'avais pas mal utilisé dans mon ancienne mission et que j'avais
à l'époque outillé avec Ant pour générer plus rapidement mes PDF enfin de tester mes modifications. Je travaillé alors
sous Windows et cela me demandait de :

1. fermer le PDF ouvert (car windows lock les fichiers ouvert),
2. lancer la tâche Ant de transformation XSLT XSL-FO (fait dans eclipse),
3. ouvrir le PDF généré (ce dernier point était en fait aussi fait par Ant).

Pour un petit test comme je viens de faire, pas question de remettre en place tout l'outillage Ant, mais je voulais
tout de même voir rapidement le resultat à chaque modification de mes fichier. C'est encore une fois un petit 
utilitaire sous Linux qui m'a rendu un très grand service.

**inotifywait** permet de surveiller la modification d'un fichier et d'executer une commande lorsque celle-ci intervient.

Il suffit donc d'installer le paquet **[inotify-tools](https://github.com/rvoicilas/inotify-tools)** et de lancer dans 
un terminal :

{% highlight bash %}
while inotifywait -e close_write LE_FICHIER_A_SURVEILLER ; do 
    COMMANDE_A_EXECUTER ; 
done
{% endhighlight %}

dans mon cas, cela ressembler à :

{% highlight bash %}
while inotifywait -e close_write file.xsl ; do 
    clear ; sh fop -xml file.xml -xsl file.xsl -pdf file.pdf ; 
done
{% endhighlight %}

A chaque sauvegarde du fichier file.xsl, la génération du fichier PDF est lancée automatiquement. Et, cerise sur le
gateau, même pas besoin de recharger le PDF, evince se mets à jour seule. Très pratique pour voir le rendu sur un
deuxieme écran avec un gain de produictivité impressionnant en 1 seule ligne de commande.
