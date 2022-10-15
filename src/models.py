from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    username = db.Column(db.String(120), unique=False, nullable=False)
    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username":self.username,
            # do not serialize the password, its a security breach
        }
class Characters (db.Model):
    __tablename__ ='characters'
    id = db.Column(db.Integer, primary_key = True)
    character_name = db.Column(db.String(250),nullable=False)
    character_gender = db.Column(db.String(250),nullable=False)
    character_skin_color = db.Column(db.String(250),nullable=False)
    character_birthdate = db.Column(db.String(250),nullable=False)
    character_eye_color = db.Column(db.String(250),nullable=False)
   
   
    def __repr__(self):
        return '<Characters %r>' % self.character_name

    def serialize(self):
        return {
            "id": self.id,
            "character_name": self. character_name,
            "character_gender": self.character_gender,
            "character_skin_color": self.character_skin_color,
            "character_birthdate": self.character_birthdate,
            "character_eye_color": self.character_eye_color,
            # do not serialize the password, its a security breach
        }



class Planets(db.Model):
    __tablename__ = 'planets'
    id = db.Column(db.Integer, primary_key=True)
    planet_name = db.Column(db.String(250), nullable=False)
    planet_diameter = db.Column(db.String(250), nullable=False)
    planet_rotation_period = db.Column(db.String(250), nullable=False)
    planet_population = db.Column(db.Integer, nullable=False)
    planet_climate = db.Column(db.String(250), nullable=False)
    planet_terrain = db.Column(db.String(250), nullable=False)

    def __repr__(self):
        return 'Planets %r' % self.planet_name
        
    
    def serialize(self):
        return {
            "id": self.id,
            "planet_name": self.planet_name,
            "planet_diameter":self.planet_diameter,
            "planet_rotation_period": self.planet_rotation_period,
            "planet_population": self.planet_population,
            "planet_climate":self.planet_climate,
            "planet_terrain":self.planet_terrain,


        }

class FavoriteCharacters (db.Model):
    __tablename__ = 'favoritecharacters'
    id = db.Column (db.Integer,primary_key=True)
    user_id = db.Column (db.Integer, db.ForeignKey('user.id'), nullable=False)
    character_id = db.Column(db.Integer, db.ForeignKey('characters.id'),nullable=False)
    
    def __repr__(self):
        return '<Favoritecharacters %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "character_id": self.character_id,
            "user_id": self.user_id,
            # do not serialize the password, its a security breach
        }
class FavoritePlanets (db.Model):
    __tablename__ = 'favoriteplanets'
    id = db.Column (db.Integer,primary_key=True)
    user_id = db.Column (db.Integer, db.ForeignKey('user.id'),nullable=False)
    planet_id = db.Column(db.Integer, db.ForeignKey('planets.id'),nullable=False)

    def __repr__(self):
        return '<Favoriteplanets %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "planet_id": self.planet_id,
            "user_id": self.user_id,
            # do not serialize the password, its a security breach
        }