
class DatabaseConnection:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            print("Creando nueva conexión a la base de datos...")
            cls._instance = super(DatabaseConnection, cls).__new__(cls)
        else:
            print("Usando la conexión existente.")
        return cls._instance

    def connect(self):
        print("Conectado a la base de datos.")

# Prueba del patrón Singleton
db1 = DatabaseConnection()
db1.connect()

db2 = DatabaseConnection()
db2.connect()

print(f"db1 y db2 son la misma instancia: {db1 is db2}")
