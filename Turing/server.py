from flask import Flask, jsonify, request, render_template
import flask
app = Flask(__name__)

@app.route('/turing', methods=['POST'])
def turing():
    if request.method == 'POST':
        print('Incoming...')
        #print(request.get_json(force=True))
        print("Received: {0}".format(request.json['msg']))
        response = flask.jsonify({'msg': 'Le serveur a reçu: {0}'.format(request.json['msg'])})
        response.headers.add('Access-Control-Allow-Origin', '*')
        print(response)
        return response


if __name__ == '__main__':
    app.run(host='62.4.13.113')