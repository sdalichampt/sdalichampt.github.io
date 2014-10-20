---
layout: article
title: Ouvrir un document LibreOffice en lecture seule depuis nemo.
category: linux
tags: [Linux, LibreOffice]
---


J'adore linux, et plus particulièrement Linux Mint. Et comme j'ai la chance de pouvoir choisir sur quel OS je développe
chez mon client actuel, j'ai bien évidement remplacer le Windows 7 installé par défaut sur ma machine par une version de
mon OS préféré. Les gains de productivité sont, croyez moi, loin d’être négligeable. Ils valent en tout cas largement
les quelques petits efforts que je dois parfois faire pour continuer à fonctionner dans un environnement Windows.

Un de ces petits efforts justement est de travailler avec des fichiers Word/Excel stockés sur un partage réseaux. Car là
où Microsoft Word/Excel permettent d'ouvrir en lecture seule un fichier déjà ouvert, LibreOffice lock le fichier et le
rend inaccessible pour tout le monde.

Or très souvent, ces fichiers que j'ouvre sur le serveur sont les spécifications que je consulte, sans avoir l'intention
de les modifiées. Elles doivent donc restées accessibles pour tout le monde. Au moins en lecture.

LibreOffice propose lui aussi d'ouvrir des documents en lecture seule. Mais l'option n'est pas facilement accessible. En
tout cas, elle ne l'est pas par défaut dans l'explorateur de fichier.

Pour ouvrir un fichier en lecture seule, LibreOffice propose une petite case à cocher en bas de la fenêtre de sélection
du fichier à ouvrir. Ce qui se révèle bien moins pratique qu'un double click sur le fichier.

LibreOffice propose aussi un [argument à ajouter à la ligne de commande](https://help.libreoffice.org/Common/Starting_the_Software_With_Parameters/fr "Liste des paramètres de LibreOffice")  qui permet d'ouvrir un le fichier en lecture seule. Mais là encore, pas question de passer par la console pour ouvrir un fichier.

C'est là que les [fichiers *.desktop](https://developer.gnome.org/integration-guide/stable/desktop-files.html.fr)
entrent en jeu. Ces fichiers permettent d'intégrer le lancement d'une application dans l'interface GNOME.

J'ai donc créer les 2 lanceurs suivants pour respectivement les fichiers Word et Excel. Ces fichiers sont déposés dans
le répertoire ~/.local/share/applications/

{% gist 8951995 libreoffice-writer-read-only.desktop %}

{% gist 8951995 libreoffice-calc-read-only.desktop %}

3 entrées sont à notées :

* **Exec** : Désigne la ligne de commande qui sera exécutée. Ici on pointera vers l’exécutable LibreOffice en précisant
le module utilisé (--writer ou --calc). L'ouverture en lecture seule se faisant grâce à l'option  --view et %f étant le
fichier en question.

* **Name** et **Name[fr_FR]** : Définissent le texte qui sera affiché dans le menu. Il est possible de localiser ce nom
en fournissant la locale, ici fr_FR.

* **Icon** : Spécifie quelle icone sera affichée. Dans le cas présent, ceux de LibreOffice Writer et Calc.

Enfin, il m'a fallu "binder" ces 2 lanceurs sur les types mimes des fichiers Word et Excel. Cela s'est fait en ajoutant
les entrées suivantes dans le fichier ~/.local/share/applications/mimeapps.list dans la section **[Added Associations]**

{% gist 8951995 mimeapps.list %}

Voila donc comment ajouter facilement une option supplémentaire dans le menu contextuel des fichiers *.doc, *.docx,
*.xls et *.xlsx qui permet d'ouvrir ces fichiers en lecture seule.

Il ne me reste plus qu'a utiliser le clic droit sur les fichiers, puis dans "Ouvrir avec" choisir le lanceur
correspondant.
LibreOffice fera alors une copie du document dans le répertoire temporaire avant de l'ouvrir et ne lockera pas le
fichier sur le réseaux. Cela peut toutefois occasionner un petit temps d'attende lors de l'ouverture de gros fichier
(certains faisant plus de 10Mo) le temps de réaliser cette copie.
