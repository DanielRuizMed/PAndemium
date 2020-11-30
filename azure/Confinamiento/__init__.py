import logging
import json, sys

import azure.functions as func

# json con valores
with open('../../src/json/confinamiento.json') as f:
    datos = json.loads(f)

def main(req: func.HttpRequest) -> func.HttpResponse:

    ccaa = req.params.get('ccaa')
    result = {}

    if ccaa:
        result['result'] = datos.get(ccaa, 'No hay datos con esa comunidad o no existe')
        codigo = 200

    else:
        result['result'] = "Nos has puesto bien los atributos, ejemplo: ?ccaa=Andalucia."
        codigo = 400

    return func.HttpResponse(
        json.dumps(result),
        mimetype="application/json",
        status_code=codigo
    )
