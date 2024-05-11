import unittest
import requests
import json



class TestRegistro(unittest.TestCase):
    datos_de_registro_exitoso = None
    datos_de_login_exitoso = None
    datos_de_registro_invalido = None
    datos_de_login_invalido = None
    @classmethod
    def setUpClass(cls):
        cls.register_url = 'http://localhost:3000/register'
        cls.datos_de_registro_exitoso =  {
            "email": 'test@example.com',
            "nombre": 'juan',
            "password": '123456789',
            "rut": '10344722',
            "tipoUsuario": '1'  # 0 cliente, 1 vendedor, 2 analista
        }
        cls.datos_de_registro_invalido = {
            "email": 'test', #se provoca el error de que no es email
            "nombre": 'juan',
            "password": '123456789',
            "rut": '10344722',
            "tipoUsuario": '1'  # 0 cliente, 1 vendedor, 2 analista
        }
    @classmethod
    def tearDownClass(cls):
        del cls.datos_de_registro_exitoso
        del cls.datos_de_registro_invalido
    def test_registro_exitoso(self):
        response = requests.post(self.register_url, json= self.datos_de_registro_exitoso)

        # Verificar que la solicitud se haya realizado con éxito (código de estado 200)
        self.assertEqual(response.status_code, 200)

        # Verificar el mensaje de éxito en la respuesta JSON
        self.assertEqual(response.json()["mensaje"], "Usuario registrado exitosamente")
    def test_registro_fallido(self):
        # Realizar la solicitud de registro
        response = requests.post(self.register_url, json=self.datos_de_registro_invalido)

        # Verificar que la solicitud haya fallado (código de estado 400)
        self.assertEqual(response.status_code, 400)

        # Verificar el mensaje de error en la respuesta JSON
        self.assertEqual(response.json()["error"], "Email ya existe")






class TestLogin(unittest.TestCase):
    datos_de_login_exitoso = None
    datos_de_login_invalido = None
    @classmethod
    def setUpClass(cls):
        cls.login_url = 'http://localhost:3000/login'
        cls.datos_de_login_exitoso =  {
            "email": 'test@example.com',
            "password": '123456789',
        }
        cls.datos_de_login_invalido = {
            "email": 'random@gmail.com', #se provoca el error porque el usuario no esta registrado
            "password": '123456789',
        }
    @classmethod
    def tearDownClass(cls):
        del cls.datos_de_login_exitoso
        del cls.datos_de_login_invalido
    def test_login_exitoso(self):
        # Realizar la solicitud de inicio de sesión
        response = requests.post(self.login_url, json=self.datos_de_login_exitoso)

        # Verificar que la solicitud se haya realizado con éxito (código de estado 200)
        self.assertEqual(response.status_code, 200)

        # Verificar el mensaje de éxito en la respuesta JSON
        self.assertEqual(response.json()["message"], "Login exitoso")
    def test_login_fallido(self):
        # Realizar la solicitud de inicio de sesión
        response = requests.post(self.login_url, json= self.datos_de_login_invalido)

        # Verificar que la solicitud haya fallado (código de estado 400)
        self.assertEqual(response.status_code, 400)

        # Verificar el mensaje de error en la respuesta JSON
        self.assertEqual(response.json()["error"], "Email incorrecto")

if __name__ == '__main__':
    unittest.main()
