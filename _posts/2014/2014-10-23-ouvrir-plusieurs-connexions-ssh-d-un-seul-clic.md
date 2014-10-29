---
layout: article
title: Ouvrir plusieurs connexions SSH d'un seul clic.
category: linux
tags: [terminal, gnome, SSH]
---


A force de toujours me connecter en SSH les mêmes serveurs, j'ai cherché une solution pour me facilité la vie.

La première chose à faire était déjà de déposer ma clé publique sur chaque serveur pour zapper la phase de connexion par
mot de passe et d'ajouter un alias dans le fichier .ssh/config. C'est autant de temps de gagné que sur chaque serveur 
l'utilisateur et le mot de passe change. Un ssh ALIAS_SERVEUR suffit donc pour me connecter.

La phase de connexion passée maintenant sans encombre, je me retrouvais souvent avec 3, 4 ou 5 fenêtres terminal, toutes
identiques, ouvertes sur le bureau dans l'ordre ou je me suis connecté. Lorsque j'y pensais, j'essayais d'ouvrir des
onglets plutôt que des fenêtres, mais cela restait assez anarchique.

J'ai donc choisi d'ouvrir les connexions que j'utilises tout le temps de façon automatiques. Cela peux se faire très
facilement avec gnome-terminal. Il suffit de jouer avec les options.

La première étape était de créer un profil dédié aux fenêtres SSH. J'ai donc créé le profil *"sshremote"* en changeant 
la couleur de fond (pour les voirs du premier coup d'oeil), mais surtout pour permettre fixe moi même le nom des 
terminaux. Cela se fait en choisisant à "Conserver le titre initial" dans Edition > Préférence du profil > Titre et 
commande > Quand les commandes du terminal définissent leurs propres titres. Le titre des onglets sera alors fixé une 
fois pour toute et ne sera pas renommé par la connexion SSH (par defaut user@host).

Tout est prêt maintenant pour ouvrir mes onglets en une seule ligne de commande sous la forme :

{% highlight bash %}
gnome-terminal
	--tab-with-profile=sshremote --title=SERVEUR1 -e 'ssh serveur1' 
	--tab-with-profile=sshremote --title=SERVEUR2 -e 'ssh serveur2' 
	...
{% endhighlight %}


* **--tab-with-profile** permet d'ajouter un onglet dans la fenêtre en lui précisant un profil en particulier. Ici le 
profil créé juste avant pour les fenêtres SSH.
* **--title** donne un nom à l'onget. Ce nom me sert à voir rapidement sur quel serveur la connexion est ouverte. C'est 
pour cela qu'il ne doit pas changé.
* **-e** permet d'éxécuter une commande lors de l'ouverture du terminal. La commande lancée est donc l'ouverture de la 
connexion SSH sur le serveur voulu.

Cette commande me permet donc d'ouvrir, d'un coup, toutes les connexions vers les serveurs que j'utilises. Cela permet 
surtout de le faire dans une seule fenetre avec autant d'onglet que de connexion, toujours dans le même ordre et nommés 
chacun par le nom du serveur où je suis connecté.

Il ne reste plus alors qu'a créé un racourcis vers cette commande pour l'éxecutée d'un seul clic. La première ouverture 
affichera juste une boite de saisie pour dévérouiller ma clé SSH avant d'établir les connexions.

Au final, rien de très compliqué à mettre en place, mais un gain de temps au quotidien.
