---
layout: article
title : Déployer une application Fluent-http sur Heroku.
category: developpement
tags : [Fluent-http, Heroku, cloud, maven, Git]
---

[Fluent-http](https://github.com/CodeStory/fluent-http) est un serveur web Java écrit par [David Gageot](https://twitter.com/dgageot) qui à l'avantage d'être à la fois simple, très léger et riche en fonctionnalité. Facilement testable, le boot du serveur est presque instantané ce qui lui donne, à mon sens, un gros avantage sur les autres serveurs d'application.

Mais, bien qu'étant un serveur Java, fluent-http n'est pas un serveur JEE, il n'utilise pas l'API Servlet. C'est un serveur standalone qui se lance via une classe disposant d'une méthode main. De ce fait, il n'est donc pas reconnu automatiquement par [Heroku](https://www.heroku.com) lors du déploiement comme un conteneur de servlet standard.

Mais rien ce grave car moyennant un brin de configuration, Heroku est capable d'animer presque tout type d'application tant que celle-ci est écrite dans un des langages supportés. Il est donc tout à fait possible de déployer une application basée sur fluent-http sur la plate forme Heroku.

Le Toolbelt Heroku doit préalablement être [installé et configuré](https://devcenter.heroku.com/articles/getting-started-with-java#set-up), ainsi que [Git](https://git-scm.com/). [Maven](https://maven.apache.org/) et un [bon](https://www.jetbrains.com/idea/) [IDE](https://eclipse.org/downloads/) sont aussi préférables.

L'application déployée sera un simple "Hello Wold" dont voici le code :

{% highlight java linenos %}
public class Application {
  public static void main(String[] args) {
		new WebServer()
			.configure(routes -> routes.get("/", "Hello World"))
			.start();
	}
}
{% endhighlight %}

Une fois l'application développée, passons maintenant à la construction de celle-ci pour la rendre déployable sur Heroku. Pour cela, la build Maven utilisera 2 plug-in.

* **maven-dependency-plugin** : Qui permet de copier les dépendances du projet.

* **maven-jar-plugin** : Qui permet de créer un Jar executable pour notre application.

Mais avant tout, il faut donner un nom à l’artefact qui sera construit par Maven. Cela se fait en renseignant la proprieté **finalName** dans le **POM.xml**. Pour rentre notre jar exécutable, il faudra aussi spécifier le nom de la classe portant la méthode main, ici, la class **Application** ci dessus. Cela donne au final un build qui ressemble à cela :

{% highlight xml linenos %}
<build>
  <finalName>fluentheroku</finalName>
  <plugins>
  	<plugin>
  		<artifactId>maven-dependency-plugin</artifactId>
  		<executions>
  			<execution>
  				<id>copy-dependencies</id>
  				<phase>package</phase>
  				<goals>
  					<goal>copy-dependencies</goal>
  				</goals>
  			</execution>
  		</executions>
  	</plugin>
  	<plugin>
  		<artifactId>maven-jar-plugin</artifactId>
  		<configuration>
  			<archive>
  				<manifest>
  					<addClasspath>true</addClasspath>
  					<classpathPrefix>dependency</classpathPrefix>
  					<mainClass>fr.dalichampt.fluentheroku.Application</mainClass>
  				</manifest>
  			</archive>
  		</configuration>
  	</plugin>
  </plugins>
</build>
{% endhighlight %}

La construction via **mvn package** produit maintenant un Jar capable d'être executé via la commande :

{% highlight bash %}java -jar target/fluentheroku.jar{% endhighlight %}

Pour exécuter fluent-http en [mode production](https://github.com/CodeStory/fluent-http#production-mode-vs-development-mode), on pourra ajouter l'argument **-DPROD_MODE=true** lors du lancement.

Pour déterminer quelle commande permet de lancer une application, Heroku se base sur un fichier [Procfile](https://devcenter.heroku.com/articles/procfile) qui doit être placé à la racine du projet. Ce fichier doit contenir sur une même ligne, la type de processus à lancer et la ligne de commande pour le faire. Comme nous déployons une application web, le fichier Procfile ressemblera à :

{% highlight bash %}web: java -DPROD_MODE=true -jar target/fluentheroku.jar{% endhighlight %}

Il ne reste plus qu'a commiter tout cela sous Git et à créer l'application Heroku en 3 petites commandes :

{% highlight bash %}
heroku create
git push heroku master
heroku ps:scale web=1
{% endhighlight %}

Voilà l'application déployée et disponible à l'adresse [https://fluent-heroku.herokuapp.com/](https://fluent-heroku.herokuapp.com/).

Les sources complètes sont quant à elles disponibles sur [Github](https://github.com/sdalichampt/fluent-heroku).
