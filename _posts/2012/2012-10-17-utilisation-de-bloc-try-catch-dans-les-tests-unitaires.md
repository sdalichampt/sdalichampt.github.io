---
layout: article
title: Utilisation de bloc try catch dans les tests unitaires.
category: developpement
tags: [JUnit, TDD]
---

En me baladant aujourd'hui dans les tests unitaires du projet, je suis tombé sur une erreur que pas mal de développeurs semblent faire.

Voila le bout de code en question :

{% highlight java linenos %}
    public void testMethode() {
        try {
            // création d'un fichier temporaire

            // manipulation du fichier

            assertTrue("Erreur dans le code testé", methodeTestee());

            // suppression du fichier temporaire
        } catch (IOException ioe) {
            log.error("Erreur lors de la création du fichier de test", ioe);
        }
    }
{% endhighlight %}

Le code de test, que je n'ai pas retranscrit ici fait bien son travail. Mais comme tout code qui manipule des fichiers,
celui-ci peut lever une exception. Hors sous cette forme, si une exception est levée lors de la manipulation du fichier
temporaire de test, celle-ci sera catchée et loggée en erreur.


**Mais le test lui, sera un succès.**

Aucune exception, aucune assertion non valide, aucun appel à la méthode fail. Le test peut être passé au vert.

Or il y a bien eu un problème. Il doit être au rouge.

Le bonne solution serait donc, soit de remplacer la log par un appel à la méthode fail().

{% highlight java %}
    fail("Erreur lors de la création du fichier de test");
{% endhighlight %}

soit ne pas se préoccuper des exceptions levées par le test et les laisser remonter. Elles seront alors traitées par
JUnit qui fera échouer le reste.

Dans tout les cas, le code de test n'est pas du code de production et contrairement à ce dernier, nous voulons qu'il
"plante" le plus souvent possible. Il n'a pas vocation à être résiliant, bien au contraire. Sa faible tolérance aux
exceptions garantie une plus grande découverte des bugs dans le code de production.
