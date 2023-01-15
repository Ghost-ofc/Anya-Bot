import requests, json, base64
from requests.structures import CaseInsensitiveDict
from urllib3.exceptions import InsecureRequestWarning
from urllib3 import disable_warnings
import sys 

disable_warnings(InsecureRequestWarning)

dni = sys.argv[1]

headers = {
    "Content-Type" : "application/json"
    }

url = "https://mesadepartes.cenares.gob.pe/Service/BuscarPersonaPorDniExt?NumeroDocumento=" + dni + "&Token=jJ9NGZsnHtn1l1cXJVcFROA40RmGPainQ4pXyH4J1CC8CSVcGWTv0zEBHVfV.6aAbu4y9JG39uodWEDDx"

data = '{"NumeroDocumento" : "%s", "Token" : "jJ9NGZsnHtn1l1cXJVcFROA40RmGPainQ4pXyH4J1CC8CSVcGWTv0zEBHVfV.6aAbu4y9JG39uodWEDDx"}' % (dni)

response = requests.post(url, headers=headers, verify=False)

#print(response.content)

data = response.json()


try:
   photo = data['datosPersona']['foto']
except KeyError:
   valor = 0
"decodeit = open(f'./fotos/{dni}.jpg', 'wb')"
"decodeit.write(base64.b64decode((photo)))"
"decodeit.close()"
print(photo)

