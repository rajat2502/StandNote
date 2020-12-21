<div align="center"> <a href="https://standnote.netlify.app/"> <img align="center" alt="standnote" src="https://i.ibb.co/VHMQVSf/stand-note-full1.png" height='90' width='360'> </a> </div>

## Backend Setup Steps

- Fork and Clone the repo using
```
$ git clone https://github.com/rajat2502/StandNote.git
$ cd StandNote
```
- Change Branch to `django` using 
```
$ git checkout django
```
- Setup Virtual environment
```
$ python3 -m venv env
```
- Activate the virtual environment
```
$ source env/bin/activate
```
- Install dependencies using
```
$ pip install -r requirements.txt
```
- Make migrations using
```
$ python manage.py makemigrations
```
- Migrate Database
```
$ python manage.py migrate
```
- Create a superuser
```
$ python manage.py createsuperuser
```
- Setup Google OAuth 
  - Login to the Django [admin panel](localhost:8000/admin). To the site model, we will add a new entry for `localhost:8000`
  - Add Google credentials to the social application model as obtained from [Google Developers Console](https://console.developers.google.com/apis/credentials)
  
- Run server using
```
$ python manage.py runserver
``` 

---


[![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://github.com/rajat2502/StandNote/) [![Uses Git](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/rajat2502/StandNote/)
