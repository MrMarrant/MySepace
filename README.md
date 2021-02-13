# MySepace

# Lancer le serveur API

Aller dans le répertoire ServerAPIFirst <br>
Module à installer pour faire fonctionner l'API : <br>
npm install express sequelize mysql2 body-parser cors --save <br><br>

Utiliser Wamp :
aller sur la console mysql ->
CREATE DATABASE db_mysepace;

Pour lancer le serveur, ouvrer votre terminal dans le répertoire de ServerAPIFirst et taper :
node server.js <br>

URL du serveur : http://localhost:1337/api/articles

Concernant le serveur API Commentaires il faudra aussi installer ceci dans le répertoire de ServerAPICommentaire: <br>
npm install express sequelize mysql2 body-parser cors --save <br>
Puis lancer le serveur : <br>
node server.js 

URL du serveur : http://localhost:3000/api/commentaires

# Lancer l'Application
npm i <br>
puis depuis le répertoire MySepace(root) : <br>
cd frontend <br>
cd mysepace <br>
<br>
npm run serve
