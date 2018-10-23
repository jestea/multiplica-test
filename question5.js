'use strict'

const getJSON = function () { return JSON.parse(`{
  "paths": {
    "/areaPrivada/clientes/perfil/datosPersonales": {
      "x-swagger-router-controller": "AUT_ProfileController",
      "get": {
        "tags": ["Autoservicio - Clientes - Perfil"],
        "summary": "Obtener datos personales del cliente.",
        "description": "Obtener los datos personales de un determinado cliente, incluyendo la informacion del lugar de trabajo. Alta Disponibilidad (Si), Respuesta MAX (1 Seg), Volumen (100)",
        "operationId": "informacionPersonal",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [
          {
            "in": "query",
            "name": "tipoDocumento",
            "description": "Tipo de documento",
            "required": true,
            "type": "string",
            "enum": ["DNI", "RUC", "PEX", "CEX", "CIP"]
          },
          {
            "in": "query",
            "name": "documento",
            "description": "Numero del documento cliente",
            "required": true,
            "type": "string"
          }
        ]
      }
    },
    "/areaPrivada/clientes/perfil/direcciones": {
      "x-swagger-router-controller": "AUT_ProfileController",
      "get": {
        "tags": ["Autoservicio - Clientes - Perfil"],
        "summary": "Obtener las direcciones del cliente.",
        "description": "Obtener las direcciones de un determinado cliente, incluyendo las asociadas a las pólizas y de correspondencia. Alta Disponibilidad (Si), Respuesta MAX (1 Seg), Volumen (100)",
        "operationId": "obtenerdireccionesPoliza",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [
          {
            "in": "query",
            "name": "tipoDocumento",
            "description": "Tipo de documento",
            "required": true,
            "type": "string",
            "enum": ["DNI", "RUC", "PEX", "CEX", "CIP"]
          },
          {
            "in": "query",
            "name": "documento",
            "description": "Numero del documento cliente",
            "required": true,
            "type": "string"
          },
          {
            "in": "query",
            "name": "tipoPoliza",
            "description": "Tipo de póliza a filtar",
            "type": "string",
            "enum": [
              "MD_AUTOS",
              "MD_SALUD",
              "MD_VIDA",
              "MD_HOGAR",
              "MD_DECESOS",
              "MD_SCTR",
              "MD_SOAT",
              "MD_SOAT_ELECTRO",
              "MD_EPS",
              "MD_SOAT|MD_SOAT_ELECTRO",
              "MD_SALUD|MD_EPS"
            ],
            "required": false
          }
        ]
      }
    },
    "/areaPrivada/clientes/perfil/direccionCorrespondencia": {
      "x-swagger-router-controller": "AUT_ProfileController",
      "get": {
        "tags": ["Autoservicio - Clientes - Perfil"],
        "summary": "Obtener las dirección de correspondencia del cliente.",
        "description": "Obtener la dirección de correspondencia de un determinado cliente. Alta Disponibilidad (Si), Respuesta MAX (1 Seg), Volumen (100)",
        "operationId": "obtenerDireccionCorrespondenciaPersonal",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [
          {
            "in": "query",
            "name": "tipoDocumento",
            "description": "Tipo de documento",
            "required": true,
            "type": "string",
            "enum": ["DNI", "RUC", "PEX", "CEX", "CIP"]
          },
          {
            "in": "query",
            "name": "documento",
            "description": "Numero del documento cliente",
            "required": true,
            "type": "string"
          }
        ]
      },
      "put": {
        "tags": ["Autoservicio - Clientes - Perfil"],
        "summary": "Actualizar dirección de correspondencia de un cliente.",
        "description": "Actualizar dirección de correspondencia de un cliente. Alta Disponibilidad (Si), Respuesta MAX (1 Seg), Volumen (100)",
        "operationId": "actualizarDireccionCorrespondenciaPersonal",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [
          {
            "in": "query",
            "name": "tipoDocumento",
            "description": "Tipo de documento",
            "required": true,
            "type": "string",
            "enum": ["DNI", "RUC", "PEX", "CEX", "CIP"]
          },
          {
            "in": "query",
            "name": "documento",
            "description": "Numero del documento cliente",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "json",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "identificadorDepartamento": {
                  "type": "number",
                  "description": "Identificador Departamento asociado a la dirección"
                },
                "identificadorProvincia": {
                  "type": "number",
                  "description": "Identificador Provincia asociada a la dirección"
                },
                "identificadorDistrito": {
                  "type": "number",
                  "description": "Identificador Distrito asociado a la dirección"
                },
                "direccion": {
                  "type": "string",
                  "description": "Dirección agregada por el cliente (nombre de calle, número, etc.)"
                }
              }
            }
          }
        ]
      }
    }
  }
}`);
}

function objectToArray(obj) {
  return Object.keys(obj).map(i => obj[i]);
}

function getParams (el) {
  const obj = {};
  el.get.parameters.forEach((param, index, params) => {
    obj[param.in] = {
      modelName: `Req${param.in.charAt(0).toUpperCase() + param.in.slice(1)}${el.get.operationId.charAt(0).toUpperCase() + el.get.operationId.slice(1)}`,
      params: [{
        name: param.name,
        isRequired: param.required,
        comma: (params.length - 1) === index ? true : false,
        isBoolen: typeof param.type === 'boolean' ? true : false,
        isNumber: typeof param.type === 'number' ? true : false,
        isString: typeof param.type === 'string' ? true : false,
      }]
    }
  });
  return obj;
}

function Path () {
  this.consumes;
  this.hasBodyOrQueryReq;
  this.hasBodyReq;
  this.hasParameters;
  this.hasPathReq;
  this.hasQueryReq;
  this.httpMethod;
  this.parameters;
  this.path;
}

function callMe() {
  const newObj = new Path();
  const newArr = [];
  const arr = objectToArray(getJSON()['paths']);
  arr.forEach(el => {
    newObj['consumes'] = el.get.consumes[0];
    newObj['hasBodyOrQueryReq'] = el.get.parameters.every(parameter => {return (parameter.in === 'body' || parameter.in === 'query')});
    newObj['hasBodyReq'] = el.get.parameters.every(parameter => {return (parameter.in === 'body')});
    newObj['hasParameters'] = el.get.parameters.length ? true : false;
    newObj['hasPathReq'] = el.get.parameters.every(parameter => {return (parameter.in === 'path')});
    newObj['hasQueryReq'] = el.get.parameters.every(parameter => {return (parameter.in === 'query')});
    newObj['httpMethod'] = 'get';
    newObj['parameters'] = getParams(el)
    newArr.push(newObj);    
  });
  return newArr;  
}

console.log(callMe());