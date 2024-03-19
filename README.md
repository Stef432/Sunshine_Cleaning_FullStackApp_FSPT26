# Forking, Installation instructions and set up:

## Setting up repository on machine - Fork project to your GitHub account

1. Follow the guide [**here**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)

### Cloning project to your machine

2. Follow the guide [**here**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#cloning-your-forked-repository)

## Setting up project (just the first time)

## Create a database to use

1. go to Terminal #1 and run:

```
mysql -u root -p
Enter password: your@password
CREATE DATABASE database_name;
SHOW DATABASES;
USE database_name;
SHOW TABLES;
```

### Run mysql

Now you can run your queries, such as:

```
SHOW tables;
SELECT * FROM <tablename>;
DESC <tablename>;
```

or to change a Table's column name..

```
ALTER TABLE <tablename> CHANGE <col-oldname> <col-newname> VARCHAR(255)
```

You can close this terminal.

### start expresss server -

2. open Terminal #2: cd into the Project file and run:

```
npm install
npm run migrate
npm start
```

Don't kill it; let it run.

### Start frontend dev server

3. Open Terminal #3 and run:

```
cd client
npm install
npm run dev
```

Don't kill it; let it run.

### Add .env with your DB password

2. Create a .env file at the top level of your project with the following (all other details are already in the model/database.js file)

```
DB_HOST=localhost
DB_USER= your@user
DB_PASS= your@pass
DB_NAME= your@DBname (the one you created in step 1 of creating a database ;)
```

Set up complete!

---

### Open project in VSCode

1. Once the project is on your machine, drag the folder and drop it in VSCode to open it or run the [shortcut](https://www.freecodecamp.org/news/how-to-open-visual-studio-code-from-your-terminal/):

```
cd your@project
code .
```

Enjoy learning through this project !
